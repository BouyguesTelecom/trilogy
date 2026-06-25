import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { getMigrationRules } from '../domain/rules.js'

export function registerResources(server: McpServer): void {
  // Resource 1: Migration rules catalog (JSON)
  server.registerResource(
    'migration-rules',
    'mcp://trilogy/migration/rules',
    {
      title: 'Trilogy migration rules catalog',
      description: 'Machine-readable migration rules for v4 → v5 web migration',
      mimeType: 'application/json',
    },
    async () => ({
      contents: [
        {
          uri: 'mcp://trilogy/migration/rules',
          mimeType: 'application/json',
          text: JSON.stringify(
            {
              rules: getMigrationRules(),
              timestamp: new Date().toISOString(),
              version: '1.0.0',
            },
            null,
            2,
          ),
        },
      ],
    }),
  )

  // Resource 2: Migration workflow guide (Markdown)
  server.registerResource(
    'migration-workflow',
    'mcp://trilogy/migration/workflow',
    {
      title: 'Trilogy migration workflow',
      description: 'Step-by-step guide for v4 → v5 web component migration',
      mimeType: 'text/markdown',
    },
    async () => ({
      contents: [
        {
          uri: 'mcp://trilogy/migration/workflow',
          mimeType: 'text/markdown',
          text: [
            '# Trilogy v4 → v5 Web Migration Workflow',
            '',
            '## Available Tools',
            '',
            '### migrate_styled_provider',
            'Remove `theme` prop from `TrilogyProviderStyled` and add stylesheet link.',
            '',
            '**Usage:**',
            '```',
            'migrate_styled_provider({',
            '  targets: ["packages/react", "examples/react-template"],',
            '  mangled: false,',
            '  confirmDestructive: true',
            '})',
            '```',
            '',
            '**Parameters:**',
            '- `targets` (optional): Paths to migrate. Defaults to workspace root.',
            '- `mangled` (optional): Use minified stylesheet. Default: false.',
            '- `confirmDestructive` (required): Must be true to apply changes.',
            '',
            '**Detects:**',
            '- Next.js projects → adds to `app/layout.tsx` metadata.links',
            '- Vite React projects → adds to `index.html` head',
            '- Unknown projects → agent analyzes and determines strategy',
            '',
            '## Migration Rules',
            '',
            'Rules are applied incrementally. Current rules:',
            '- **phase 2**: Component prop migrations (TrilogyProviderStyled, etc.)',
            '',
            '## Safety',
            '- Read-only by default',
            '- Writes require `confirmDestructive=true`',
            '- Paths scoped to workspace root',
            '- All changes are reversible via git',
          ].join('\n'),
        },
      ],
    }),
  )
}
