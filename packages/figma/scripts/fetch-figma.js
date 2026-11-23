import { existsSync } from "node:fs"
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, "../../..")
const envFile = path.join(repoRoot, ".env")

if (existsSync(envFile)) {
  process.loadEnvFile(envFile)
}

function parseArgs(args) {
  const options = {
    fileKey: process.env.FIGMA_FILE_KEY,
    outputDir: path.join(repoRoot, "packages/figma/.cache"),
    includeVariables: true,
    help: false,
  }

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]
    if (argument === "--file-key") options.fileKey = args[++index]
    else if (argument === "--output-dir") options.outputDir = args[++index]
    else if (argument === "--variables") options.includeVariables = true
    else if (argument === "--no-variables") options.includeVariables = false
    else if (argument === "--help" || argument === "-h") options.help = true
    else throw new Error(`Unknown argument: ${argument}`)
  }

  return options
}

function printHelp() {
  console.log(`Fetch a Figma document as JSON.

Usage:
  npm run figma:fetch [-- --file-key <key>] [--no-variables] [--output-dir <path>]

Environment:
  FIGMA_ACCESS_TOKEN  Preferred Figma personal access token variable.
  FIGMA_API_KEY       Also accepted for existing .env files.
  FIGMA_FILE_KEY      Optional default file key.

Options:
  --variables         Fetch local variables (default; requires Figma API permission).
  --no-variables      Fetch only the Figma document JSON.
  --output-dir <path> Directory for the downloaded document JSON.
  --help              Show this help.

The full document and local variables are saved under <output-dir>. The
variables are also converted into token JSON files under packages/figma/src/.`)
}

async function fetchJson(url, accessToken) {
  const response = await fetch(url, {
    headers: {
      "X-Figma-Token": accessToken,
      Accept: "application/json",
    },
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(
      `Figma API returned ${response.status} ${response.statusText}: ${details.slice(0, 500)}`
    )
  }

  return response.json()
}

const getCollection = (collections, name) => {
  const found = Object.entries(collections).find(
    ([, collection]) => collection.name === name
  )
  if (!found) throw new Error(`Figma variables response is missing "${name}".`)
  return found
}

function colorAsDtcgValue(value) {
  const { r, g, b, a = 1 } = value
  const toHex = (channel) =>
    Math.round(channel * 255)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase()
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`

  return {
    colorSpace: "srgb",
    components: [r, g, b],
    alpha: a,
    hex,
  }
}

function createVariableConverter(collections, variables) {
  function resolveValue(variable, modeId, seen = new Set()) {
    if (seen.has(variable.id)) {
      throw new Error(`Circular Figma variable alias at "${variable.name}".`)
    }

    const rawValue =
      variable.valuesByMode[modeId] ?? Object.values(variable.valuesByMode)[0]
    if (rawValue === undefined) {
      throw new Error(`No value found for Figma variable "${variable.name}".`)
    }

    if (rawValue.type !== "VARIABLE_ALIAS") return rawValue

    const target = variables[rawValue.id]
    if (!target) {
      throw new Error(
        `Alias target "${rawValue.id}" was not returned by Figma.`
      )
    }

    const targetCollection = collections[target.variableCollectionId]
    const sourceModeName = collections[
      variable.variableCollectionId
    ].modes.find((item) => item.modeId === modeId)?.name
    const targetMode =
      targetCollection.modes.find((mode) => mode.name === sourceModeName) ??
      targetCollection.modes[0]

    return resolveValue(
      target,
      targetMode.modeId,
      new Set([...seen, variable.id])
    )
  }

  return function convertVariable(variable, modeId) {
    const resolved = resolveValue(variable, modeId)
    const type = {
      COLOR: "color",
      FLOAT: "number",
      STRING: "string",
      BOOLEAN: "boolean",
    }[variable.resolvedType]

    if (!type) {
      throw new Error(
        `Unsupported Figma variable type "${variable.resolvedType}" for "${variable.name}".`
      )
    }

    const value =
      variable.resolvedType === "COLOR"
        ? colorAsDtcgValue(resolved)
        : resolved
    const modeValue = variable.valuesByMode[modeId]
    const targetAlias =
      modeValue?.type === "VARIABLE_ALIAS"
        ? modeValue
        : Object.values(variable.valuesByMode).find(
            (item) => item.type === "VARIABLE_ALIAS"
          )
    const extensions = {
      "com.figma.variableId": variable.id,
      "com.figma.scopes": variable.scopes,
    }

    if (Object.keys(variable.codeSyntax ?? {}).length > 0) {
      extensions["com.figma.codeSyntax"] = variable.codeSyntax
    }

    if (targetAlias) {
      const target = variables[targetAlias.id]
      const targetCollection = collections[target.variableCollectionId]
      extensions["com.figma.aliasData"] = {
        targetVariableId: target.id,
        targetVariableName: target.name,
        targetVariableSetId: target.variableCollectionId,
        targetVariableSetName: targetCollection.name,
      }
    }

    return {
      $type: type,
      $value: value,
      ...(variable.description ? { $description: variable.description } : {}),
      $extensions: extensions,
    }
  }
}

function setNestedToken(root, variableName, token) {
  const parts = variableName.split("/").filter(Boolean)
  if (parts.length === 0) {
    throw new Error("Figma returned a variable with no name.")
  }

  let current = root
  for (const part of parts.slice(0, -1)) {
    current[part] ??= {}
    if (current[part].$type) {
      throw new Error(`Figma token path conflicts at "${variableName}".`)
    }
    current = current[part]
  }

  const leaf = parts.at(-1)
  if (current[leaf]) throw new Error(`Duplicate Figma token "${variableName}".`)
  current[leaf] = token
}

function tokensForCollection(collectionId, modeId, variables, convertVariable) {
  const tokens = {}
  for (const variable of Object.values(variables)) {
    if (variable.variableCollectionId !== collectionId) continue
    setNestedToken(tokens, variable.name, convertVariable(variable, modeId))
  }
  return tokens
}

async function writeTokenJson(filePath, tokens, modeName) {
  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(
    filePath,
    `${JSON.stringify(
      { ...tokens, $extensions: { "com.figma.modeName": modeName } },
      null,
      2
    )}\n`
  )
  console.log(`Figma token JSON saved: ${filePath}`)
}

async function writeTokenFiles(response) {
  if (response.status !== 200 || !response.meta) {
    throw new Error(
      response.err ?? "Figma returned an invalid variables response."
    )
  }

  const collections = response.meta.variableCollections
  const variables = response.meta.variables
  const convertVariable = createVariableConverter(collections, variables)
  const variablesDir = path.join(repoRoot, "packages/figma/src/variables")

  const [primitivesId, primitives] = getCollection(
    collections,
    "Primitive_BouyguesTelecom"
  )
  const primitivesMode =
    primitives.modes.find((mode) => mode.name === "Default") ??
    primitives.modes[0]
  await writeTokenJson(
    path.join(repoRoot, "packages/figma/src/primitives.json"),
    tokensForCollection(
      primitivesId,
      primitivesMode.modeId,
      variables,
      convertVariable
    ),
    primitivesMode.name
  )

  const [colorsId, colors] = getCollection(collections, "Colors")
  for (const modeName of ["Light", "Dark"]) {
    const mode = colors.modes.find((item) => item.name === modeName)
    if (!mode) {
      throw new Error(
        `Figma Colors collection is missing "${modeName}" mode.`
      )
    }
    await writeTokenJson(
      path.join(variablesDir, `${modeName}.tokens.json`),
      tokensForCollection(colorsId, mode.modeId, variables, convertVariable),
      mode.name
    )
  }

  for (const collectionName of ["Dimensions", "Fonts"]) {
    const [collectionId, collection] = getCollection(
      collections,
      collectionName
    )
    const mode = collection.modes[0]
    await writeTokenJson(
      path.join(variablesDir, `${collectionName}.tokens.json`),
      tokensForCollection(
        collectionId,
        mode.modeId,
        variables,
        convertVariable
      ),
      mode.name
    )
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) return printHelp()

  const accessToken =
    process.env.FIGMA_ACCESS_TOKEN ?? process.env.FIGMA_API_KEY
  if (!accessToken) {
    throw new Error(
      "Set FIGMA_ACCESS_TOKEN or FIGMA_API_KEY in your environment before fetching."
    )
  }
  if (!options.fileKey || !/^[a-zA-Z0-9]{22,128}$/.test(options.fileKey)) {
    throw new Error(
      "Provide a valid Figma file key with --file-key or FIGMA_FILE_KEY."
    )
  }

  const outputDir = path.resolve(repoRoot, options.outputDir)
  await mkdir(outputDir, { recursive: true })

  const file = await fetchJson(
    `https://api.figma.com/v1/files/${encodeURIComponent(options.fileKey)}`,
    accessToken
  )
  const documentPath = path.join(outputDir, `${options.fileKey}.json`)
  await writeFile(documentPath, `${JSON.stringify(file, null, 2)}\n`)
  console.log(`Figma document saved: ${documentPath}`)

  if (options.includeVariables) {
    const variables = await fetchJson(
      `https://api.figma.com/v1/files/${encodeURIComponent(options.fileKey)}/variables/local`,
      accessToken
    )
    const variablesDir = path.join(outputDir, "variables")
    await mkdir(variablesDir, { recursive: true })
    const variablesPath = path.join(variablesDir, `${options.fileKey}.json`)
    await writeFile(variablesPath, `${JSON.stringify(variables, null, 2)}\n`)
    console.log(`Figma local variables saved: ${variablesPath}`)
    await writeTokenFiles(variables)
  }
}

main().catch((error) => {
  console.error(`Figma download failed: ${error.message}`)
  process.exitCode = 1
})
