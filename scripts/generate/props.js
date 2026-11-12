import fs from "node:fs/promises"
import path from "node:path"

import { getComponentDirSegments, getComponentName } from "./lib/figma.js"
import { REACT_SRC, ROOT } from "./lib/paths.js"

// Propriétés Figma qui décrivent un état d'interaction (gérées côté CSS)
const INTERACTION_PROPS = new Set(["state"])

function cleanPropName(raw) {
  // Figma ajoute parfois un hash : "Label#35:0" -> "label"
  const name = raw.split("#")[0].trim()
  return name.charAt(0).toLowerCase() + name.slice(1)
}

// "flex-start" -> "flexStart" (clé d'enum valide, la valeur reste "flex-start")
function toEnumKey(str) {
  return str.replace(/[\s_-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
}

function toPascalCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match) => match.toUpperCase())
    .replace(/[\s-_]+/g, "")
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

  const hasReactNode = Object.values(propDefs).some(
    (d) => d.type === "INSTANCE_SWAP" || d.type === "SLOT"
  )
  const headerImport = hasReactNode ? `import type React from "react"\n\n` : ""

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
        .map((opt) => `  ${toEnumKey(opt)} = "${opt}",`)
        .join("\n")

      enums.push(`export enum ${enumName} {\n${enumMembers}\n}`)
      interfaceProps.push(`  ${propName}?: ${enumName}`)
    } else if (def.type === "TEXT") {
      interfaceProps.push(`  ${propName}?: string`)
    } else if (def.type === "BOOLEAN") {
      interfaceProps.push(`  ${propName}?: boolean`)
    } else if (def.type === "INSTANCE_SWAP" || def.type === "SLOT") {
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

export async function generateProps(pageData) {
  const componentsDir = path.join(REACT_SRC, "components")

  const components = collectComponents(pageData.document)
  console.log(
    `🔍 ${components.length} composant(s) détecté(s) dans "${pageData.document.name}"`
  )

  for (const compNode of components) {
    const componentName = getComponentName(compNode.name)
    const targetDir = path.join(
      componentsDir,
      ...getComponentDirSegments(compNode.name)
    )
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

    const relPath = path.relative(ROOT, targetFile)
    console.log(`✔ [${compNode.name}] -> ${relPath}`)
  }
}
