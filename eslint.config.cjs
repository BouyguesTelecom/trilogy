const { defineConfig } = require("eslint/config")
const expoConfig = require("eslint-config-expo/flat")
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended")

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*", "**/dist/**", "**/dist-web/**", "**/*.figma.ts"],
  },
  {
    // La détection auto de eslint-plugin-react appelle context.getFilename (retiré d'ESLint 10)
    settings: {
      react: { version: "19.3" },
      // Les alias (ex. @trilogy-react/theme) sont dans les tsconfig des packages, pas à la racine
      "import/resolver": {
        typescript: {
          project: ["packages/*/tsconfig.json", "apps/*/tsconfig.json"],
        },
      },
    },
  },
])
