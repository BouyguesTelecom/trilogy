import path from "node:path"
import { fileURLToPath } from "node:url"
import type { StorybookConfig } from "@storybook/react-vite"

const configDir = path.dirname(fileURLToPath(import.meta.url))
const packageDir = path.resolve(configDir, "..")
const monorepoRoot = path.resolve(packageDir, "../..")
const reactSource = path.join(monorepoRoot, "packages/react/src")

const config: StorybookConfig = {
  stories: ["../../react/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: "@storybook/react-vite",
  viteFinal: async (viteConfig) => {
    viteConfig.resolve ??= {}
    viteConfig.resolve.alias = [
      {
        find: /^@trilogy-ds\/react$/,
        replacement: path.join(reactSource, "index.ts"),
      },
      {
        find: /^@trilogy-ds\/react\//,
        replacement: `${reactSource}/`,
      },
      {
        find: /^@\//,
        replacement: `${reactSource}/`,
      },
      {
        find: /^@version$/,
        replacement: path.join(monorepoRoot, "packages/react/version.json"),
      },
    ]
    viteConfig.resolve.extensions = [
      ".web.tsx",
      ".web.ts",
      ".web.jsx",
      ".web.js",
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".json",
    ]
    viteConfig.optimizeDeps ??= {}
    viteConfig.optimizeDeps.include = [
      ...new Set([
        ...(viteConfig.optimizeDeps.include ?? []),
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ]),
    ]
    viteConfig.server ??= {}
    viteConfig.server.fs ??= {}
    viteConfig.server.fs.allow = [monorepoRoot]
    return viteConfig
  },
}

export default config
