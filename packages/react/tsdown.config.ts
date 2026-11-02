import { defineConfig } from "tsdown"

import { collectEntries } from "./scripts/entries.js"

const ext = (platform: "web" | "native") => [
  `.${platform}.ts`,
  `.${platform}.tsx`,
  ".tsx",
  ".ts",
  ".js",
]

const CLIENT_DIRS = /[\\/]src[\\/](components|contexts|hooks)[\\/]/

// Les bundlers RSC lisent la directive en tête de chaque fichier émis (mode unbundle)
const useClient = {
  name: "use-client",
  renderChunk(code: string, chunk: { facadeModuleId?: string | null }) {
    if (!chunk.facadeModuleId || !CLIENT_DIRS.test(chunk.facadeModuleId))
      return null
    if (/^\s*["']use client["']/.test(code)) return null
    return { code: `"use client";\n${code}`, map: null }
  },
}

export default defineConfig([
  {
    entry: collectEntries("web"),
    outDir: "./dist/web",
    format: ["esm", "cjs"],
    platform: "browser",
    dts: true,
    unbundle: true,
    external: [/^react(\/|$)/, /^react-dom(\/|$)/, /^react-native(\/|$)/],
    plugins: [useClient],
    inputOptions: { resolve: { extensions: ext("web") } },
  },
  {
    entry: collectEntries("native"),
    outDir: "./dist/native",
    format: ["esm"],
    platform: "neutral",
    dts: true,
    unbundle: true,
    external: [/^react(\/|$)/, /^react-native(\/|$)/],
    inputOptions: { resolve: { extensions: ext("native") } },
  },
])
