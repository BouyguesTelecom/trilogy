const STATE_PROP = "state"

// Ordre = ordre dans la cascade CSS (hover avant active, disabled en dernier)
const STATE_ORDER = ["default", "hover", "focus", "pressed", "disabled"]

// "variant=primary, state=hover" -> { variant: "primary", state: "hover" } ; "primary" -> { variant: "primary" }
export function parseVariantName(name, variantProp = "variant") {
  const props = {}
  for (const part of name.split(",")) {
    const [key, value] = part.split("=").map((s) => s.trim())
    if (value === undefined) props[variantProp] = key
    else props[key] = value
  }
  return props
}

const findText = (node, { skipInstances = false } = {}) =>
  node.type === "TEXT"
    ? node
    : node.children
        ?.filter((child) => !(skipInstances && child.type === "INSTANCE"))
        .map((child) => findText(child, { skipInstances }))
        .find(Boolean)

const firstId = (alias) => (Array.isArray(alias) ? alias[0]?.id : alias?.id)

const LAYOUT_ALIGN = {
  MIN: "flex-start",
  CENTER: "center",
  MAX: "flex-end",
  SPACE_BETWEEN: "space-between",
  BASELINE: "baseline",
}

// Auto-layout avec espacement -> flexbox ; le gap utilise la variable liée, sinon la valeur en px
// Sans gap, on ne génère rien : un display:flex isolé changerait par exemple le rendu d'un <button>
function readLayoutTokens(node, variableMap) {
  if (!["HORIZONTAL", "VERTICAL"].includes(node.layoutMode)) return {}
  if (!node.itemSpacing) return {}

  const tokens = {
    display: "flex",
    "flex-direction": node.layoutMode === "HORIZONTAL" ? "row" : "column",
    "justify-content": LAYOUT_ALIGN[node.primaryAxisAlignItems ?? "MIN"],
    "align-items": LAYOUT_ALIGN[node.counterAxisAlignItems ?? "MIN"],
  }
  tokens.gap =
    variableMap.get(node.boundVariables?.itemSpacing?.id) ??
    `${node.itemSpacing}px`
  return tokens
}

// Variables liées d'abord (à jour), description JSON en secours : Figma la recopie à la duplication d'un variant
function readTokens(child, meta, variableMap) {
  const tokens = {}

  const bv = child.boundVariables ?? {}
  const bound = {
    background: firstId(bv.fills),
    border: firstId(bv.strokes),
    radius: bv.rectangleCornerRadii?.RECTANGLE_TOP_LEFT_CORNER_RADIUS?.id,
    padding: bv.paddingTop?.id,
    borderWidth: bv.individualStrokeWeights?.BORDER_TOP_WEIGHT?.id,
    height: bv.size?.y?.id ?? bv.height?.id,
    text: firstId(findText(child)?.boundVariables?.fills),
  }
  for (const [prop, id] of Object.entries(bound)) {
    const css = id && variableMap.get(id)
    if (css) tokens[prop] = css
  }

  Object.assign(tokens, readLayoutTokens(child, variableMap))

  if (meta?.description) {
    try {
      for (const [prop, info] of Object.entries(
        JSON.parse(meta.description).tokens ?? {}
      )) {
        const css = info.css || variableMap.get(info.variableId)
        if (css && !tokens[prop]) tokens[prop] = css
      }
    } catch {
      // description en texte libre
    }
  }

  return tokens
}

// Retire des états (hover, pressed...) les valeurs identiques à l'état default
function keepDifferences(states) {
  const base = states.default ?? {}
  return Object.fromEntries(
    Object.entries(states).map(([state, props]) => [
      state,
      state === "default"
        ? props
        : Object.fromEntries(
            Object.entries(props).filter(([key, value]) => base[key] !== value)
          ),
    ])
  )
}

/** { primary: { default: { background: "var(--x)" }, hover: { ... } } } */
export function extractVariantsData(compSetNode, pageData, variableMap) {
  const meta = pageData.componentSets?.[compSetNode.id]
  let metadata = null
  try {
    metadata = meta?.description ? JSON.parse(meta.description) : null
  } catch {
    // description en texte libre
  }
  // Figma recopie la description à la duplication d'un component set : on ignore celle d'un autre composant
  if (metadata?.componentPath && metadata.componentPath !== compSetNode.name) {
    metadata = null
  }

  const definitions = compSetNode.componentPropertyDefinitions ?? {}
  const variantProp =
    Object.entries(definitions).find(
      ([name, def]) => def.type === "VARIANT" && name !== STATE_PROP
    )?.[0] ??
    metadata?.variantProperty ??
    "variant"

  const variants = {}
  for (const child of compSetNode.children ?? []) {
    if (child.type !== "COMPONENT") continue

    const props = parseVariantName(child.name, variantProp)
    const variant = props[variantProp] ?? Object.values(props)[0]
    const state = props[STATE_PROP] ?? "default"

    variants[variant] ??= {}
    variants[variant][state] = readTokens(
      child,
      pageData.components?.[child.id],
      variableMap
    )
  }

  // Complète l'état default avec la description du component set
  for (const [variant, tokens] of Object.entries(metadata?.variants ?? {})) {
    variants[variant] ??= { default: {} }
    variants[variant].default ??= {}
    for (const [prop, info] of Object.entries(tokens)) {
      const css = info.css || variableMap.get(info.variableId)
      if (css && !variants[variant].default[prop]) {
        variants[variant].default[prop] = css
      }
    }
  }

  const names = Object.keys(variants)
  if (!names.length) return null

  for (const name of names) {
    const sorted = Object.entries(variants[name]).sort(
      ([a], [b]) =>
        (STATE_ORDER.indexOf(a) + 1 || 99) - (STATE_ORDER.indexOf(b) + 1 || 99)
    )
    variants[name] = keepDifferences(Object.fromEntries(sorted))
  }
  return extractCommonDefault(variants)
}

// Valeurs identiques dans l'état default de tous les variants -> clé "default" (classe de base, ex. .button)
function extractCommonDefault(variants) {
  const names = Object.keys(variants)
  if (names.length < 2) return variants

  const first = variants[names[0]].default ?? {}
  const common = Object.fromEntries(
    Object.entries(first).filter(([key, value]) =>
      names.every((name) => variants[name].default?.[key] === value)
    )
  )
  if (!Object.keys(common).length) return variants

  const result = { default: { default: common } }
  for (const name of names) {
    const { default: own = {}, ...otherStates } = variants[name]
    const specific = Object.fromEntries(
      Object.entries(own).filter(([key]) => !(key in common))
    )
    result[name] = { default: specific, ...otherStates }
  }
  return result
}

const toCamelCase = (str) =>
  str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (m) => m.toLowerCase())

const STATE_SELECTORS = {
  hover: "&:hover",
  focus: "&:focus-visible",
  pressed: "&:active",
  disabled: '&:disabled,\n    &[aria-disabled="true"]',
}

// Chaque variant est à plat : props de l'état default, puis une sous-map par autre état
export function generateComponentScss(componentName, variants) {
  const mapName = `$${toCamelCase(componentName)}Variants`
  const mixin = `${componentName}-props`

  const toLines = (props, indent) =>
    Object.entries(props)
      .map(([key, css]) => `${indent}${key}: ${css},`)
      .join("\n")

  const states = new Set()
  const entries = Object.entries(variants).flatMap(([variant, byState]) => {
    const { default: own = {}, ...others } = byState
    const nested = Object.entries(others).filter(
      ([, props]) => Object.keys(props).length
    )
    if (!Object.keys(own).length && !nested.length) return []

    nested.forEach(([state]) => states.add(state))
    const body = [
      toLines(own, "    "),
      ...nested.map(
        ([state, props]) =>
          `    ${state}: (\n${toLines(props, "      ")}\n    ),`
      ),
    ].filter(Boolean)
    return `  ${variant}: (\n${body.join("\n")}\n  ),`
  })

  const stateRules = [...states]
    .map((state, i) => {
      const selector = (STATE_SELECTORS[state] ?? `&.${state}`).replaceAll(
        "\n    ",
        "\n        "
      )
      return `${i ? " @else if" : "@if"} $state == "${state}" {
        ${selector} {
          @include ${mixin}($value);
        }
      }`
    })
    .join("")
  const stateLoop = stateRules
    ? `
    @each $state, $value in $props {
      ${stateRules}
    }`
    : ""

  return `// Do not edit directly, this file was auto-generated.

@use "sass:meta";

${mapName}: (
${entries.join("\n")}
);

@mixin ${mixin}($props) {
  @each $prop, $value in $props {
    @if meta.type-of($value) == "map" {
      // état : géré par le sélecteur du variant
    } @else if $prop == "background" {
      background-color: $value;
    } @else if $prop == "text" or $prop == "color" {
      color: $value;
    } @else if $prop == "border" {
      border-color: $value;
    } @else if $prop == "borderWidth" {
      border-style: solid;
      border-width: $value;
    } @else if $prop == "radius" {
      border-radius: $value;
    } @else if $prop == "padding" {
      padding: $value;
    } @else {
      #{$prop}: $value;
    }
  }
}

// "default" = valeurs communes, appliquées sur la classe de base sans variant
@each $variant, $props in ${mapName} {
  $selector: ".${componentName}.#{$variant}";
  @if $variant == "default" {
    $selector: ".${componentName}";
  }
  #{$selector} {
    @include ${mixin}($props);${stateLoop}
  }
}
`
}

// Les props Figma portent le nom de la propriété CSS (valeurs CSS directes), sauf direction
const LAYOUT_PROPS = {
  direction: "flex-direction",
  alignItems: "align-items",
  justifyContent: "justify-content",
}

// Composant de mise en page : ses props sont direction / alignItems / justifyContent, pas des variants de style
export function isLayoutComponentSet(compSetNode) {
  const props = Object.keys(compSetNode.componentPropertyDefinitions ?? {})
  return props.length > 0 && props.every((prop) => prop in LAYOUT_PROPS)
}

/** { defaults: { direction: "column", ... }, options: { alignItems: ["center", ...] }, gap: "var(--spacing-md)" } */
export function extractLayoutData(compSetNode, variableMap) {
  const definitions = compSetNode.componentPropertyDefinitions
  const defaults = {}
  const options = {}
  for (const [prop, def] of Object.entries(definitions)) {
    defaults[prop] = def.defaultValue
    options[prop] = def.variantOptions
  }

  const gapId = compSetNode.children?.[0]?.boundVariables?.itemSpacing?.id
  return { defaults, options, gap: gapId && variableMap.get(gapId) }
}

export function generateLayoutScss(componentName, { defaults, options, gap }) {
  const base = Object.entries(defaults).map(
    ([prop, value]) => `  ${LAYOUT_PROPS[prop]}: ${value};`
  )
  if (gap) base.push(`  gap: ${gap};`)

  const modifiers = Object.entries(options).flatMap(([prop, values]) =>
    values.map(
      (value) =>
        `.${componentName}.${LAYOUT_PROPS[prop]}-${value} {\n  ${LAYOUT_PROPS[prop]}: ${value};\n}`
    )
  )

  return `// Do not edit directly, this file was auto-generated.

.${componentName} {
  display: flex;
${base.join("\n")}
}

${modifiers.join("\n\n")}
`
}

const ALIGN_VALUES = {
  MIN: "flex-start",
  CENTER: "center",
  MAX: "flex-end",
  SPACE_BETWEEN: "space-between",
  BASELINE: "baseline",
}

// Variable liée en priorité, sinon la valeur brute en px
const spacing = (node, key, variableMap) => {
  const css = variableMap.get(node.boundVariables?.[key]?.id)
  return css ?? `${node[key] ?? 0}px`
}

// Typographie du premier texte : variable liée en priorité, sinon la valeur brute
function readTypographyDeclarations(node, variableMap, { color = false } = {}) {
  // Le texte d'une instance (ex. alertTitle dans alertContent) porte ses propres règles
  const text = findText(node, { skipInstances: true })
  if (!text) return []

  const bound = (key) => variableMap.get(firstId(text.boundVariables?.[key]))
  const style = text.style ?? {}
  const declarations = []

  const family =
    bound("fontFamily") ?? (style.fontFamily && `"${style.fontFamily}"`)
  if (family) declarations.push(`font-family: ${family};`)

  const size = bound("fontSize") ?? (style.fontSize && `${style.fontSize}px`)
  if (size) declarations.push(`font-size: ${size};`)

  const weight = bound("fontWeight") ?? style.fontWeight
  if (weight) declarations.push(`font-weight: ${weight};`)

  // La couleur n'est pas écrite en CSS (héritée) ; le natif n'hérite pas, il la lit sur le texte
  const textColor = color && bound("fills")
  if (textColor) declarations.push(`color: ${textColor};`)

  return declarations
}

// Composant sans variants : auto-layout (direction, alignements, gap, padding) et typographie de son texte
export function standaloneDeclarations(node, variableMap, options) {
  const declarations = []

  if (["HORIZONTAL", "VERTICAL"].includes(node.layoutMode)) {
    declarations.push(
      "display: flex;",
      `flex-direction: ${node.layoutMode === "HORIZONTAL" ? "row" : "column"};`,
      `justify-content: ${ALIGN_VALUES[node.primaryAxisAlignItems] ?? "flex-start"};`,
      `align-items: ${ALIGN_VALUES[node.counterAxisAlignItems] ?? "flex-start"};`
    )

    if (node.itemSpacing) {
      declarations.push(`gap: ${spacing(node, "itemSpacing", variableMap)};`)
    }

    const padding = [
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
    ]
    if (padding.some((key) => node[key])) {
      const values = padding.map((key) => spacing(node, key, variableMap))
      declarations.push(`padding: ${values.join(" ")};`)
    }
  }

  declarations.push(...readTypographyDeclarations(node, variableMap, options))
  return declarations
}

export function generateStandaloneScss(componentName, node, variableMap) {
  const declarations = standaloneDeclarations(node, variableMap)
  if (!declarations.length) return null

  return `// Do not edit directly, this file was auto-generated.

.${componentName} {
${declarations.map((line) => `  ${line}`).join("\n")}
}
`
}
