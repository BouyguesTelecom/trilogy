#!/usr/bin/env node
// Régénère tout ce qui dérive de Figma.
//   node scripts/generate [étape] [node-id]
// Étapes : tokens, components, props, format, css, all (défaut)
import { spawnSync } from "node:child_process"
import process from "node:process"

import { fetchPage } from "./lib/figma.js"
import { REACT_SRC, ROOT } from "./lib/paths.js"

const run = (command, args) => {
  const { status } = spawnSync(command, args, { cwd: ROOT, stdio: "inherit" })
  if (status !== 0) throw new Error(`${command} ${args.join(" ")} a échoué`)
}

// Chaque étape est importée à la demande : tokens.js lit ses sources dès son chargement
const steps = {
  // packages/figma/src -> variables SCSS, helpers, packages/react/src/constants/theme.ts
  async tokens() {
    const { generateTokens } = await import("./tokens.js")
    await generateTokens()
  },
  // page Figma -> SCSS des composants (styles) et styles natifs (react)
  async components(nodeId) {
    const { generateComponents } = await import("./components.js")
    await generateComponents(await fetchPage(nodeId))
  },
  // page Figma -> *.generated.ts (props des composants react)
  async props(nodeId) {
    const { generateProps } = await import("./props.js")
    await generateProps(await fetchPage(nodeId))
  },
  // met en forme les fichiers TypeScript générés
  format() {
    run("npx", [
      "prettier",
      "--write",
      `${REACT_SRC}/constants/theme.ts`,
      `${REACT_SRC}/**/*.generated.ts`,
      `${REACT_SRC}/**/*.styles.native.ts`,
    ])
  },
  // SCSS -> packages/styles/dist/default/trilogy.css
  css() {
    run("pnpm", ["--filter", "@trilogy-ds/styles", "build"])
  },
}

const [command = "all", nodeId] = process.argv.slice(2)
const order = command === "all" ? Object.keys(steps) : [command]

if (!order.every((name) => name in steps)) {
  console.error(
    `Étape inconnue "${command}". Étapes : ${Object.keys(steps).join(", ")}, all`
  )
  process.exit(1)
}

try {
  for (const name of order) {
    console.log(`\n▶ ${name}`)
    await steps[name](nodeId)
  }
} catch (err) {
  console.error("❌", err.message)
  process.exit(1)
}
