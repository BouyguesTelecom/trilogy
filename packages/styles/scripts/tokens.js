import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import StyleDictionary from "style-dictionary"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, "../../..")
const figmaDir = path.join(repoRoot, "packages/figma/src")
const outputDir = path.join(repoRoot, "packages/styles/src/variables")
const interfacesDir = path.join(repoRoot, "packages/react/src/interfaces")

const tokenSources = {
  primitives: {
    source: path.join(figmaDir, "primitives.json"),
    selector: ":root",
    unitStrategy: "primitives",
  },
  light: {
    source: path.join(figmaDir, "variables/Light.tokens.json"),
    selector: ':root, [data-theme="light"]',
    unitStrategy: "none",
  },
  dark: {
    source: path.join(figmaDir, "variables/Dark.tokens.json"),
    selector: '[data-theme="dark"]',
    unitStrategy: "none",
  },
  dimensions: {
    source: path.join(figmaDir, "variables/Dimensions.tokens.json"),
    selector: ":root",
    unitStrategy: "dimensions",
  },
  fonts: {
    source: path.join(figmaDir, "variables/Fonts.tokens.json"),
    selector: ":root",
    unitStrategy: "fonts",
  },
}

const kebabCase = (part) =>
  part
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()

const camelCase = (value) =>
  value.replace(/-([a-z0-9])/g, (_, character) => character.toUpperCase())

function colorTokenEntries(tokens, groupName) {
  const group = tokens[groupName]
  if (!group || typeof group !== "object") {
    throw new Error(`Missing "${groupName}" token group in Figma JSON.`)
  }

  return Object.entries(group)
    .filter(([, token]) => token?.$type === "color")
    .filter(([name]) => !/(^|[-/])(hover|pressed)([-/]|$)/i.test(name))
    .map(([name]) => {
      const kebabName = kebabCase(name)
      return { memberName: camelCase(kebabName), value: kebabName }
    })
}

function renderColorEnum(enumName, entries, sourceGroup) {
  const members = new Set()
  for (const { memberName } of entries) {
    if (members.has(memberName)) {
      throw new Error(`Duplicate ${enumName} enum member "${memberName}".`)
    }
    members.add(memberName)
  }

  return [
    `// Generated from the Figma ${sourceGroup} token group. Do not edit directly.`,
    "// Enum values match the semantic token names from Figma.",
    `export enum ${enumName} {`,
    ...entries.map(({ memberName, value }) => `  ${memberName} = "${value}",`),
    "}",
    "",
  ].join("\n")
}

async function generateColorEnums() {
  const lightTokens = JSON.parse(
    await readFile(tokenSources.light.source, "utf8")
  )
  const enumFiles = [
    {
      fileName: "backgroundColors.ts",
      enumName: "BackgroundColors",
      groupName: "Background",
    },
    {
      fileName: "borderColors.ts",
      enumName: "BorderColors",
      groupName: "Border",
    },
    {
      fileName: "textColors.ts",
      enumName: "TextColors",
      groupName: "Color",
    },
  ]

  await mkdir(interfacesDir, { recursive: true })
  await Promise.all(
    enumFiles.map(({ fileName, enumName, groupName }) =>
      writeFile(
        path.join(interfacesDir, fileName),
        renderColorEnum(
          enumName,
          colorTokenEntries(lightTokens, groupName),
          groupName
        )
      )
    )
  )

  console.log(`Color enums generated from Figma tokens in ${interfacesDir}`)
}

function tokenNameFromPath(parts) {
  const [category, ...rest] = parts
  const normalizedCategory = kebabCase(String(category))
  const normalizedRest = rest.map(kebabCase).filter(Boolean)
  const prefixByCategory = {
    border: "border",
    color: "color",
    font: "",
    icon: "icon",
    radius: "radius",
    size: "size",
    spacing: "spacing",
  }
  const prefix = prefixByCategory[normalizedCategory] ?? normalizedCategory
  const tokenPath = normalizedRest
  if (prefix && tokenPath[0]?.startsWith(`${prefix}-`)) {
    tokenPath[0] = tokenPath[0].slice(prefix.length + 1)
  }
  return [prefix, ...tokenPath].filter(Boolean).join("-")
}

function cssVariableName(token) {
  const codeSyntax = token.original?.$extensions?.["com.figma.codeSyntax"]?.WEB
  const explicitName = codeSyntax?.match(/^var\(--([\w-]+)\)$/)?.[1]
  if (explicitName) return explicitName

  return tokenNameFromPath(token.path)
}

function cssValue(token, unitStrategy) {
  const aliasName =
    token.original?.$extensions?.["com.figma.aliasData"]?.targetVariableName
  if (aliasName) {
    const alias = tokenNameFromPath(aliasName.split("/"))
    return `#{\$${alias}}`
  }

  const value = token.original?.$value ?? token.value
  const type = token.original?.$type ?? token.type

  if (type === "color" && value && typeof value === "object") {
    if (value.alpha === 0) return "transparent"
    if (typeof value.hex === "string") return value.hex.toLowerCase()
  }

  if (typeof value === "number") {
    const path = token.path.map((part) => String(part).toLowerCase())
    const isPixelValue =
      unitStrategy === "dimensions" ||
      (unitStrategy === "fonts" && path[0] === "size") ||
      (unitStrategy === "primitives" &&
        (path[0] !== "font" || path[1]?.startsWith("font-size-")))

    return isPixelValue && value !== 0 ? `${value}px` : String(value)
  }

  return String(value)
}

function createCssVariablesFormat() {
  return ({ dictionary, options }) => {
    const declarations = dictionary.allTokens
      .map((token) => {
        const name = cssVariableName(token)
        const value = cssValue(token, options.unitStrategy)
        return options.sassVariables
          ? `$${name}: ${value};`
          : `  --${name}: ${value};`
      })
      .join("\n")

    return options.sassVariables
      ? `${declarations}\n`
      : `${options.selector} {\n${declarations}\n}\n`
  }
}

const styleDictionaryHooks = {
  transforms: {
    "figma/css-name": {
      type: "name",
      transform: (token) => cssVariableName(token),
    },
  },
  formats: {
    "figma/css-variables": createCssVariablesFormat(),
  },
}

async function buildSource(source, selector, unitStrategy) {
  const tempDir = await mkdtemp(path.join(tmpdir(), "trilogy-tokens-"))
  try {
    const dictionary = new StyleDictionary({
      source: [source],
      hooks: styleDictionaryHooks,
      platforms: {
        css: {
          transforms: ["figma/css-name"],
          buildPath: `${tempDir}${path.sep}`,
          files: [
            {
              destination: "tokens.scss",
              format: "figma/css-variables",
              options: {
                selector,
                unitStrategy,
                sassVariables: source === tokenSources.primitives.source,
              },
            },
          ],
        },
      },
      log: { warnings: "error" },
    })

    await dictionary.buildAllPlatforms()
    return await readFile(path.join(tempDir, "tokens.scss"), "utf8")
  } finally {
    await rm(tempDir, { recursive: true, force: true })
  }
}

async function main() {
  const task = process.argv[2] ?? "all"
  if (task === "interfaces") {
    await generateColorEnums()
    return
  }
  if (task !== "all" && task !== "scss") {
    throw new Error(`Unsupported generation task "${task}".`)
  }

  if (task === "all") await generateColorEnums()

  await mkdir(outputDir, { recursive: true })

  const primitives = await buildSource(
    tokenSources.primitives.source,
    tokenSources.primitives.selector,
    tokenSources.primitives.unitStrategy
  )
  const light = await buildSource(
    tokenSources.light.source,
    tokenSources.light.selector,
    tokenSources.light.unitStrategy
  )
  const dark = await buildSource(
    tokenSources.dark.source,
    tokenSources.dark.selector,
    tokenSources.dark.unitStrategy
  )
  const dimensions = await buildSource(
    tokenSources.dimensions.source,
    tokenSources.dimensions.selector,
    tokenSources.dimensions.unitStrategy
  )
  const fonts = await buildSource(
    tokenSources.fonts.source,
    tokenSources.fonts.selector,
    tokenSources.fonts.unitStrategy
  )

  await Promise.all([
    writeFile(path.join(outputDir, "_primitives.scss"), primitives),
    writeFile(
      path.join(outputDir, "_colors.scss"),
      `@use "primitives" as *;\n\n${light}\n${dark}`
    ),
    writeFile(
      path.join(outputDir, "_dimensions.scss"),
      `@use "primitives" as *;\n\n${dimensions}`
    ),
    writeFile(
      path.join(outputDir, "_fonts.scss"),
      `@use "primitives" as *;\n\n${fonts}`
    ),
  ])

  console.log(
    `Sass primitives and CSS custom properties written to ${outputDir}`
  )
}

main().catch((error) => {
  console.error("Token generation failed:", error.message)
  process.exitCode = 1
})
