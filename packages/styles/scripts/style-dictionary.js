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
    if (typeof value.alpha === 'number' && value.alpha < 1) {
      if (value.alpha === 0) return 'transparent'
      const channels = value.components.map((channel) => Math.round(channel * 255))
      return `rgba(${channels.join(', ')}, ${value.alpha})`
    }
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
  const inputBackgrounds = getTokensByCssPrefix(dictionary, 'input-bg')
  const inputBorderColors = getTokensByCssPrefix(dictionary, 'input-border').filter(
    ({ variable }) => !variable.startsWith('--input-border-width-'),
  )
  const textColors = getTokensByCssPrefix(dictionary, 'text')
  const iconColors = getTokensByCssPrefix(dictionary, 'icon').filter(
    ({ variable }) => !variable.startsWith('--icon-size-') && !variable.startsWith('--icon-image-'),
  )
  const borderColors = getTokensByCssPrefix(dictionary, 'border').filter(
    ({ variable }) => !variable.startsWith('--border-width-'),
  )
  const byName = (entries, prefix) =>
    new Map(entries.map(({ variable }) => [getSemanticTokenName(variable, prefix), `var(${variable})`]))
  const backgroundsByName = byName(backgrounds, '--bg')
  const inputBackgroundsByName = byName(inputBackgrounds, '--input-bg')
  const primaryInputBackground = dictionary.allTokens.find(
    (token) => isModeToken(token, 'light') && getCssVariableName(token) === '--input-bg',
  )
  if (primaryInputBackground) inputBackgroundsByName.set('primary', 'var(--input-bg)')
  const textByName = byName(textColors, '--text')
  const iconColorsByName = byName(iconColors, '--icon')
  // The primary icon token is named `primary` in Figma but uses the bare --icon variable.
  const primaryIcon = dictionary.allTokens.find(
    (token) => isModeToken(token, 'light') && getCssVariableName(token) === '--icon',
  )
  if (primaryIcon) iconColorsByName.set('primary', 'var(--icon)')
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
  // Public button variant → token suffix.
  const buttonVariantTokens = [
    { variant: 'accent', token: 'accent' },
    { variant: 'primary', token: 'primary' },
    { variant: 'secondary', token: 'secondary' },
    { variant: 'ghost', token: 'ghost' },
  ]
  const buttonVariantStates = [
    ['background', (token) => `--btn-bg-${token}`],
    ['hover-background', (token) => `--btn-bg-${token}-hover`, (token) => `--btn-bg-${token}`],
    ['pressed-background', (token) => `--btn-bg-${token}-pressed`, (token) => `--btn-bg-${token}`],
    ['border', (token) => `--btn-border-${token}`],
    ['hover-border', (token) => `--btn-border-${token}-hover`, (token) => `--btn-border-${token}`],
    ['pressed-border', (token) => `--btn-border-${token}-pressed`, (token) => `--btn-border-${token}`],
    ['text', (token) => `--btn-text-${token}`],
    ['hover-text', (token) => `--btn-text-${token}-hover`, (token) => `--btn-text-${token}`],
    ['pressed-text', (token) => `--btn-text-${token}-pressed`, (token) => `--btn-text-${token}`],
  ]
  const buttonVariants = new Map(
    buttonVariantTokens.map(({ variant, token }) => [
      variant,
      new Map(
        buttonVariantStates.map(([state, getVariable, getFallback]) => {
          const variable = getVariable(token)
          const fallback = getFallback ? `, var(${getFallback(token)})` : ''
          return [state, `var(${variable}${fallback})`]
        }),
      ),
    ]),
  )

  return {
    backgrounds: backgroundsByName,
    inputBackgrounds: inputBackgroundsByName,
    inputBorderColors: byName(inputBorderColors, '--input-border'),
    backgroundSolid: new Map([...backgroundsByName].filter(([name]) => !name.endsWith('-subtle'))),
    backgroundSubtle: new Map([...backgroundsByName].filter(([name]) => name.endsWith('-subtle'))),
    borders: bordersByName,
    text: textByName,
    iconColors: iconColorsByName,
    colorsStatus: statusMap('text', textByName),
    borderColorsStatus: statusMap('border', bordersByName),
    bgStatus: statusMap('bg', backgroundsByName),
    buttonVariants,
    bgStatusSubtle: new Map(
      [...statusMap('subtle', backgroundsByName)].map(([status, value]) => [`${status}-subtle`, value]),
    ),
  }
}

const formatSassMap = (name, entries) =>
  [`$${name}: (`, ...[...entries].map(([key, value]) => `  '${key}': ${value},`), ');'].join('\n')

const formatNestedSassMap = (name, entries) =>
  [
    `$${name}: (`,
    ...[...entries].flatMap(([key, values]) => [
      `  '${key}': (`,
      ...[...values].map(([state, value]) => `    '${state}': ${value},`),
      '  ),',
    ]),
    ');',
  ].join('\n')

const toEnumMember = (value) =>
  value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.toUpperCase())
    .join('_')

const formatEnum = (name, entries, memberPrefix = '', valueTransform = (value) => value) =>
  [
    `export enum ${name} {`,
    ...[...entries.keys()].map((value) => `  ${memberPrefix}${toEnumMember(value)} = '${valueTransform(value)}',`),
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
      formatNestedSassMap('button-variants', maps.buttonVariants),
      formatSassMap('colors-icon', maps.iconColors),
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
      formatEnum('IconColor', maps.iconColors),
      '',
      formatEnum('InputBg', maps.inputBackgrounds),
      '',
      formatEnum('InputBorderColor', maps.inputBorderColors),
      '',
    ].join('\n')
  },
})

StyleDictionary.registerFormat({
  name: 'typescript/radius/enum',
  format: ({ dictionary }) => {
    const entries = new Map(
      getReactTokens(dictionary, (token) => isModeToken(token, 'light') && token.path[1] === 'Radius').map(
        ({ key }) => [key.replace(/^radius/, '').toLowerCase(), key],
      ),
    )
    return [
      '// Generated from Figma tokens. Do not edit directly.',
      '',
      formatEnum('Radius', entries).replace('RadiusValues', 'RadiusTokenValues'),
      '',
      `export const RADIUS_TOKENS = ${JSON.stringify(Object.fromEntries(entries), null, 2)} as const`,
      '',
    ].join('\n')
  },
})

StyleDictionary.registerFormat({
  name: 'typescript/status/enums',
  format: ({ dictionary }) => {
    const maps = colorMapDefinitions(dictionary)
    return [
      '// Generated from Figma tokens. Do not edit directly.',
      '',
      formatEnum('StatusVariant', maps.colorsStatus),
      '',
      formatEnum('StatusSubtleVariant', maps.bgStatusSubtle),
      '',
    ].join('\n')
  },
})

StyleDictionary.registerFormat({
  name: 'typescript/button/enum',
  format: ({ dictionary }) => {
    const maps = colorMapDefinitions(dictionary)
    return [
      '// Generated from button color mappings. Do not edit directly.',
      '',
      formatEnum('ButtonVariant', maps.buttonVariants),
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
    const themeSections = options.themeSections || [options]
    const declarations = themeSections.map(({ property, filter, modeAware }) => {
      const value = modeAware
        ? `{\n${modes
            .map((mode) => {
              const entries = getReactTokens(dictionary, (token) => filter(token) && isModeToken(token, mode))
              return `  ${mode}: ${formatReactObject(entries).replace(/\n/g, '\n  ')},`
            })
            .join('\n')}\n}`
        : formatReactObject(getReactTokens(dictionary, filter))

      return { property, value }
    })

    const themeObject = declarations
      .map(({ property, value }) => `  ${property}: ${value.replace(/\n/g, '\n  ')},`)
      .join('\n')
    return `// Generated from figma tokens. Do not edit directly.\n\nimport type { TrilogyThemeIcons } from './ThemeIcons'\nexport type { ThemeIcons, TrilogyThemeIcons } from './ThemeIcons'\n\nexport const THEME_TRILOGY = {\n${themeObject}\n} as const\n\ntype WidenThemeValues<T> = T extends string\n  ? string\n  : T extends number\n    ? number\n    : T extends boolean\n      ? boolean\n      : T extends readonly unknown[]\n        ? { [K in keyof T]: WidenThemeValues<T[K]> }\n        : T extends object\n          ? { -readonly [K in keyof T]: WidenThemeValues<T[K]> }\n          : T\n\nexport type TrilogyTheme = WidenThemeValues<typeof THEME_TRILOGY> & TrilogyThemeIcons\nexport type TrilogyThemeMode = keyof TrilogyTheme['colors']\nexport type ActiveTrilogyTheme = Omit<TrilogyTheme, 'colors'> & {\n  colors: TrilogyTheme['colors'][TrilogyThemeMode]\n}\n`
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
            themeSections: [
              {
                property: 'colors',
                modeAware: true,
                filter: (token) => isModeToken(token) && token.path[1] !== 'Radius' && token.path[1] !== 'Spacing',
              },
              {
                property: 'fonts',
                filter: (token) => token.filePath?.includes('sm.tokens') && token.path[0] === 'Font',
              },
              {
                property: 'radius',
                filter: (token) => isModeToken(token, 'light') && token.path[1] === 'Radius',
              },
              {
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
        {
          destination: '../interfaces/status.ts',
          format: 'typescript/status/enums',
        },
        {
          destination: '../interfaces/button.ts',
          format: 'typescript/button/enum',
        },
        {
          destination: '../interfaces/radius.ts',
          format: 'typescript/radius/enum',
        },
      ],
    },
  },
}
