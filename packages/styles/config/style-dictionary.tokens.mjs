import StyleDictionary from 'style-dictionary'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const configDirectory = path.dirname(fileURLToPath(import.meta.url))
const breakpointFiles = [
  { name: 'sm', minimumWidth: '$breakpoint-sm-min' },
  { name: 'md', minimumWidth: '$breakpoint-md-min' },
  { name: 'lg', minimumWidth: '$breakpoint-lg-min' },
  { name: 'xl', minimumWidth: '$breakpoint-xl-min' },
]

const getCssVariableName = (token) => {
  const syntax = token.original?.$extensions?.['com.figma.codeSyntax']?.WEB
  const match = typeof syntax === 'string' ? syntax.match(/^var\((--[A-Za-z0-9_-]+)\)$/) : null
  return match?.[1]
}

const toVariableSegment = (value) =>
  String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')

const getScssVariableName = (tokenPath) => {
  const segments = tokenPath.map(toVariableSegment).filter(Boolean)
  const normalizedSegments = segments.map((segment, index) => {
    const parent = segments[index - 1]
    return parent && segment.startsWith(`${parent}-`) ? segment.slice(parent.length + 1) : segment
  })

  return `$${normalizedSegments.join('-')}`
}

const getPrimitiveReference = (token) => {
  const targetName = token.original?.$extensions?.['com.figma.aliasData']?.targetVariableName

  if (!targetName) {
    return undefined
  }

  return getScssVariableName(targetName.split('/'))
}

// Font weights are the only numeric tokens that must stay unitless.
const isUnitlessNumber = (tokenPath) => tokenPath.some((segment) => String(segment).toLowerCase() === 'weight')

const getTokenValue = (token, value, tokenPath = []) => {
  if (value && typeof value === 'object' && typeof value.hex === 'string') {
    return value.hex
  }

  if (typeof value === 'number') {
    return isUnitlessNumber(tokenPath) ? String(value) : `${value}px`
  }

  if (typeof value === 'string' || typeof value === 'boolean') {
    return String(value)
  }

  return undefined
}

const findTokens = (value, tokens = []) => {
  if (!value || typeof value !== 'object') {
    return tokens
  }

  if (Object.prototype.hasOwnProperty.call(value, '$value')) {
    tokens.push(value)
    return tokens
  }

  for (const child of Object.values(value)) {
    findTokens(child, tokens)
  }

  return tokens
}

const getBreakpointDeclarations = (primitiveNames) =>
  breakpointFiles.map(({ name, minimumWidth }) => {
    const filePath = path.join(configDirectory, '..', 'figma', 'breakpoints', `${name}.tokens.json`)
    const payload = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    const declarations = new Map()

    for (const token of findTokens(payload)) {
      const variableName = getCssVariableName({ original: token })
      const value = getTokenValue({ original: token }, token.$value, [variableName ?? ''])
      const candidateReference = getPrimitiveReference({ original: token })
      const primitiveReference =
        candidateReference && primitiveNames.has(candidateReference) ? candidateReference : undefined

      if (variableName && (primitiveReference || value !== undefined)) {
        declarations.set(variableName, primitiveReference || value)
      }
    }

    return { minimumWidth, name, declarations }
  })

StyleDictionary.registerFormat({
  name: 'scss/primitives/figma',
  format: ({ dictionary }) => {
    const primitiveTokens = dictionary.allTokens.filter((token) => token.filePath?.endsWith('/primitives.json'))
    const lines = ['// Generated from figma/primitives.json. Do not edit directly.', '']

    for (const token of primitiveTokens) {
      const value = getTokenValue(token, token.original?.$value ?? token.value, token.path)
      if (value !== undefined) {
        lines.push(`${getScssVariableName(token.path)}: ${value};`)
      }
    }

    lines.push('')
    return lines.join('\n')
  },
})

StyleDictionary.registerFormat({
  name: 'scss/theme/figma',
  format: ({ dictionary }) => {
    const primitiveTokens = dictionary.allTokens.filter((token) => token.filePath?.endsWith('/primitives.json'))
    const themeTokens = dictionary.allTokens.filter((token) => token.filePath?.endsWith('/theme.json'))
    const primitiveNames = new Set(primitiveTokens.map((token) => getScssVariableName(token.path)))
    const lines = ['// Generated from figma/theme.json. Do not edit directly.', '', ':root {']
    const declarations = new Map()

    for (const token of themeTokens) {
      const variableName = getCssVariableName(token)
      const rawValue = token.original?.$value ?? token.value
      const value = getTokenValue(token, rawValue, token.path)
      const candidateReference = getPrimitiveReference(token)
      const primitiveReference =
        candidateReference && primitiveNames.has(candidateReference) ? candidateReference : undefined

      if (!variableName || (value === undefined && !primitiveReference)) {
        continue
      }

      declarations.set(variableName, {
        description: token.description,
        value: primitiveReference || value,
      })
    }

    for (const [variableName, declaration] of declarations) {
      if (declaration.description) {
        lines.push(`  // ${declaration.description.replace(/\r?\n/g, ' ')}`)
      }
      const outputValue = declaration.value.startsWith('$') ? `#{${declaration.value}}` : declaration.value
      lines.push(`  ${variableName}: ${outputValue};`)
    }

    lines.push('}', '')

    for (const breakpoint of getBreakpointDeclarations(primitiveNames)) {
      if (breakpoint.declarations.size === 0) {
        continue
      }

      lines.push(`@media (min-width: #{${breakpoint.minimumWidth}}) {`)

      lines.push(':root {')
      for (const [variableName, value] of breakpoint.declarations) {
        const outputValue = value.startsWith('$') ? `#{${value}}` : value
        lines.push(`  ${variableName}: ${outputValue};`)
      }
      lines.push('}')

      lines.push('}')

      lines.push('')
    }

    return lines.join('\n')
  },
})

export default {
  source: ['figma/primitives.json', 'figma/theme.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'framework/src/variables',
      files: [
        {
          destination: '_primitives.scss',
          format: 'scss/primitives/figma',
        },
        {
          destination: '_tokens.scss',
          format: 'scss/theme/figma',
        },
      ],
    },
  },
}
