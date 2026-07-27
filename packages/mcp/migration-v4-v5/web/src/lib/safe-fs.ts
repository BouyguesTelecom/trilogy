import { promises as fs } from 'node:fs'
import path from 'node:path'

const DEFAULT_IGNORED_DIRS = new Set([
  '.git',
  'node_modules',
  'dist',
  'lib',
  'coverage',
  'storybook-static',
  'test-results',
  'build',
])

const CODE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx'])

export function getWorkspaceRoot(): string {
  return process.env.TRILOGY_MCP_ROOT || process.cwd()
}

export function isPathInsideRoot(absPath: string, root: string): boolean {
  const rel = path.relative(root, absPath)
  return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel))
}

export function resolveSafePath(root: string, relativePath: string): string {
  const resolved = path.resolve(root, relativePath)

  if (!isPathInsideRoot(resolved, root)) {
    throw new Error(`unsafe_path: ${relativePath}`)
  }

  return resolved
}

export async function fileExists(absPath: string): Promise<boolean> {
  try {
    await fs.access(absPath)
    return true
  } catch {
    return false
  }
}

export async function collectCodeFiles(root: string, targets: string[], maxFiles: number): Promise<string[]> {
  const queue: string[] = []

  for (const target of targets) {
    const abs = resolveSafePath(root, target)
    if (await fileExists(abs)) {
      queue.push(abs)
    }
  }

  const results: string[] = []

  while (queue.length > 0) {
    if (results.length >= maxFiles) {
      break
    }

    const current = queue.shift()
    if (!current) {
      continue
    }

    const stat = await fs.stat(current)

    if (stat.isDirectory()) {
      const name = path.basename(current)
      if (DEFAULT_IGNORED_DIRS.has(name)) {
        continue
      }

      const entries = await fs.readdir(current, { withFileTypes: true })
      for (const entry of entries) {
        const next = path.join(current, entry.name)
        if (!isPathInsideRoot(next, root)) {
          continue
        }
        queue.push(next)
      }
      continue
    }

    const ext = path.extname(current)
    if (
      CODE_EXTENSIONS.has(ext) &&
      !current.endsWith('.native.ts') &&
      !current.endsWith('.native.tsx') &&
      !current.endsWith('.native.js') &&
      !current.endsWith('.native.jsx')
    ) {
      results.push(current)
    }
  }

  return results
}

export async function readUtf8(absPath: string): Promise<string> {
  return fs.readFile(absPath, 'utf8')
}

export async function writeUtf8(absPath: string, content: string): Promise<void> {
  await fs.writeFile(absPath, content, 'utf8')
}

export function toRelative(root: string, absPath: string): string {
  return path.relative(root, absPath).split(path.sep).join('/')
}
