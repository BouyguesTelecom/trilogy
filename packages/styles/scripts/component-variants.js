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
  const variantProp = metadata?.variantProperty ?? "variant"

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

export function generateComponentScss(componentName, variants) {
  const mapName = `$${toCamelCase(componentName)}Variants`
  const mixin = `${componentName}-props`

  const entries = Object.entries(variants).map(([variant, states]) => {
    const body = Object.entries(states)
      .filter(([, props]) => Object.keys(props).length)
      .map(([state, props]) => {
        const lines = Object.entries(props)
          .map(([key, css]) => `      ${key}: ${css},`)
          .join("\n")
        return `    "${state}": (\n${lines}\n    ),`
      })
      .join("\n")
    return `  ${variant}: (\n${body}\n  ),`
  })

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

@each $variant, $states in ${mapName} {
  .${componentName}.#{$variant} {
    @each $state, $props in $states {
      @if $state == "default" {
        @include ${mixin}($props);
      } @else if $state == "hover" {
        &:hover {
          @include ${mixin}($props);
        }
      } @else if $state == "focus" {
        &:focus-visible {
          @include ${mixin}($props);
        }
      } @else if $state == "pressed" {
        &:active {
          @include ${mixin}($props);
        }
      } @else if $state == "disabled" {
        &:disabled,
        &[aria-disabled="true"] {
          @include ${mixin}($props);
        }
      } @else {
        &.is-#{$state} {
          @include ${mixin}($props);
        }
      }
    }
  }
}
`
}
