import fs from "node:fs"
import path from "node:path"

const srcDir = path.resolve(import.meta.dirname, "../src")

// index.<platform>.ts(x) prioritaire sur index.ts(x) ; un index vide est ignoré
const findIndex = (dir, platform) => {
  for (const name of [`index.${platform}`, "index"]) {
    for (const ext of ["ts", "tsx"]) {
      const file = path.join(dir, `${name}.${ext}`)
      if (fs.existsSync(file) && fs.statSync(file).size > 0) return file
    }
  }
}

/** Entrées de build : { "components/button/index": "/abs/src/components/button/index.ts" } */
export const collectEntries = (platform) => {
  const entries = {}
  const walk = (dir) => {
    const file = findIndex(dir, platform)
    if (file) {
      const rel = path.relative(srcDir, dir).split(path.sep).join("/")
      entries[rel ? `${rel}/index` : "index"] = file
    }
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) walk(path.join(dir, e.name))
    }
  }
  walk(srcDir)
  return entries
}
