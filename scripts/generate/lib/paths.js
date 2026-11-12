import path from "node:path"

export const ROOT = path.resolve(import.meta.dirname, "../../..")

export const FIGMA_SRC = path.join(ROOT, "packages/figma/src")
export const FIGMA_VARIABLES = path.join(FIGMA_SRC, "variables")
export const STYLES_SRC = path.join(ROOT, "packages/styles/src")
export const REACT_SRC = path.join(ROOT, "packages/react/src")
