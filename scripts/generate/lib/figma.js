import path from "node:path"
import process from "node:process"

import { ROOT } from "./paths.js"

const DEFAULT_NODE_ID = "35:117"
const DEFAULT_FILE_KEY = "du5IDsc76TxdC7vctI1h7I"

const pages = new Map()

// Une seule requête par page, partagée entre les générateurs d'un même lancement
export function fetchPage(nodeId = DEFAULT_NODE_ID) {
  const id = nodeId.replace("-", ":")
  if (!pages.has(id)) pages.set(id, request(id))
  return pages.get(id)
}

async function request(nodeId) {
  process.loadEnvFile(path.join(ROOT, ".env"))

  const apiKey = process.env.FIGMA_API_KEY
  if (!apiKey)
    throw new Error("Variable FIGMA_API_KEY introuvable dans le .env")

  const fileKey = process.env.FIGMA_FILE_KEY || DEFAULT_FILE_KEY
  const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${nodeId}`
  const response = await fetch(url, { headers: { "X-Figma-Token": apiKey } })

  if (!response.ok) {
    throw new Error(
      `Erreur API Figma (${response.status}) : ${response.statusText}`
    )
  }

  const page = (await response.json()).nodes[nodeId]
  if (!page?.document) {
    throw new Error(`Page ou frame introuvable pour le node ID ${nodeId}`)
  }

  return page
}

const lowerFirst = (str) => str.charAt(0).toLowerCase() + str.slice(1)

// "components/button/buttonList" -> "buttonList"
export const getComponentName = (rawName) =>
  lowerFirst(rawName.split("/").pop().trim())

// "components/button/buttonList" -> ["button", "buttonList"] ; "components/button" -> ["button"]
export const getComponentDirSegments = (rawName) =>
  rawName
    .split("/")
    .map((segment) => segment.trim())
    .filter(
      (segment, i) => !(i === 0 && segment.toLowerCase() === "components")
    )
    .map(lowerFirst)
