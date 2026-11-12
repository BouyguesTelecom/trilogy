// Génère les styles React Native d'un composant à partir des variants extraits de Figma.
// Le thème est statique : la fusion base + variant + état est calculée ici, le fichier généré ne contient que des objets finaux.
// hover et focus n'existent pas en natif : seuls default, pressed et disabled sont conservés.

// Le thème du consommateur : cet alias est à pointer vers son fichier de thème
export const THEME_ALIAS = "@trilogy-react/theme"

// Clé extraite de Figma -> [cible, propriété React Native]
const RN_PROPS = {
  background: ["view", "backgroundColor"],
  border: ["view", "borderColor"],
  borderWidth: ["view", "borderWidth"],
  radius: ["view", "borderRadius"],
  padding: ["view", "padding"],
  height: ["view", "height"],
  gap: ["view", "gap"],
  "flex-direction": ["view", "flexDirection"],
  "justify-content": ["view", "justifyContent"],
  "align-items": ["view", "alignItems"],
  text: ["text", "color"],
  color: ["text", "color"],
  "font-family": ["text", "fontFamily"],
  "font-size": ["text", "fontSize"],
  "font-weight": ["text", "fontWeight"],
}

// Préfixe de la variable CSS -> groupe du thème (même nommage que theme.ts)
const THEME_GROUPS = [
  [/^border-width-/, "borderWidths"],
  [/^radius-/, "radius"],
  [/^spacing-/, "spacings"],
  [/^icon-size-/, "iconSizes"],
  [/^size-/, "sizes"],
  [/^font-/, "fonts"],
]

const camelCase = (str) => str.replace(/-(\w)/g, (_, c) => c.toUpperCase())
const pascalCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const objectKey = (name) =>
  /^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name)

const themeRef = (cssName) => {
  const group = THEME_GROUPS.find(([pattern]) => pattern.test(cssName))?.[1]
  return group
    ? `theme.${group}.${camelCase(cssName)}`
    : `colors.${camelCase(cssName)}`
}

function toValue(prop, css) {
  const variable = css.match(/^var\(--([\w-]+)\)$/)
  const px = css.match(/^(-?\d+(?:\.\d+)?)px$/)
  const quoted = css.match(/^"(.*)"$/)

  if (prop === "font-weight") {
    const raw = variable ? `String(${themeRef(variable[1])})` : `"${css}"`
    return `${raw} as TextStyle["fontWeight"]`
  }
  if (variable) return themeRef(variable[1])
  if (px) return px[1]
  if (quoted) return JSON.stringify(quoted[1])
  return /^-?\d+(?:\.\d+)?$/.test(css) ? css : JSON.stringify(css)
}

// Propriétés Figma -> propriétés React Native, séparées en style de vue et de texte
function toRn(props) {
  const view = new Map()
  const text = new Map()
  for (const [key, css] of Object.entries(props ?? {})) {
    const target = RN_PROPS[key]
    if (!target) continue
    const [kind, rnProp] = target
    ;(kind === "view" ? view : text).set(rnProp, toValue(key, css))
  }
  return { view, text }
}

// Les valeurs du second remplacent celles du premier
const merge = (a, b) => new Map([...a, ...b])

// Seules ces propriétés changent entre light et dark
const MODE_PROPS = new Set(["backgroundColor", "borderColor", "color"])

const literal = (spreads, entries, indent) => {
  const lines = [
    ...spreads.map((name) => `${indent}  ...${name},`),
    ...[...entries].map(([prop, value]) => `${indent}  ${prop}: ${value},`),
  ]
  return lines.length ? `{\n${lines.join("\n")}\n${indent}}` : "{}"
}

// Retire d'une Map ce qui est déjà identique dans la base
const without = (map, base) =>
  new Map([...map].filter(([key, value]) => base.get(key) !== value))

export function generateNativeStyles(componentName, variants) {
  const pascalName = pascalCase(componentName)
  const variantType = `${pascalName}VariantStyles`
  const stylesType = `${pascalName}Styles`
  const baseType = `${pascalName}BaseStyles`

  // Valeurs communes à tous les variants et indépendantes du mode : un StyleSheet à part, appliqué avant le variant
  const common = toRn(variants.default?.default)
  const only = (map) =>
    new Map([...map].filter(([prop]) => !MODE_PROPS.has(prop)))
  const baseView = only(common.view)
  const baseText = only(common.text)

  const baseKeys = []
  const baseEntries = []
  if (baseView.size) {
    baseKeys.push("  base: ViewStyle")
    baseEntries.push(`  base: ${literal([], baseView, "  ")},`)
  }
  if (baseText.size) {
    baseKeys.push("  baseText: TextStyle")
    baseEntries.push(`  baseText: ${literal([], baseText, "  ")},`)
  }

  // Chaque style ne contient que ses différences : l'ordre des tableaux côté composant fait le reste
  const variantBlocks = []
  for (const [variant, byState] of Object.entries(variants)) {
    if (variant === "default") continue

    const own = toRn(byState.default)
    const view = without(merge(common.view, own.view), baseView)
    const text = without(merge(common.text, own.text), baseText)
    const pressed = toRn(byState.pressed)
    const disabled = toRn(byState.disabled)

    const fields = [
      ["view", view, true],
      ["pressed", pressed.view],
      ["disabled", disabled.view],
      ["text", text, true],
      ["disabledText", disabled.text],
    ]
      .filter(([, map, required]) => required || map.size)
      .map(([name, map]) => `    ${name}: ${literal([], map, "    ")},`)

    variantBlocks.push(
      `  ${objectKey(variant)}: StyleSheet.create<${variantType}>({\n${fields.join("\n")}\n  }),`
    )
  }

  return `// Do not edit directly, this file was auto-generated.
import { DEFAULT_THEME_TRILOGY as theme } from "${THEME_ALIAS}"
import { StyleSheet, type TextStyle, type ViewStyle } from "react-native"

export type ${variantType} = {
  view: ViewStyle
  pressed?: ViewStyle
  disabled?: ViewStyle
  text: TextStyle
  disabledText?: TextStyle
}

export type ${stylesType} = Record<"light" | "dark", Record<string, ${variantType}>>

type Colors = Record<keyof (typeof theme.colors)["light"], string>

type ${baseType} = {
${baseKeys.join("\n")}
}

// Valeurs identiques quel que soit le variant et le mode
export const ${componentName}BaseStyles: ${baseType} = StyleSheet.create<${baseType}>({
${baseEntries.join("\n")}
})

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): Record<string, ${variantType}> => ({
${variantBlocks.join("\n")}
})

export const ${componentName}Styles: ${stylesType} = {
  light: build(theme.colors.light),
  dark: build(theme.colors.dark),
}
`
}

// Composant sans variants (ex. alertTitle) : un style de vue et/ou de texte ; par mode si une couleur en dépend
export function generateNativeStandaloneStyles(componentName, declarations) {
  const props = {}
  for (const line of declarations) {
    const [, key, value] = line.match(/^([\w-]+): (.*);$/)
    // Les raccourcis à plusieurs valeurs (ex. padding: a b c d) n'existent pas en natif
    if (/\s/.test(value) && !value.startsWith('"')) continue
    props[key] = value
  }
  const { view, text } = toRn(props)
  if (!view.size && !text.size) return null

  const byMode = [...view.keys(), ...text.keys()].some((prop) =>
    MODE_PROPS.has(prop)
  )
  const pascalName = pascalCase(componentName)
  const stylesType = `${pascalName}Styles`

  const fields = [
    ["view", "ViewStyle", view],
    ["text", "TextStyle", text],
  ].filter(([, , map]) => map.size)

  const type = `type ${stylesType} = {\n${fields.map(([name, kind]) => `  ${name}: ${kind}`).join("\n")}\n}`
  const body = fields
    .map(([name, , map]) => `    ${name}: ${literal([], map, "    ")},`)
    .join("\n")
  const create = `StyleSheet.create<${stylesType}>({\n${body}\n  })`

  const header = `// Do not edit directly, this file was auto-generated.
import { DEFAULT_THEME_TRILOGY as theme } from "${THEME_ALIAS}"
import { StyleSheet, ${fields.map(([, kind]) => `type ${kind}`).join(", ")} } from "react-native"
`

  if (!byMode) {
    return `${header}
${type}

export const ${componentName}Styles: ${stylesType} = ${create}
`
  }

  return `${header}
type Colors = Record<keyof (typeof theme.colors)["light"], string>

${type}

// Appelé une fois par mode au chargement du module, pas au rendu
const build = (colors: Colors): ${stylesType} =>
  ${create}

export const ${componentName}Styles: Record<"light" | "dark", ${stylesType}> = {
  light: build(theme.colors.light),
  dark: build(theme.colors.dark),
}
`
}
