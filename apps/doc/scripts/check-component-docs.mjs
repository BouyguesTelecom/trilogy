import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const componentsRoot = fileURLToPath(
  new URL("../../../packages/react/src/components", import.meta.url)
)
const checkedBarrels = new Set()
const documentedComponents = new Set()
const missingDocs = []

function inspectBarrel(indexPath) {
  const normalizedIndex = path.resolve(indexPath)
  if (checkedBarrels.has(normalizedIndex)) return
  checkedBarrels.add(normalizedIndex)

  const barrelDir = path.dirname(normalizedIndex)
  const source = fs.readFileSync(normalizedIndex, "utf8")
  const exports = source.matchAll(
    /export\s+(?:\*|\{[^}]*\})\s+from\s+["']\.\/([^"']+)["']/g
  )

  for (const match of exports) {
    const modulePath = path.resolve(barrelDir, match[1])
    const nestedIndex = path.join(modulePath, "index.ts")
    if (fs.existsSync(nestedIndex)) {
      inspectBarrel(nestedIndex)
      continue
    }

    if (match[1].endsWith(".types")) continue

    const docsPath = path.join(barrelDir, "docs.md")
    const componentName = match[0]
      .match(/\{\s*([^}]+)\s*\}/)?.[1]
      ?.split(",")[0]
      ?.trim()
    if (!componentName) continue
    documentedComponents.add(componentName)
    if (!fs.existsSync(docsPath)) missingDocs.push({ componentName, docsPath })
  }
}

inspectBarrel(path.join(componentsRoot, "index.ts"))

const seenSlugs = new Map()
const familySlugs = new Set()
const documentedFamilies = new Set()
const docsFiles = []
const familyFiles = []
function collectDocs(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) collectDocs(filePath)
    else if (entry.name === "docs.md") docsFiles.push(filePath)
    else if (entry.name.endsWith(".family.md")) familyFiles.push(filePath)
  }
}
collectDocs(componentsRoot)

for (const docsPath of docsFiles) {
  const source = fs.readFileSync(docsPath, "utf8")
  const frontmatter = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)
  if (!frontmatter) {
    missingDocs.push({
      componentName: path.basename(path.dirname(docsPath)),
      docsPath,
    })
    console.error(`Missing frontmatter: ${docsPath}`)
    continue
  }
  const metadata = Object.fromEntries(
    frontmatter[1]
      .split(/\r?\n/)
      .map((line) => [
        line.slice(0, line.indexOf(":")),
        line.slice(line.indexOf(":") + 1).trim(),
      ])
      .filter(([key, value]) => key && value)
  )
  for (const key of [
    "slug",
    "name",
    "family",
    "familyOrder",
    "order",
    "description",
  ]) {
    if (!metadata[key]) {
      console.error(`Missing '${key}' in ${docsPath}`)
      missingDocs.push({
        componentName: metadata.name ?? path.basename(path.dirname(docsPath)),
        docsPath,
      })
    }
  }
  if (metadata.family) documentedFamilies.add(metadata.family)
  for (const section of ["Examples", "API Reference"]) {
    if (!source.includes(`## ${section}`)) {
      console.error(`Missing '## ${section}' in ${docsPath}`)
      missingDocs.push({
        componentName: metadata.name ?? path.basename(path.dirname(docsPath)),
        docsPath,
      })
    }
  }
  const exampleTitles = [...source.matchAll(/^###\s+(.+)$/gm)].map(
    ([, title]) => title.trim()
  )
  if (exampleTitles[0] !== "Basic") {
    console.error(`The first component example must be 'Basic' in ${docsPath}`)
    missingDocs.push({
      componentName: metadata.name ?? path.basename(path.dirname(docsPath)),
      docsPath,
    })
  }
  if (/^## (Usage|Anatomy)\s*$/m.test(source)) {
    console.error(`Remove legacy Usage/Anatomy sections from ${docsPath}`)
    missingDocs.push({
      componentName: metadata.name ?? path.basename(path.dirname(docsPath)),
      docsPath,
    })
  }
  const tsxExamples = [...source.matchAll(/```tsx\s*\r?\n([\s\S]*?)\r?\n```/g)]
  if (!tsxExamples.length) {
    console.error(`Missing executable TSX examples in ${docsPath}`)
    missingDocs.push({
      componentName: metadata.name ?? path.basename(path.dirname(docsPath)),
      docsPath,
    })
  }
  if (tsxExamples.some(([, code]) => /^\s*(?:import|export)\s/m.test(code))) {
    console.error(
      `TSX examples must be standalone JSX expressions in ${docsPath}`
    )
    missingDocs.push({
      componentName: metadata.name ?? path.basename(path.dirname(docsPath)),
      docsPath,
    })
  }
  const contentHeadings = [...source.matchAll(/^#{2,3}\s+(.+)$/gm)]
  for (const [index, heading] of contentHeadings.entries()) {
    const title = heading[1].trim()
    if (["Examples", "API Reference"].includes(title)) continue
    const start = (heading.index ?? 0) + heading[0].length
    const end = contentHeadings[index + 1]?.index ?? source.length
    const sectionBody = source
      .slice(start, end)
      .replace(/```[\s\S]*?```/g, "")
      .trim()
    if (!sectionBody) {
      console.error(`Missing description for '${title}' in ${docsPath}`)
      missingDocs.push({
        componentName: metadata.name ?? path.basename(path.dirname(docsPath)),
        docsPath,
      })
    }
  }
  if (metadata.slug) {
    if (seenSlugs.has(metadata.slug)) {
      console.error(
        `Duplicate slug '${metadata.slug}' in ${docsPath} and ${seenSlugs.get(metadata.slug)}`
      )
      missingDocs.push({
        componentName: metadata.name ?? metadata.slug,
        docsPath,
      })
    }
    seenSlugs.set(metadata.slug, docsPath)
  }
}

for (const familyPath of familyFiles) {
  const source = fs.readFileSync(familyPath, "utf8")
  const frontmatter = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)
  if (!frontmatter) {
    console.error(`Missing frontmatter: ${familyPath}`)
    missingDocs.push({
      componentName: path.basename(familyPath),
      docsPath: familyPath,
    })
    continue
  }
  const metadata = Object.fromEntries(
    frontmatter[1]
      .split(/\r?\n/)
      .map((line) => [
        line.slice(0, line.indexOf(":")),
        line.slice(line.indexOf(":") + 1).trim(),
      ])
      .filter(([key, value]) => key && value)
  )
  for (const key of ["slug", "name", "familyOrder", "description"]) {
    if (!metadata[key]) {
      console.error(`Missing '${key}' in ${familyPath}`)
      missingDocs.push({
        componentName: metadata.name ?? path.basename(familyPath),
        docsPath: familyPath,
      })
    }
  }
  if (!source.includes("## Purpose")) {
    console.error(`Missing '## Purpose' in ${familyPath}`)
    missingDocs.push({
      componentName: metadata.name ?? path.basename(familyPath),
      docsPath: familyPath,
    })
  }
  if (metadata.slug) {
    if (familySlugs.has(metadata.slug) || seenSlugs.has(metadata.slug)) {
      console.error(`Duplicate docs slug '${metadata.slug}' in ${familyPath}`)
      missingDocs.push({
        componentName: metadata.name ?? metadata.slug,
        docsPath: familyPath,
      })
    }
    familySlugs.add(metadata.slug)
  }
  if (metadata.name && !documentedFamilies.has(metadata.name)) {
    console.error(
      `Family '${metadata.name}' has no component docs: ${familyPath}`
    )
    missingDocs.push({ componentName: metadata.name, docsPath: familyPath })
  }
}

for (const docsPath of docsFiles) {
  const source = fs.readFileSync(docsPath, "utf8")
  const frontmatter = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)
  const metadata = Object.fromEntries(
    (frontmatter?.[1] ?? "")
      .split(/\r?\n/)
      .map((line) => [
        line.slice(0, line.indexOf(":")),
        line.slice(line.indexOf(":") + 1).trim(),
      ])
      .filter(([key, value]) => key && value)
  )
  if (metadata.parent && !seenSlugs.has(metadata.parent)) {
    console.error(`Unknown parent slug '${metadata.parent}' in ${docsPath}`)
    missingDocs.push({
      componentName: metadata.name ?? metadata.slug,
      docsPath,
    })
  }
}

if (missingDocs.length) {
  console.error("Public React components are missing colocated docs.md files:")
  for (const { componentName, docsPath } of missingDocs) {
    console.error(
      `- ${componentName}: ${path.relative(process.cwd(), docsPath)}`
    )
  }
  process.exitCode = 1
} else {
  console.log(
    `Validated Markdown docs for ${documentedComponents.size} public React components.`
  )
}
