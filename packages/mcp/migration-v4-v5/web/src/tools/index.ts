import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import { registerMigrateStyledProviderTool } from './tool-migrate-styled-provider.js'

export function registerTools(server: McpServer): void {
  // Context migration: TrilogyProviderStyled theme prop removal + stylesheet link
  registerMigrateStyledProviderTool(server)
}
