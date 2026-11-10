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

const findText = (node) =>
  node.type === "TEXT" ? node : node.children?.map(findText).find(Boolean)

const firstId = (alias) => (Array.isArray(alias) ? alias[0]?.id : alias?.id)

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
    text: firstId(findText(child)?.boundVariables?.fills),
  }
  for (const [prop, id] of Object.entries(bound)) {
    const css = id && variableMap.get(id)
    if (css) tokens[prop] = css
  }

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
  return variants
}

const toCamelCase = (str) =>
  str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (m) => m.toLowerCase())

// Une prop "state" dans Figma suffit à structurer par états, même avec la seule valeur "default"
export const hasStateProperty = (compSetNode) =>
  STATE_PROP in (compSetNode.componentPropertyDefinitions ?? {})

export function generateComponentScss(
  componentName,
  variants,
  { stateful = false } = {}
) {
  const mapName = `$${toCamelCase(componentName)}Variants`
  const mixin = `${componentName}-props`

  const states = new Set(
    Object.values(variants).flatMap((byState) =>
      Object.entries(byState)
        .filter(([, props]) => Object.keys(props).length)
        .map(([state]) => state)
    )
  )
  const hasStates = stateful || [...states].some((state) => state !== "default")

  const toLines = (props, indent) =>
    Object.entries(props)
      .map(([key, css]) => `${indent}${key}: ${css},`)
      .join("\n")

  const entries = Object.entries(variants).map(([variant, byState]) => {
    // Sans état (ex. alert) : la map est à plat, variant -> props
    if (!hasStates)
      return `  ${variant}: (\n${toLines(byState.default ?? {}, "    ")}\n  ),`

    const body = Object.entries(byState)
      .filter(([, props]) => Object.keys(props).length)
      .map(
        ([state, props]) =>
          `    "${state}": (\n${toLines(props, "      ")}\n    ),`
      )
      .join("\n")
    return `  ${variant}: (\n${body}\n  ),`
  })

  const STATE_SELECTORS = {
    hover: "&:hover",
    focus: "&:focus-visible",
    pressed: "&:active",
    disabled: '&:disabled,\n        &[aria-disabled="true"]',
  }
  const branch = (state, body) => `@if $state == "${state}" {\n${body}\n      }`
  const include = `        @include ${mixin}($props);`
  const stateRules = [
    branch("default", include),
    ...[...states]
      .filter((state) => state !== "default")
      .map((state) =>
        branch(
          state,
          `        ${STATE_SELECTORS[state] ?? `&.${state}`} {\n  ${include}\n        }`
        )
      ),
  ]
    .map((rule, i) => (i ? rule.replace(/^@if/, "if") : rule))
    .join(" @else ")

  const rules = hasStates
    ? `@each $variant, $states in ${mapName} {
  .${componentName}.#{$variant} {
    @each $state, $props in $states {
      ${stateRules}
    }
  }
}`
    : `@each $variant, $props in ${mapName} {
  .${componentName}.#{$variant} {
    @include ${mixin}($props);
  }
}`

  return `// Do not edit directly, this file was auto-generated.

${mapName}: (
${entries.join("\n")}
);

@mixin ${mixin}($props) {
  @each $prop, $value in $props {
    @if $prop == "background" {
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

${rules}
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
