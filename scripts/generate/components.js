import fs from "node:fs/promises"
import path from "node:path"

import { getComponentDirSegments, getComponentName } from "./lib/figma.js"
import {
  generateNativeStandaloneStyles,
  generateNativeStyles,
} from "./lib/native-styles.js"
import {
  FIGMA_SRC,
  FIGMA_VARIABLES,
  REACT_SRC,
  ROOT,
  STYLES_SRC,
} from "./lib/paths.js"
import { writeScssIndex } from "./lib/scss-index.js"
import {
  extractLayoutData,
  extractVariantsData,
  generateComponentScss,
  generateLayoutScss,
  generateStandaloneScss,
  isLayoutComponentSet,
  standaloneDeclarations,
} from "./lib/variants.js"

const stylesComponentsDir = path.join(STYLES_SRC, "components")
const reactComponentsDir = path.join(REACT_SRC, "components")

// Construit un dictionnaire variableId -> syntaxe de code web var(--...) depuis les tokens locaux
// Même règle que primitiveName() de build-tokens.js
const kebab = (str) =>
  String(str)
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()

const tokenName = (segments) => {
  const [first, ...rest] = segments.map(kebab)
  if (rest.length && rest[0].startsWith(`${first}-`)) return rest.join("-")
  return [first, ...rest].join("-")
}

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
      const filePath = path.join(FIGMA_VARIABLES, file)
      const raw = await fs.readFile(filePath, "utf8")
      const data = JSON.parse(raw)

      function walk(o, segments = []) {
        for (const k in o) {
          if (k.startsWith("$")) continue
          const v = o[k]
          if (v && v.$value !== undefined) {
            const varId = v.$extensions?.["com.figma.variableId"]
            // Sans code syntax web, build-tokens nomme la variable CSS d'après son chemin
            const web =
              v.$extensions?.["com.figma.codeSyntax"]?.WEB ??
              `var(--${tokenName([...segments, k])})`
            if (varId) map.set(varId, web)
          } else {
            walk(v, [...segments, k])
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
      await fs.readFile(path.join(FIGMA_VARIABLES, "Fonts.tokens.json"), "utf8")
    )
    const webByFamily = new Map()
    for (const token of Object.values(fonts.Family ?? {})) {
      const web = token.$extensions?.["com.figma.codeSyntax"]?.WEB
      if (web) webByFamily.set(token.$value, web)
    }

    const primitives = JSON.parse(
      await fs.readFile(path.join(FIGMA_SRC, "primitives.json"), "utf8")
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

export async function generateComponents(pageData) {
  console.log(`📡 Chargement des correspondances de variables locales...`)
  const variableMap = await loadTokensVariableMap()
  console.log(
    `✔ ${variableMap.size} variables locales identifiées avec leur codeSyntax WEB`
  )

  const componentSets = collectComponentSets(pageData.document)
  console.log(
    `🔍 ${componentSets.length} component set(s) détecté(s) dans "${pageData.document.name}"`
  )

  await fs.mkdir(stylesComponentsDir, { recursive: true })

  const generatedNames = []

  for (const compSet of componentSets) {
    const componentName = getComponentName(compSet.name)
    let scssContent
    let nativeContent
    if (compSet.type === "COMPONENT") {
      scssContent = generateStandaloneScss(componentName, compSet, variableMap)
      nativeContent = generateNativeStandaloneStyles(
        componentName,
        standaloneDeclarations(compSet, variableMap, { color: true })
      )
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

      nativeContent = generateNativeStyles(componentName, variants)
    }
    const outputFile = path.join(
      stylesComponentsDir,
      `_${componentName}-generated.scss`
    )

    await fs.writeFile(outputFile, scssContent, "utf8")
    const relPath = path.relative(ROOT, outputFile)
    console.log(`✔ [${compSet.name}] -> ${relPath}`)

    if (nativeContent) {
      const nativeFile = path.join(
        reactComponentsDir,
        ...getComponentDirSegments(compSet.name),
        `${componentName}.styles.native.ts`
      )
      await fs.mkdir(path.dirname(nativeFile), { recursive: true })
      await fs.writeFile(nativeFile, nativeContent, "utf8")
      console.log(`✔ [${compSet.name}] -> ${path.relative(ROOT, nativeFile)}`)
    }
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

    await writeScssIndex(
      stylesComponentsDir,
      generatedNames.map((name) => `${name}-generated`)
    )
    console.log(
      `✔ [index] -> ${path.relative(ROOT, path.join(stylesComponentsDir, "_index.scss"))}`
    )
  }
}
