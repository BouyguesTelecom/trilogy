#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) {
    return
  }

  const raw = fs.readFileSync(envPath, 'utf8')
  const lines = raw.split(/\r?\n/)

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const equalIndex = trimmed.indexOf('=')
    if (equalIndex <= 0) {
      continue
    }

    const key = trimmed.slice(0, equalIndex).trim()
    let value = trimmed.slice(equalIndex + 1).trim()

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }

    if (process.env[key] === undefined) {
      process.env[key] = value
    }
  }
}

function parseArgs(argv) {
  const args = {}

  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index]

    if (current === '--env' && argv[index + 1]) {
      args.envPath = argv[index + 1]
      index += 1
      continue
    }

    if (current === '--output' && argv[index + 1]) {
      args.outputPath = argv[index + 1]
      index += 1
      continue
    }
  }

  return args
}

function assertEnv(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

function clampColor(value) {
  return Math.max(0, Math.min(255, Math.round(value * 255)))
}

function rgbaToHex(color) {
  const r = clampColor(color.r || 0)
    .toString(16)
    .padStart(2, '0')
  const g = clampColor(color.g || 0)
    .toString(16)
    .padStart(2, '0')
  const b = clampColor(color.b || 0)
    .toString(16)
    .padStart(2, '0')

  if (typeof color.a === 'number' && color.a < 1) {
    const a = clampColor(color.a).toString(16).padStart(2, '0')
    return `#${r}${g}${b}${a}`
  }

  return `#${r}${g}${b}`
}

function normalizeValue(value) {
  if (value === null || value === undefined) {
    return value
  }

  if (Array.isArray(value)) {
    return value.map(normalizeValue)
  }

  if (typeof value === 'object') {
    if (value.type === 'VARIABLE_ALIAS' && value.id) {
      return {
        type: 'alias',
        id: value.id,
      }
    }

    if (typeof value.r === 'number' && typeof value.g === 'number' && typeof value.b === 'number') {
      return {
        type: 'color',
        rgba: {
          r: value.r,
          g: value.g,
          b: value.b,
          a: typeof value.a === 'number' ? value.a : 1,
        },
        hex: rgbaToHex(value),
      }
    }

    const out = {}
    for (const [key, nested] of Object.entries(value)) {
      out[key] = normalizeValue(nested)
    }
    return out
  }

  return value
}

async function fetchJson(url, token) {
  const response = await fetch(url, {
    headers: {
      'X-Figma-Token': token,
    },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Figma API error (${response.status}): ${body}`)
  }

  return response.json()
}

function arrayFromUnknown(input) {
  if (Array.isArray(input)) {
    return input
  }

  if (input && typeof input === 'object') {
    return Object.values(input)
  }

  return []
}

async function main() {
  const root = process.cwd()
  const args = parseArgs(process.argv.slice(2))

  loadEnvFile(path.join(root, '.env'))
  if (args.envPath) {
    loadEnvFile(path.resolve(root, args.envPath))
  }

  const figmaToken = assertEnv('FIGMA_TOKEN')
  const figmaFileKey = assertEnv('FIGMA_FILE_KEY')

  const outputPath = path.resolve(
    root,
    args.outputPath || process.env.FIGMA_OUTPUT || 'packages/styles/framework/src/tokens/output/figma-tokens.json',
  )

  const baseUrl = 'https://api.figma.com/v1/files'

  const variablesRequest = fetchJson(`${baseUrl}/${figmaFileKey}/variables/local`, figmaToken)
  const stylesRequest = fetchJson(`${baseUrl}/${figmaFileKey}/styles`, figmaToken)

  const [variablesResult, stylesResult] = await Promise.allSettled([variablesRequest, stylesRequest])

  if (variablesResult.status === 'rejected' && stylesResult.status === 'rejected') {
    throw new Error(
      `Unable to fetch variables and styles. Variables: ${variablesResult.reason.message}. Styles: ${stylesResult.reason.message}`,
    )
  }

  const output = {
    exportedAt: new Date().toISOString(),
    source: {
      fileKey: figmaFileKey,
    },
    collections: [],
    variables: {},
    styles: [],
  }

  if (variablesResult.status === 'fulfilled') {
    const variablesPayload = variablesResult.value
    const meta = variablesPayload.meta || {}

    const collections = arrayFromUnknown(meta.variableCollections)
    const variables = arrayFromUnknown(meta.variables)

    const collectionsById = new Map(collections.map((collection) => [collection.id, collection]))

    output.collections = collections.map((collection) => ({
      id: collection.id,
      name: collection.name,
      defaultModeId: collection.defaultModeId,
      modes: arrayFromUnknown(collection.modes).map((mode) => ({
        id: mode.modeId,
        name: mode.name,
      })),
    }))

    for (const variable of variables) {
      const collection = collectionsById.get(variable.variableCollectionId)
      const collectionName = collection?.name || 'unscoped'
      const variableKey = `${collectionName}/${variable.name}`

      const modeNameById = new Map(arrayFromUnknown(collection?.modes).map((mode) => [mode.modeId, mode.name]))

      const normalizedValuesByMode = {}
      for (const [modeId, value] of Object.entries(variable.valuesByMode || {})) {
        const modeName = modeNameById.get(modeId) || modeId
        normalizedValuesByMode[modeName] = normalizeValue(value)
      }

      output.variables[variableKey] = {
        id: variable.id,
        name: variable.name,
        collectionId: variable.variableCollectionId,
        collectionName,
        resolvedType: variable.resolvedType,
        hiddenFromPublishing: Boolean(variable.hiddenFromPublishing),
        scopes: arrayFromUnknown(variable.scopes),
        valuesByMode: normalizedValuesByMode,
      }
    }
  }

  if (stylesResult.status === 'fulfilled') {
    const stylesPayload = stylesResult.value
    const styles = arrayFromUnknown(stylesPayload?.meta?.styles)

    output.styles = styles.map((style) => ({
      key: style.key,
      name: style.name,
      styleType: style.style_type,
      nodeId: style.node_id,
      description: style.description || '',
    }))
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8')

  console.log(`Figma export written to: ${outputPath}`)
  console.log(`Collections: ${output.collections.length}`)
  console.log(`Variables: ${Object.keys(output.variables).length}`)
  console.log(`Styles: ${output.styles.length}`)

  if (variablesResult.status === 'rejected') {
    console.warn(`Variables fetch warning: ${variablesResult.reason.message}`)
  }

  if (stylesResult.status === 'rejected') {
    console.warn(`Styles fetch warning: ${stylesResult.reason.message}`)
  }
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
