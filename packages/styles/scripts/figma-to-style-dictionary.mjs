#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function parseArgs(argv) {
  const args = {}

  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index]

    if (current === '--input' && argv[index + 1]) {
      args.inputPath = argv[index + 1]
      index += 1
      continue
    }

    if (current === '--output' && argv[index + 1]) {
      args.outputPath = argv[index + 1]
      index += 1
      continue
    }

    if (current === '--mode' && argv[index + 1]) {
      args.modeName = argv[index + 1]
      index += 1
      continue
    }
  }

  return args
}

function sanitizeSegment(segment) {
  return segment
    .trim()
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function splitNameToPath(name) {
  return name
    .split(/[/.]/g)
    .map((part) => sanitizeSegment(part))
    .filter(Boolean)
}

function setDeep(target, keys, value) {
  let cursor = target

  for (let index = 0; index < keys.length - 1; index += 1) {
    const key = keys[index]
    if (!cursor[key] || typeof cursor[key] !== 'object' || Array.isArray(cursor[key])) {
      cursor[key] = {}
    }
    cursor = cursor[key]
  }

  cursor[keys[keys.length - 1]] = value
}

function getPreferredModeValue(valuesByMode, requestedMode) {
  const entries = Object.entries(valuesByMode || {})
  if (entries.length === 0) {
    return undefined
  }

  if (requestedMode) {
    const exact = entries.find(([mode]) => mode === requestedMode)
    if (exact) {
      return exact[1]
    }
  }

  const first = entries[0]
  return first[1]
}

function toTokenValue(rawValue, idToTokenPath) {
  if (rawValue && typeof rawValue === 'object') {
    if (rawValue.type === 'alias' && rawValue.id) {
      const aliasPath = idToTokenPath.get(rawValue.id)
      if (aliasPath) {
        return `{${aliasPath.join('.')}}`
      }
      return undefined
    }

    if (rawValue.type === 'color' && rawValue.hex) {
      return rawValue.hex
    }
  }

  if (typeof rawValue === 'string' || typeof rawValue === 'number' || typeof rawValue === 'boolean') {
    return rawValue
  }

  return undefined
}

function main() {
  const root = process.cwd()
  const args = parseArgs(process.argv.slice(2))

  const inputPath = path.resolve(root, args.inputPath || './framework/src/tokens/output/figma-tokens.json')
  const outputPath = path.resolve(root, args.outputPath || './framework/src/tokens/output/figma.tokens.json')

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Figma export not found: ${inputPath}`)
  }

  const payload = JSON.parse(fs.readFileSync(inputPath, 'utf8'))
  const variables = payload.variables || {}

  const idToTokenPath = new Map()
  for (const variable of Object.values(variables)) {
    const tokenPath = splitNameToPath(variable.name || '')
    if (tokenPath.length > 0) {
      idToTokenPath.set(variable.id, tokenPath)
    }
  }

  const outTokens = {}
  const mode = args.modeName || process.env.FIGMA_MODE || ''

  for (const variable of Object.values(variables)) {
    const tokenPath = splitNameToPath(variable.name || '')
    if (tokenPath.length === 0) {
      continue
    }

    const preferredModeValue = getPreferredModeValue(variable.valuesByMode, mode)
    const tokenValue = toTokenValue(preferredModeValue, idToTokenPath)

    if (tokenValue === undefined) {
      continue
    }

    setDeep(outTokens, tokenPath, { value: tokenValue })
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, JSON.stringify(outTokens, null, 2), 'utf8')

  console.log(`Style Dictionary token source written to: ${outputPath}`)
  console.log(`Token count: ${Object.keys(variables).length}`)
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
