import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { collectCodeFiles, getWorkspaceRoot, readUtf8, writeUtf8, toRelative, resolveSafePath } from '../lib/safe-fs.js'
import { log } from '../lib/logger.js'

interface ProjectType {
  type: 'nextjs' | 'vite-react' | 'react-native' | 'unknown'
  packageJsonPath: string
}

async function detectProjectType(root: string): Promise<ProjectType> {
  const packageJsonPath = `${root}/package.json`
  try {
    const content = await readUtf8(packageJsonPath)
    const pkg = JSON.parse(content)

    if (pkg.dependencies?.next || pkg.devDependencies?.next) {
      return { type: 'nextjs', packageJsonPath }
    }
    if (pkg.dependencies?.vite || pkg.devDependencies?.vite) {
      return { type: 'vite-react', packageJsonPath }
    }
  } catch (error) {
    log('warn', 'Could not detect project type', { error: String(error) })
  }

  return { type: 'unknown', packageJsonPath }
}

function getStylesheetUrl(mangled: boolean): string {
  const base = 'https://cdn.jsdelivr.net/npm/@trilogy-ds/styles/dist/default'
  return mangled ? `${base}/trilogy-mangled.css` : `${base}/trilogy.css`
}

async function addStylesheetLink(
  root: string,
  projectType: ProjectType,
  stylesheetUrl: string,
): Promise<{ filePath: string; added: boolean; reason?: string }> {
  // For Next.js projects
  if (projectType.type === 'nextjs') {
    const appLayoutPaths = [
      `${root}/app/layout.tsx`,
      `${root}/app/layout.ts`,
      `${root}/src/app/layout.tsx`,
      `${root}/src/app/layout.ts`,
    ]

    for (const layoutPath of appLayoutPaths) {
      try {
        const content = await readUtf8(layoutPath)
        if (content.includes('</head>') || content.includes('Head')) {
          // Check if stylesheet already added
          if (content.includes('trilogy-styles') || content.includes('trilogy')) {
            return { filePath: layoutPath, added: false, reason: 'Stylesheet link already present' }
          }

          // Add link to metadata export if using Next.js 13+
          if (content.includes('export const metadata')) {
            if (!content.includes('links:')) {
              const newContent = content.replace(
                /export const metadata[:\s=].*?{/,
                `export const metadata = {
  links: [{ rel: 'stylesheet', href: '${stylesheetUrl}' }],`,
              )
              const relative = toRelative(root, layoutPath)
              const safePath = resolveSafePath(root, relative)
              await writeUtf8(safePath, newContent)
              return { filePath: relative, added: true }
            }
          }
        }
      } catch (error) {
        log('info', `Layout not found at ${layoutPath}`, { error: String(error) })
      }
    }

    return {
      filePath: 'app/layout.tsx',
      added: false,
      reason: 'Could not auto-detect layout location. Please add manually to metadata.links',
    }
  }

  // For Vite React projects
  if (projectType.type === 'vite-react') {
    const indexPaths = [`${root}/index.html`, `${root}/src/index.html`, `${root}/public/index.html`]

    for (const indexPath of indexPaths) {
      try {
        const content = await readUtf8(indexPath)
        if (content.includes('</head>')) {
          if (content.includes('trilogy-styles') || content.includes('trilogy')) {
            return { filePath: indexPath, added: false, reason: 'Stylesheet link already present' }
          }

          const newContent = content.replace(
            '</head>',
            `    <link rel="stylesheet" href="${stylesheetUrl}">\n  </head>`,
          )
          const relative = toRelative(root, indexPath)
          const safePath = resolveSafePath(root, relative)
          await writeUtf8(safePath, newContent)
          return { filePath: relative, added: true }
        }
      } catch (error) {
        log('info', `Index not found at ${indexPath}`, { error: String(error) })
      }
    }

    return {
      filePath: 'index.html',
      added: false,
      reason: 'Could not locate index.html. Please add stylesheet link manually to <head>',
    }
  }

  return {
    filePath: 'unknown',
    added: false,
    reason: 'Project type unknown - analyze project and specify nextjs or vite-react in projectType parameter',
  }
}

export function registerMigrateStyledProviderTool(server: McpServer): void {
  server.registerTool(
    'migrate_styled_provider',
    {
      title: 'Migrate TrilogyProviderStyled to link stylesheet',
      description:
        'Remove theme prop from TrilogyProviderStyled and add stylesheet link. Detects project type and asks for mangled preference.',
      inputSchema: {
        targets: z
          .array(z.string())
          .optional()
          .describe("Paths to migrate. Example: ['examples/react-template'] or leave empty for workspace root"),
        mangled: z
          .boolean()
          .optional()
          .describe('Use mangled stylesheet (minified, smaller). Default: false (unmangled)'),
        confirmDestructive: z.boolean().default(false).describe('Required true to apply changes to disk'),
      },
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({
      targets,
      mangled,
      confirmDestructive,
    }: {
      targets?: string[]
      mangled?: boolean
      confirmDestructive: boolean
    }) => {
      if (!confirmDestructive) {
        return {
          content: [
            {
              type: 'text',
              text: 'Migration requires confirmDestructive=true to apply changes. Set this flag to proceed.',
            },
          ],
          isError: true,
        }
      }

      const root = getWorkspaceRoot()

      // Step 1: Detect project type
      const projectType = await detectProjectType(root)

      // Step 2: Get stylesheet URL based on mangled preference
      const stylesheetUrl = getStylesheetUrl(mangled ?? false)

      // Step 3: Add stylesheet link
      const linkResult = await addStylesheetLink(root, projectType, stylesheetUrl)

      // Step 4: Find and remove theme prop from TrilogyProviderStyled usages
      const files = await collectCodeFiles(root, targets ?? [root], 1000)
      const themeRemovalPattern = /theme=["'](?:default|mangled|none)["']\s*/g
      const changes: { filePath: string; count: number }[] = []
      let totalReplacements = 0

      for (const file of files) {
        const content = await readUtf8(file)
        const matches = content.match(themeRemovalPattern)

        if (matches && matches.length > 0) {
          const newContent = content.replace(themeRemovalPattern, '')
          const relative = toRelative(root, file)
          const safePath = resolveSafePath(root, relative)
          await writeUtf8(safePath, newContent)

          totalReplacements += matches.length
          changes.push({
            filePath: relative,
            count: matches.length,
          })
        }
      }

      const summary = [
        `stylesheet_${mangled ? 'mangled' : 'default'}`,
        `project_type=${projectType.type}`,
        `link_${linkResult.added ? 'added' : 'failed_or_exists'}`,
        `files_updated=${changes.length}`,
        `theme_props_removed=${totalReplacements}`,
      ].join(' ')

      return {
        content: [
          {
            type: 'text',
            text: summary,
          },
        ],
        structuredContent: {
          stylesheetUrl,
          projectType: projectType.type,
          linkAddition: {
            filePath: linkResult.filePath,
            added: linkResult.added,
            reason: linkResult.reason,
          },
          themePropRemoval: {
            filesUpdated: changes.length,
            totalRemoved: totalReplacements,
            changes,
          },
        },
      }
    },
  )
}
