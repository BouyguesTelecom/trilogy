#!/usr/bin/env node
import { spawnSync } from "node:child_process"
import { resolve } from "node:path"
import process from "node:process"

process.loadEnvFile(resolve(import.meta.dirname, "../.env"))
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_API_KEY

if (!FIGMA_ACCESS_TOKEN) {
  console.error(`Jeton Figma introuvable. Definir FIGMA_API_KEY`)
  process.exit(1)
}

const result = spawnSync(
  "npx",
  ["figma", "connect", "publish", ...process.argv.slice(2)],
  {
    stdio: "inherit",
    env: { ...process.env, FIGMA_ACCESS_TOKEN },
  }
)
process.exit(result.status ?? 1)
