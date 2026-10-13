import StyleDictionary from 'style-dictionary'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const configDirectory = path.dirname(fileURLToPath(import.meta.url))
const stylesDirectory = path.resolve(configDirectory, '..')
const modes = ['light', 'dark']

const isPrimitiveToken = (token) => path.basename(token.filePath ?? '') === 'tokens.json'
const isModeToken = (token, mode) => modes.includes(token.path[0]) && (mode === undefined || token.path[0] === mode)

// Keep identical semantic paths separate so dark tokens do not overwrite light tokens.
StyleDictionary.registerParser({
  name: 'figma/tokens',
  pattern: /[/\\]figma[/\\].*\.json$/i,
  parser: ({ contents, filePath }) => {
    const tokens = JSON.parse(contents)
    // Collection metadata is not a token and would collide across source files.
    delete tokens.$extensions

    if (!/[/\\]mode[/\\]/i.test(filePath)) {
      return tokens
    }

    const mode = path.basename(filePath).split('.')[0].toLowerCase()
    const scopedTokens = JSON.parse(
      JSON.stringify(tokens, (key, value) =>
        typeof value === 'string'
          ? value.replace(/\{([^{}]+)\}/g, (match, reference) => {
              const target = reference.split('.').reduce((current, segment) => current?.[segment], tokens)
              return target ? `{${mode}.${reference}}` : match
            })
          : value,
      ),
    )
    return { [mode]: scopedTokens }
  },
})

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

const getRawTokenValue = (token) => {
  const originalValue = token.original?.$value ?? token.original?.value
  return typeof originalValue === 'string' && /\{[^{}]+\}/.test(originalValue)
    ? token.$value ?? token.value
    : originalValue ?? token.$value ?? token.value
}

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

const getReactTokenValue = (token) => {
  const value = getRawTokenValue(token)

  if (value && typeof value === 'object' && typeof value.hex === 'string') {
    return value.hex
  }

  return value
}

const toTypeScriptKey = (value) => {
  const segments = String(value)
    .replace(/^--/, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)

  return segments
    .map((segment, index) => {
      const normalized = segment.charAt(0).toLowerCase() + segment.slice(1)
      return index === 0 ? normalized : normalized.charAt(0).toUpperCase() + normalized.slice(1)
    })
    .join('')
}

const getReactTokenKey = (token) => {
  const syntax = token.original?.$extensions?.['com.figma.codeSyntax']?.WEB
  const variableName = typeof syntax === 'string' ? syntax.match(/^var\((--[A-Za-z0-9_-]+)\)$/)?.[1] : undefined

  if (variableName) {
    return toTypeScriptKey(variableName)
  }

  if (token.path[0] === 'Font') {
    return toTypeScriptKey(token.path.slice(1).join('-'))
  }

  return toTypeScriptKey(token.path[token.path.length - 1])
}

const getReactTokens = (dictionary, predicate) => {
  const keys = new Set()
  const entries = []

  for (const token of dictionary.allTokens.filter(predicate)) {
    const value = getReactTokenValue(token)
    const initialKey = getReactTokenKey(token)
    let key = initialKey

    if (keys.has(key)) {
      key = `token${toTypeScriptKey(token.path.join('-'))}`
      while (keys.has(key)) {
        key = `${key}Value`
      }
    }

    if (key && value !== undefined) {
      keys.add(key)
      entries.push({ key, value })
    }
  }

  return entries
}

const formatReactObject = (entries, indent = '  ') => {
  const lines = entries.map(({ key, value }) => `${indent}${JSON.stringify(key)}: ${JSON.stringify(value)},`)
  return ['{', ...lines, '}'].join('\n')
}

const getTokensByCssPrefix = (dictionary, prefix) =>
  dictionary.allTokens
    .filter((token) => isModeToken(token, 'light'))
    .map((token) => ({ token, variable: getCssVariableName(token) }))
    .filter(({ variable }) => variable?.startsWith(`--${prefix}-`))

const getSemanticTokenName = (variable, prefix) => variable.slice(prefix.length + 1)

const getColorMapDefinitions = (dictionary) => {
  const backgrounds = getTokensByCssPrefix(dictionary, 'bg')
  const textColors = getTokensByCssPrefix(dictionary, 'text')
  const borderColors = getTokensByCssPrefix(dictionary, 'border').filter(
    ({ variable }) => !variable.startsWith('--border-width-'),
  )
  const byName = (entries, prefix) =>
    new Map(entries.map(({ variable }) => [getSemanticTokenName(variable, prefix), `var(${variable})`]))
  const backgroundsByName = byName(backgrounds, '--bg')
  const textByName = byName(textColors, '--text')
  const bordersByName = byName(borderColors, '--border')
  // Keep the original brand key and expose primary as a generic border alias.
  if (bordersByName.has('brand')) bordersByName.set('primary', 'var(--border)')
  const statuses = [
    { key: 'success', text: 'success', border: 'success', bg: 'success', subtle: 'success-subtle' },
    { key: 'error', text: 'error', border: 'error', bg: 'error', subtle: 'error-subtle' },
    { key: 'warning', text: 'warning', border: 'warning', bg: 'warning', subtle: 'warning-subtle' },
    { key: 'information', text: 'information', border: 'information', bg: 'information', subtle: 'information-subtle' },
  ]
  const statusMap = (field, values) =>
    new Map(
      statuses.map(({ key, [field]: tokenName }) => {
        const value = values.get(tokenName)
        if (!value) throw new Error(`Missing ${field} status token "${tokenName}" in Figma token set.`)
        return [key, value]
      }),
    )

  return {
    backgrounds: backgroundsByName,
    backgroundSolid: new Map([...backgroundsByName].filter(([name]) => !name.endsWith('-subtle'))),
    backgroundSubtle: new Map([...backgroundsByName].filter(([name]) => name.endsWith('-subtle'))),
    borders: bordersByName,
    text: textByName,
    colorsStatus: statusMap('text', textByName),
    borderColorsStatus: statusMap('border', bordersByName),
    bgStatus: statusMap('bg', backgroundsByName),
    bgStatusSubtle: new Map(
      [...statusMap('subtle', backgroundsByName)].map(([status, value]) => [`${status}-subtle`, value]),
    ),
  }
}

const formatSassMap = (name, entries) =>
  [`$${name}: (`, ...[...entries].map(([key, value]) => `  '${key}': ${value},`), ');'].join('\n')

const toEnumMember = (value) =>
  value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.toUpperCase())
    .join('_')

const formatEnum = (name, entries, memberPrefix = '') =>
  [
    `export enum ${name} {`,
    ...[...entries.keys()].map((value) => `  ${memberPrefix}${toEnumMember(value)} = '${value}',`),
    '}',
    '',
    `export type ${name}Values = \`${'${'}${name}}\``,
  ].join('\n')

const colorMapDefinitions = (dictionary) => getColorMapDefinitions(dictionary)

StyleDictionary.registerFormat({
  name: 'scss/color-maps/figma',
  format: ({ dictionary }) => {
    const maps = colorMapDefinitions(dictionary)
    return [
      '// Generated from Figma tokens. Do not edit directly.',
      formatSassMap('bg-colors-all', maps.backgrounds),
      formatSassMap('border-color', maps.borders),
      formatSassMap('bg-status', maps.bgStatus),
      formatSassMap('bg-status-subtle', maps.bgStatusSubtle),
      formatSassMap('border-colors-status', maps.borderColorsStatus),
      formatSassMap('colors-status', maps.colorsStatus),
      formatSassMap('colors-all', maps.text),
      '',
    ].join('\n\n')
  },
})

StyleDictionary.registerFormat({
  name: 'typescript/colors/enums',
  format: ({ dictionary }) => {
    const maps = colorMapDefinitions(dictionary)
    return [
      '// Generated from Figma tokens. Do not edit directly.',
      '',
      formatEnum('BackgroundColor', maps.backgrounds),
      '',
      formatEnum('BackgroundColorSolid', maps.backgroundSolid),
      '',
      formatEnum('BackgroundColorSubtle', maps.backgroundSubtle),
      '',
      formatEnum('BorderColor', maps.borders),
      '',
      formatEnum('TextColor', maps.text),
      '',
      formatEnum('ColorsStatus', maps.colorsStatus),
      '',
      formatEnum('BorderColorsStatus', maps.borderColorsStatus),
      '',
      formatEnum('BgStatusSubtle', maps.bgStatusSubtle),
      '',
      formatEnum('BgStatus', maps.bgStatus),
      '',
    ].join('\n')
  },
})

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
    const primitiveTokens = dictionary.allTokens.filter(isPrimitiveToken)
    const lines = []

    for (const token of primitiveTokens) {
      const value = getTokenValue(token, getRawTokenValue(token), token.path)
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
    const primitiveTokens = dictionary.allTokens.filter(isPrimitiveToken)
    const primitiveNames = new Set(primitiveTokens.map((token) => getScssVariableName(token.path)))
    const lines = []

    for (const mode of modes) {
      const declarations = new Map()
      lines.push(mode === 'light' ? ':root, [data-mode="light"] {' : '[data-mode="dark"] {')

      for (const token of dictionary.allTokens.filter((token) => isModeToken(token, mode))) {
        const variableName = getCssVariableName(token)
        const rawValue = getRawTokenValue(token)
        const value = getTokenValue(token, rawValue, token.path)
        const candidateReference = getPrimitiveReference(token)
        const primitiveReference =
          candidateReference && primitiveNames.has(candidateReference) ? candidateReference : undefined

        if (!variableName || (value === undefined && !primitiveReference)) {
          continue
        }

        declarations.set(variableName, {
          value: primitiveReference || value,
        })
      }

      for (const [variableName, declaration] of declarations) {
        const outputValue = declaration.value.startsWith('$') ? `#{${declaration.value}}` : declaration.value
        lines.push(`  ${variableName}: ${outputValue};`)
      }

      lines.push('}', '')
    }

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

StyleDictionary.registerFormat({
  name: 'typescript/theme/react',
  format: ({ dictionary, options }) => {
    const exports = options.exports || [options]
    const declarations = exports.map(({ name, property, filter, modeAware }) => {
      const value = modeAware
        ? `{\n${modes
            .map((mode) => {
              const entries = getReactTokens(dictionary, (token) => filter(token) && isModeToken(token, mode))
              return `  ${mode}: ${formatReactObject(entries).replace(/\n/g, '\n  ')},`
            })
            .join('\n')}\n}`
        : formatReactObject(getReactTokens(dictionary, filter))

      return { name, property, value }
    })

    const themeObject = declarations
      .map(({ property, value }) => `  ${property}: ${value.replace(/\n/g, '\n  ')},`)
      .join('\n')
    const aliases = declarations.map(({ name, property }) => `export const ${name} = THEME_TRILOGY.${property}`)

    return `// Generated from figma tokens. Do not edit directly.\n\nexport const THEME_TRILOGY = {\n  defaultMode: 'light',\n${themeObject}\n} as const\n\nexport const THEMES_TRILOGY = {\n  trilogy: THEME_TRILOGY,\n} as const\n\n${aliases.join(
      '\n',
    )}\n`
  },
})

export default {
  parsers: ['figma/tokens'],
  source: ['figma/tokens.json', 'figma/mode/*.tokens.json', 'figma/breakpoints/sm.tokens.json'].map((file) =>
    path.join(stylesDirectory, file),
  ),
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: `${path.join(stylesDirectory, 'framework/src/variables')}/`,
      files: [
        {
          destination: '_primitives.scss',
          format: 'scss/primitives/figma',
        },
        {
          destination: '_tokens.scss',
          format: 'scss/theme/figma',
        },
        {
          destination: '_color-maps.scss',
          format: 'scss/color-maps/figma',
        },
      ],
    },
    react: {
      transformGroup: 'js',
      buildPath: path.join(configDirectory, '../../react/theme/'),
      files: [
        {
          destination: 'index.ts',
          format: 'typescript/theme/react',
          options: {
            exports: [
              {
                name: 'THEME_COLORS_TRILOGY',
                property: 'colors',
                modeAware: true,
                filter: (token) => isModeToken(token) && token.path[1] !== 'Radius' && token.path[1] !== 'Spacing',
              },
              {
                name: 'THEME_FONTS_TRILOGY',
                property: 'fonts',
                filter: (token) => token.filePath?.includes('sm.tokens') && token.path[0] === 'Font',
              },
              {
                name: 'THEME_RADIUS_TRILOGY',
                property: 'radius',
                filter: (token) => isModeToken(token, 'light') && token.path[1] === 'Radius',
              },
              {
                name: 'THEME_SPACINGS_TRILOGY',
                property: 'spacings',
                filter: (token) => isModeToken(token, 'light') && token.path[1] === 'Spacing',
              },
            ],
          },
        },
        {
          destination: '../interfaces/colors.ts',
          format: 'typescript/colors/enums',
        },
      ],
    },
  },
}
