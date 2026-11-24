import { readdirSync, readFileSync } from "node:fs"
import { join, resolve } from "node:path"

export interface ComponentDoc {
  slug: string
  name: string
  family: string
  familyOrder: number
  order: number
  description: string
  parent?: string
  markdown: string
}

export interface ComponentNavItem {
  slug: string
  name: string
  description: string
  children: ComponentNavItem[]
}

export interface ComponentFamily {
  slug: string
  name: string
  order: number
  description: string
  components: ComponentNavItem[]
  markdown: string
}

export interface FamilyDoc {
  slug: string
  name: string
  order: number
  description: string
  markdown: string
}

const componentsRoot = resolve(
  process.cwd(),
  "../../packages/react/src/components"
)

function parseFrontmatter(
  source: string,
  filePath: string,
  required = ["slug", "name", "family", "description"]
) {
  const match = source.match(
    /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/
  )
  if (!match) throw new Error(`Missing frontmatter in ${filePath}`)

  const metadata: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":")
    if (separator === -1) continue
    const key = line.slice(0, separator).trim()
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^("|')(.*)\1$/, "$2")
    metadata[key] = value
  }

  for (const key of required) {
    if (!metadata[key]) throw new Error(`Missing '${key}' in ${filePath}`)
  }

  return {
    metadata,
    markdown: match[2].trim(),
  }
}

function scanDocs(directory: string): ComponentDoc[] {
  const docs: ComponentDoc[] = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      docs.push(...scanDocs(path))
      continue
    }
    if (entry.name !== "docs.md") continue

    const source = readFileSync(path, "utf8")
    const { metadata, markdown } = parseFrontmatter(source, path, [
      "slug",
      "name",
      "family",
      "description",
    ])
    docs.push({
      slug: metadata.slug,
      name: metadata.name,
      family: metadata.family,
      familyOrder: Number(metadata.familyOrder ?? 999),
      order: Number(metadata.order ?? 999),
      description: metadata.description,
      parent: metadata.parent,
      markdown,
    })
  }
  return docs
}

function parseFamilyDoc(filePath: string): FamilyDoc {
  const source = readFileSync(filePath, "utf8")
  const { metadata, markdown } = parseFrontmatter(source, filePath, [
    "slug",
    "name",
    "familyOrder",
    "description",
  ])
  return {
    slug: metadata.slug,
    name: metadata.name,
    order: Number(metadata.familyOrder),
    description: metadata.description,
    markdown,
  }
}

function scanFamilyDocs(directory: string): FamilyDoc[] {
  const families: FamilyDoc[] = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) families.push(...scanFamilyDocs(path))
    else if (entry.name.endsWith(".family.md"))
      families.push(parseFamilyDoc(path))
  }
  return families
}

export function getComponentDocs(): ComponentDoc[] {
  const docs = scanDocs(componentsRoot)
  const slugs = new Set<string>()
  for (const doc of docs) {
    if (slugs.has(doc.slug))
      throw new Error(`Duplicate component docs slug: ${doc.slug}`)
    slugs.add(doc.slug)
  }
  return docs.sort(
    (a, b) =>
      a.familyOrder - b.familyOrder ||
      a.order - b.order ||
      a.name.localeCompare(b.name)
  )
}

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return getComponentDocs().find((doc) => doc.slug === slug)
}

export function getFamilyDocs(): FamilyDoc[] {
  return scanFamilyDocs(componentsRoot).sort(
    (a, b) => a.order - b.order || a.name.localeCompare(b.name)
  )
}

export function getFamilyDoc(slug: string): FamilyDoc | undefined {
  return getFamilyDocs().find((family) => family.slug === slug)
}

export function getComponentFamilies(): ComponentFamily[] {
  const docs = getComponentDocs()
  const familyDocs = getFamilyDocs()
  const familyDocsByName = new Map(
    familyDocs.map((family) => [family.name, family])
  )
  const familyMap = new Map<string, { order: number; docs: ComponentDoc[] }>()
  for (const doc of docs) {
    const family = familyMap.get(doc.family) ?? {
      order: doc.familyOrder,
      docs: [],
    }
    family.order = Math.min(family.order, doc.familyOrder)
    family.docs.push(doc)
    familyMap.set(doc.family, family)
  }

  return [...familyMap.entries()]
    .sort((a, b) => a[1].order - b[1].order || a[0].localeCompare(b[0]))
    .map(([name, family]) => {
      const items = new Map<string, ComponentNavItem>()
      for (const doc of family.docs) {
        items.set(doc.slug, {
          slug: doc.slug,
          name: doc.name,
          description: doc.description,
          children: [],
        })
      }

      const roots: ComponentNavItem[] = []
      for (const doc of family.docs) {
        const item = items.get(doc.slug)!
        const parent = doc.parent ? items.get(doc.parent) : undefined
        if (parent) parent.children.push(item)
        else roots.push(item)
      }

      const familyDoc = familyDocsByName.get(name)
      if (!familyDoc) throw new Error(`Missing ${name}.family.md documentation`)
      return {
        slug: familyDoc.slug,
        name,
        order: family.order,
        description: familyDoc.description,
        markdown: familyDoc.markdown,
        components: roots,
      }
    })
}

export interface DocSection {
  title: string
  id: string
  level: 2 | 3
  markdown: string
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function splitDocumentSections(markdown: string): DocSection[] {
  const headingPattern = /^(##|###)\s+(.+?)\s*$/gm
  const headings = [...markdown.matchAll(headingPattern)]
  return headings.map((match, index) => {
    const start = (match.index ?? 0) + match[0].length
    const end = headings[index + 1]?.index ?? markdown.length
    const title = match[2].trim()
    return {
      title,
      id: slugifyHeading(title),
      level: match[1].length as 2 | 3,
      markdown: markdown.slice(start, end).trim(),
    }
  })
}
