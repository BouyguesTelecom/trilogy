import StyleDictionary from 'style-dictionary'

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

const getScssVariableName = (tokenPath) => `$${tokenPath.map(toVariableSegment).filter(Boolean).join('-')}`

const getPrimitiveReference = (token) => {
  const targetName = token.original?.$extensions?.['com.figma.aliasData']?.targetVariableName

  if (!targetName) {
    return undefined
  }

  return getScssVariableName(targetName.split('/'))
}

const getTokenValue = (token, value) => {
  if (value && typeof value === 'object' && typeof value.hex === 'string') {
    return value.hex
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }

  return undefined
}

StyleDictionary.registerFormat({
  name: 'scss/primitives/figma',
  format: ({ dictionary }) => {
    const primitiveTokens = dictionary.allTokens.filter((token) => token.filePath?.endsWith('/primitives.json'))
    const lines = ['// Generated from figma/primitives.json. Do not edit directly.', '']

    for (const token of primitiveTokens) {
      const value = getTokenValue(token, token.original?.$value ?? token.value)
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
      const value = getTokenValue(token, rawValue)
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
    return lines.join('\n')
  },
})

export default {
  source: ['figma/primitives.json', 'figma/theme.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'framework/src/',
      files: [
        {
          destination: 'primitives.scss',
          format: 'scss/primitives/figma',
        },
        {
          destination: 'tokens.scss',
          format: 'scss/theme/figma',
        },
      ],
    },
  },
}
