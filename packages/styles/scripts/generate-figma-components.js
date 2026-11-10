#!/usr/bin/env node
import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

import {
  extractLayoutData,
  extractVariantsData,
  generateComponentScss,
  generateLayoutScss,
  generateStandaloneScss,
  isLayoutComponentSet,
} from "./component-variants.js"

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

  // Les polices sont liées aux primitives dans Figma : on les rattache au token sémantique de même valeur
  try {
    const fonts = JSON.parse(
      await fs.readFile(
        path.join(figmaVariablesDir, "Fonts.tokens.json"),
        "utf8"
      )
    )
    const webByFamily = new Map()
    for (const token of Object.values(fonts.Family ?? {})) {
      const web = token.$extensions?.["com.figma.codeSyntax"]?.WEB
      if (web) webByFamily.set(token.$value, web)
    }

    const primitives = JSON.parse(
      await fs.readFile(
        path.join(figmaVariablesDir, "../primitives.json"),
        "utf8"
      )
    )
    const walkPrimitives = (o) => {
      for (const k in o) {
        if (k.startsWith("$")) continue
        const v = o[k]
        if (v && v.$value !== undefined) {
          const varId = v.$extensions?.["com.figma.variableId"]
          if (varId && webByFamily.has(v.$value)) {
            map.set(varId, webByFamily.get(v.$value))
          }
        } else if (v && typeof v === "object") {
          walkPrimitives(v)
        }
      }
    }
    walkPrimitives(primitives)
  } catch {
    // ignore si un fichier n'existe pas
  }

  return map
}

function getComponentName(rawName) {
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

// Component sets et composants autonomes (sans variants)
function collectComponentSets(node) {
  const sets = []

  if (node.type === "COMPONENT_SET" || node.type === "COMPONENT") {
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
    let scssContent
    if (compSet.type === "COMPONENT") {
      scssContent = generateStandaloneScss(componentName, compSet, variableMap)
      if (!scssContent) {
        console.log(`⚠ [${compSet.name}] : Ni auto-layout ni texte, ignoré.`)
        continue
      }
    } else if (isLayoutComponentSet(compSet)) {
      scssContent = generateLayoutScss(
        componentName,
        extractLayoutData(compSet, variableMap)
      )
    } else {
      const variants = extractVariantsData(compSet, pageData, variableMap)
      if (!variants) {
        console.log(`⚠ [${compSet.name}] : Aucune variante détectée, ignoré.`)
        continue
      }
      scssContent = generateComponentScss(componentName, variants)
    }
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
    // Supprime les fichiers générés d'un composant qui n'existe plus ou n'a plus de styles
    for (const file of await fs.readdir(stylesComponentsDir)) {
      const match = file.match(/^_(.+)-generated\.scss$/)
      if (match && !generatedNames.includes(match[1])) {
        await fs.rm(path.join(stylesComponentsDir, file))
        console.log(`🗑 [${match[1]}] : fichier obsolète supprimé`)
      }
    }

    const indexPath = path.join(stylesComponentsDir, "_index.scss")
    const indexContent =
      generatedNames.map((name) => `@forward "${name}-generated";`).join("\n") +
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
