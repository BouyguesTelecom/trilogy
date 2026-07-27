import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'

export function registerPrompts(server: McpServer): void {
  server.registerPrompt(
    'migrate',
    {
      title: 'Migrate components v4 → v5',
      description: 'Select folders to migrate and apply v4→v5 component migrations',
      argsSchema: {
        targets: z.string().describe('Selected target folders (comma-separated). Will be populated from UI selection.'),
      },
    },
    async ({ targets }: { targets: string }) => {
      const targetList = targets
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)

      return {
        description: 'Component migration workflow',
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `Migrating Trilogy components v4 → v5 on these targets:\n${targetList
                .map((t) => `  • ${t}`)
                .join(
                  '\n',
                )}\n\n**Phase 1: Migrate context (TrilogyProviderStyled)**\nmigrate_styled_provider({ targets: ${JSON.stringify(
                targetList,
              )}, mangled: false, confirmDestructive: true })`,
            },
          },
        ],
      }
    },
  )
}
