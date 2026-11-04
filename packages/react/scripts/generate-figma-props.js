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

// Propriétés Figma qui décrivent un état d'interaction (gérées côté CSS)
const INTERACTION_PROPS = new Set(["state"])

function cleanPropName(raw) {
  // Figma ajoute parfois un hash : "Label#35:0" -> "label"
  const name = raw.split("#")[0].trim()
  return name.charAt(0).toLowerCase() + name.slice(1)
}

function toPascalCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match) => match.toUpperCase())
    .replace(/[\s-_]+/g, "")
}

function getComponentName(rawName) {
  // Ex: "components/button" -> "button", "Button" -> "button"
  const name = rawName.split("/").pop().trim()
  return name.charAt(0).toLowerCase() + name.slice(1)
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

// Recherche récursivement tous les composants (COMPONENT_SET ou COMPONENT autonome)
function collectComponents(node, parentIsComponentSet = false) {
  const components = []

  if (node.type === "COMPONENT_SET") {
    components.push(node)
    // On ne descend pas dans les variants individuels
    return components
  }

  if (node.type === "COMPONENT" && !parentIsComponentSet) {
    components.push(node)
    return components
  }

  if (node.children) {
    for (const child of node.children) {
      components.push(
        ...collectComponents(child, node.type === "COMPONENT_SET")
      )
    }
  }

  return components
}

function generateComponentTypes(node, metadata) {
  const componentName = getComponentName(node.name)
  const pascalComponentName = toPascalCase(componentName)
  const propDefs = node.componentPropertyDefinitions || {}
  const enums = []
  const interfaceProps = []

  const hasInstanceSwap = Object.values(propDefs).some(
    (d) => d.type === "INSTANCE_SWAP"
  )
  const headerImport = hasInstanceSwap
    ? `import type React from "react"\n\n`
    : ""

  for (const [rawName, def] of Object.entries(propDefs)) {
    const propName = cleanPropName(rawName)

    // hover / pressed / focus / disabled sont gérés en CSS, pas par une prop
    if (INTERACTION_PROPS.has(propName)) continue

    if (def.type === "VARIANT") {
      // enumName / variantValues décrivent uniquement la propriété principale
      const isMain =
        !metadata?.variantProperty || metadata.variantProperty === propName
      const enumName =
        isMain && metadata?.enumName
          ? toPascalCase(metadata.enumName)
          : `${pascalComponentName}${toPascalCase(propName)}`

      const options =
        (isMain && metadata?.variantValues) || def.variantOptions || []
      const enumMembers = options
        .map((opt) => `  ${opt} = "${opt}",`)
        .join("\n")

      enums.push(`export enum ${enumName} {\n${enumMembers}\n}`)
      interfaceProps.push(`  ${propName}?: ${enumName}`)
    } else if (def.type === "TEXT") {
      interfaceProps.push(`  ${propName}?: string`)
    } else if (def.type === "BOOLEAN") {
      interfaceProps.push(`  ${propName}?: boolean`)
    } else if (def.type === "INSTANCE_SWAP") {
      interfaceProps.push(`  ${propName}?: React.ReactNode`)
    }
  }

  const enumsBlock = enums.length ? `${enums.join("\n\n")}\n\n` : ""
  const propsBody = interfaceProps.length
    ? `\n${interfaceProps.join("\n")}\n`
    : ""

  return `${headerImport}${enumsBlock}export interface ${pascalComponentName}GeneratedProps {${propsBody}}
`
}

async function main() {
  const root = path.resolve(import.meta.dirname, "../../..")
  const componentsDir = path.resolve(import.meta.dirname, "../src/components")

  console.log(`📡 Récupération de la page Figma (node-id: ${PAGE_NODE_ID})...`)
  const pageData = await fetchPageData(FILE_KEY, PAGE_NODE_ID)

  const components = collectComponents(pageData.document)
  console.log(
    `🔍 ${components.length} composant(s) détecté(s) dans "${pageData.document.name}"`
  )

  for (const compNode of components) {
    const componentName = getComponentName(compNode.name)
    const targetDir = path.join(componentsDir, componentName)
    const targetFile = path.join(targetDir, `${componentName}.generated.ts`)

    let metadata = null
    const setDesc =
      pageData.componentSets?.[compNode.id]?.description ||
      pageData.components?.[compNode.id]?.description
    if (setDesc) {
      try {
        metadata = JSON.parse(setDesc)
      } catch {
        // description texte simple
      }
    }

    const content = generateComponentTypes(compNode, metadata)
    await fs.mkdir(targetDir, { recursive: true })
    await fs.writeFile(targetFile, content, "utf8")

    const relPath = path.relative(root, targetFile)
    console.log(`✔ [${compNode.name}] -> ${relPath}`)
  }
}

main().catch((err) => {
  console.error("❌", err.message)
  process.exit(1)
})
