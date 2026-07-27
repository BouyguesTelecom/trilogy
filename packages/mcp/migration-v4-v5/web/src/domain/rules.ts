import { existsSync, readdirSync, readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

export type RuleRisk = 'low' | 'medium' | 'high'

export interface MigrationRule {
  id: string
  phase: number
  risk: RuleRisk
  description: string
  pattern: string
  flags: string
  replacement: string
}

type RuleFrontmatter = {
  id: string
  phase: string
  risk: RuleRisk
  description: string
  pattern: string
  flags: string
  replacement?: string
}

function unquote(value: string): string {
  const trimmed = value.trim()
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

function unescapeRegexPattern(value: string): string {
  return value.replace(/\\\\/g, '\\')
}

function parseFrontmatter(content: string, fileName: string): RuleFrontmatter {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) {
    throw new Error(`Missing frontmatter in ${fileName}`)
  }

  const raw = match[1]
  const map = new Map<string, string>()
  for (const line of raw.split('\n')) {
    const parsed = line.match(/^([a-zA-Z][a-zA-Z0-9_-]*):\s*(.*)$/)
    if (!parsed) {
      continue
    }
    const [, key, value] = parsed
    map.set(key, unquote(value ?? ''))
  }

  const id = map.get('id')
  const phase = map.get('phase')
  const risk = map.get('risk') as RuleRisk | undefined
  const description = map.get('description')
  const pattern = map.get('pattern')
  const flags = map.get('flags')

  if (!id || !phase || !risk || !description || !pattern || !flags) {
    throw new Error(`Invalid frontmatter in ${fileName}`)
  }

  return {
    id,
    phase,
    risk,
    description,
    pattern: unescapeRegexPattern(pattern),
    flags,
    replacement: map.get('replacement') ?? '',
  }
}

function getRulesDirectory(): string {
  const currentDir = path.dirname(fileURLToPath(import.meta.url))
  const distDir = path.join(currentDir, 'rules')
  if (existsSync(distDir)) {
    const distFiles = collectRuleFilesRecursively(distDir)
    if (distFiles.length > 0) {
      return distDir
    }
  }

  const srcDir = path.resolve(currentDir, '../../src/domain/rules')
  if (existsSync(srcDir)) {
    return srcDir
  }

  throw new Error('Rules directory not found (dist or src).')
}

function collectRuleFilesRecursively(rootDir: string): string[] {
  const entries = readdirSync(rootDir, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const absolutePath = path.join(rootDir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectRuleFilesRecursively(absolutePath))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(absolutePath)
    }
  }

  return files
}

function loadRulesFromMarkdown(): MigrationRule[] {
  const rulesDir = getRulesDirectory()
  const files: string[] = collectRuleFilesRecursively(rulesDir).sort((a: string, b: string) => a.localeCompare(b))

  return files.map((absolutePath: string) => {
    const content = readFileSync(absolutePath, 'utf8')
    const relativePath = path.relative(rulesDir, absolutePath)
    const frontmatter = parseFrontmatter(content, relativePath)
    return {
      id: frontmatter.id,
      phase: Number(frontmatter.phase),
      risk: frontmatter.risk,
      description: frontmatter.description,
      pattern: frontmatter.pattern,
      flags: frontmatter.flags,
      replacement: frontmatter.replacement ?? '',
    }
  })
}

export function getMigrationRules(): MigrationRule[] {
  return loadRulesFromMarkdown()
}

export function getRulesForPhase(phase?: number): MigrationRule[] {
  if (!phase) {
    return getMigrationRules()
  }
  return getMigrationRules().filter((rule) => rule.phase === phase)
}
