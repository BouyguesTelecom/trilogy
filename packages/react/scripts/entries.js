import fs from "node:fs"
import path from "node:path"

const srcDir = path.resolve(import.meta.dirname, "../src")

// index.<platform>.ts(x) is preferred over index.ts(x); empty indexes are ignored.
const findIndex = (dir, platform) => {
  for (const name of [`index.${platform}`, "index"]) {
    for (const ext of ["ts", "tsx"]) {
      const file = path.join(dir, `${name}.${ext}`)
      if (fs.existsSync(file) && fs.statSync(file).size > 0) return file
    }
  }
}

/**
 * Build entries: { "components/button/index": "/abs/src/components/button/index.ts" }
 * @param {"web" | "native"} platform
 * @returns {Record<string, string>}
 */
export const collectEntries = (platform) => {
  const entries = {}
  const walk = (dir) => {
    const file = findIndex(dir, platform)
    if (file) {
      const rel = path.relative(srcDir, dir).split(path.sep).join("/")
      entries[rel ? `${rel}/index` : "index"] = file
    }
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(path.join(dir, entry.name))
    }
  }
  walk(srcDir)
  return entries
}
