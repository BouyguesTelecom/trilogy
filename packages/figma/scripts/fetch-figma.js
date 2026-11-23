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
    includeVariables: false,
    help: false,
  }

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]
    if (argument === "--file-key") options.fileKey = args[++index]
    else if (argument === "--output-dir") options.outputDir = args[++index]
    else if (argument === "--variables") options.includeVariables = true
    else if (argument === "--help" || argument === "-h") options.help = true
    else throw new Error(`Unknown argument: ${argument}`)
  }

  return options
}

function printHelp() {
  console.log(`Fetch a Figma document as JSON.

Usage:
  pnpm figma:fetch --file-key <key> [--variables] [--output-dir <path>]

Environment:
  FIGMA_ACCESS_TOKEN  Preferred Figma personal access token variable.
  FIGMA_API_KEY       Also accepted for existing .env files.
  FIGMA_FILE_KEY      Optional default file key.

Options:
  --variables         Also fetch local variables (requires Figma API permission).
  --output-dir <path> Directory for the downloaded document JSON.
  --help              Show this help.

The full document is saved as <file-key>.json. Optional local variables are
saved under <output-dir>/variables/<file-key>.json.`)
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
  }
}

main().catch((error) => {
  console.error(`Figma download failed: ${error.message}`)
  process.exitCode = 1
})
