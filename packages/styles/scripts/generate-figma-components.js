#!/usr/bin/env node
import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

// Charge les variables d'environnement (.env à la racine)
process.loadEnvFile(path.resolve(import.meta.dirname, "../../../.env"))

const FIGMA_API_KEY = process.env.FIGMA_API_KEY
if (!FIGMA_API_KEY) {
  console.error("❌ Variable FIGMA_API_KEY introuvable dans le .env")
  process.exit(1)
}

const FILE_KEY = process.env.FIGMA_FILE_KEY || "du5IDsc76TxdC7vctI1h7I"
const PAGE_NODE_ID = (process.argv[2] || "35:117").replace("-", ":")

const root = path.resolve(import.meta.dirname, "../../..")
const stylesComponentsDir = path.resolve(
  import.meta.dirname,
  "../src/components"
)
const figmaVariablesDir = path.join(root, "packages/figma/src/variables")

// Construit un dictionnaire variableId -> syntaxe de code web var(--...) depuis les tokens locaux
async function loadTokensVariableMap() {
  const map = new Map()
  const files = [
    "Dark.tokens.json",
    "Light.tokens.json",
    "Dimensions.tokens.json",
    "Fonts.tokens.json",
  ]

  for (const file of files) {
    try {
      const filePath = path.join(figmaVariablesDir, file)
      const raw = await fs.readFile(filePath, "utf8")
      const data = JSON.parse(raw)

      function walk(o) {
        for (const k in o) {
          if (k.startsWith("$")) continue
          const v = o[k]
          if (v && v.$value !== undefined) {
            const varId = v.$extensions?.["com.figma.variableId"]
            const web = v.$extensions?.["com.figma.codeSyntax"]?.WEB
            if (varId && web) map.set(varId, web)
          } else {
            walk(v)
          }
        }
      }
      walk(data)
    } catch {
      // ignore si un fichier n'existe pas
    }
  }
  return map
}

function getComponentName(rawName) {
  const name = rawName.split("/").pop().trim()
  return name.charAt(0).toLowerCase() + name.slice(1)
}

function toCamelCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (m) => m.toLowerCase())
}

// Convertit les clés du variant (background, border, text, ...) en propriétés CSS valides
function propKeyToCss(key) {
  switch (key) {
    case "background":
      return "background-color"
    case "text":
    case "color":
      return "color"
    case "border":
      return "border-color"
    case "borderWidth":
      return "border-width"
    case "radius":
      return "border-radius"
    case "padding":
      return "padding"
    default:
      return key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  }
}

async function fetchPageData(fileKey, nodeId) {
  const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${nodeId}`
  const response = await fetch(url, {
    headers: { "X-Figma-Token": FIGMA_API_KEY },
  })

  if (!response.ok) {
    throw new Error(
      `Erreur API Figma (${response.status}) : ${response.statusText}`
    )
  }

  const data = await response.json()
  const pageData = data.nodes[nodeId]

  if (!pageData?.document) {
    throw new Error(`Page ou frame introuvable pour le node ID ${nodeId}`)
  }

  return pageData
}

function collectComponentSets(node) {
  const sets = []

  if (node.type === "COMPONENT_SET") {
    sets.push(node)
    return sets
  }

  if (node.children) {
    for (const child of node.children) {
      sets.push(...collectComponentSets(child))
    }
  }

  return sets
}

// Extrait la map de variantes { primary: { background: "var(--...)", ... }, ... }
function extractVariantsData(compSetNode, pageData, variableMap) {
  const compSetMeta = pageData.componentSets?.[compSetNode.id]
  let metadata = null

  if (compSetMeta?.description) {
    try {
      metadata = JSON.parse(compSetMeta.description)
    } catch {
      // pas de JSON dans la description
    }
  }

  // 1. Si les variantes avec leurs CSS sont déclarées dans la description JSON du componentSet
  if (metadata?.variants && typeof metadata.variants === "object") {
    const variants = {}
    for (const [variantName, tokens] of Object.entries(metadata.variants)) {
      variants[variantName] = {}
      for (const [tokenProp, tokenInfo] of Object.entries(tokens)) {
        const cssVal =
          tokenInfo.css || variableMap.get(tokenInfo.variableId) || null
        if (cssVal) {
          variants[variantName][tokenProp] = cssVal
        }
      }
    }
    return variants
  }

  // 2. Sinon, parcours des composants enfants (variants) et extraction de boundVariables
  const variants = {}
  if (compSetNode.children) {
    for (const child of compSetNode.children) {
      if (child.type !== "COMPONENT") continue

      // Ex: child.name = "variant=primary" ou "primary"
      const variantMatch = child.name.match(/(?:variant=)?([^,]+)/)
      const variantName = variantMatch ? variantMatch[1].trim() : child.name

      variants[variantName] = {}

      // Description spécifique au composant enfant si disponible
      const childMeta = pageData.components?.[child.id]
      if (childMeta?.description) {
        try {
          const childJson = JSON.parse(childMeta.description)
          if (childJson.tokens) {
            for (const [prop, info] of Object.entries(childJson.tokens)) {
              const cssVal = info.css || variableMap.get(info.variableId)
              if (cssVal) variants[variantName][prop] = cssVal
            }
          }
        } catch {
          // description texte
        }
      }

      // Complète avec boundVariables s'il reste des propriétés non trouvées
      const bv = child.boundVariables || {}
      if (!variants[variantName].background && bv.fills?.[0]?.id) {
        const css = variableMap.get(bv.fills[0].id)
        if (css) variants[variantName].background = css
      }
      if (!variants[variantName].border && bv.strokes?.[0]?.id) {
        const css = variableMap.get(bv.strokes[0].id)
        if (css) variants[variantName].border = css
      }
      if (
        !variants[variantName].radius &&
        bv.rectangleCornerRadii?.RECTANGLE_TOP_LEFT_CORNER_RADIUS?.id
      ) {
        const css = variableMap.get(
          bv.rectangleCornerRadii.RECTANGLE_TOP_LEFT_CORNER_RADIUS.id
        )
        if (css) variants[variantName].radius = css
      }
      if (!variants[variantName].padding && bv.paddingTop?.id) {
        const css = variableMap.get(bv.paddingTop.id)
        if (css) variants[variantName].padding = css
      }
      if (
        !variants[variantName].borderWidth &&
        bv.individualStrokeWeights?.BORDER_TOP_WEIGHT?.id
      ) {
        const css = variableMap.get(
          bv.individualStrokeWeights.BORDER_TOP_WEIGHT.id
        )
        if (css) variants[variantName].borderWidth = css
      }
    }
  }

  return Object.keys(variants).length ? variants : null
}

function generateComponentScss(componentName, variants) {
  const varMapName = `$${toCamelCase(componentName)}Variants`

  // Génération de la map SCSS
  const mapEntries = []
  for (const [variantName, props] of Object.entries(variants)) {
    const propLines = Object.entries(props)
      .map(([propKey, cssVal]) => `    ${propKey}: ${cssVal},`)
      .join("\n")
    mapEntries.push(`  ${variantName}: (\n${propLines}\n  ),`)
  }

  return `// Do not edit directly, this file was auto-generated.

${varMapName}: (
${mapEntries.join("\n")}
);

@each $variant, $props in ${varMapName} {
  .${componentName}.is-#{$variant} {
    @each $prop, $value in $props {
      @if $prop == "background" {
        background-color: $value;
      } @else if $prop == "text" or $prop == "color" {
        color: $value;
      } @else if $prop == "border" {
        border-color: $value;
      } @else if $prop == "borderWidth" {
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
}
`
}

async function main() {
  console.log(`📡 Chargement des correspondances de variables locales...`)
  const variableMap = await loadTokensVariableMap()
  console.log(
    `✔ ${variableMap.size} variables locales identifiées avec leur codeSyntax WEB`
  )

  console.log(`📡 Récupération de la page Figma (node-id: ${PAGE_NODE_ID})...`)
  const pageData = await fetchPageData(FILE_KEY, PAGE_NODE_ID)

  const componentSets = collectComponentSets(pageData.document)
  console.log(
    `🔍 ${componentSets.length} component set(s) détecté(s) dans "${pageData.document.name}"`
  )

  await fs.mkdir(stylesComponentsDir, { recursive: true })

  const generatedNames = []

  for (const compSet of componentSets) {
    const componentName = getComponentName(compSet.name)
    const variants = extractVariantsData(compSet, pageData, variableMap)

    if (!variants) {
      console.log(`⚠ [${compSet.name}] : Aucune variante détectée, ignoré.`)
      continue
    }

    const scssContent = generateComponentScss(componentName, variants)
    const outputFile = path.join(
      stylesComponentsDir,
      `_${componentName}-generated.scss`
    )

    await fs.writeFile(outputFile, scssContent, "utf8")
    const relPath = path.relative(root, outputFile)
    console.log(`✔ [${compSet.name}] -> ${relPath}`)
    generatedNames.push(componentName)
  }

  if (generatedNames.length) {
    const indexPath = path.join(stylesComponentsDir, "_index.scss")
    const indexContent =
      generatedNames.map((name) => `@import "${name}-generated";`).join("\n") +
      "\n"
    await fs.writeFile(indexPath, indexContent, "utf8")
    const relIndexPath = path.relative(root, indexPath)
    console.log(`✔ [index] -> ${relIndexPath}`)
  }
}

main().catch((err) => {
  console.error("❌", err.message)
  process.exit(1)
})
