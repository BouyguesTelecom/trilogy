import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

import { log } from './lib/logger.js'
import { registerPrompts } from './prompts/index.js'
import { registerResources } from './resources/index.js'
import { registerTools } from './tools/index.js'

function createServer(): McpServer {
  const server = new McpServer(
    {
      name: 'trilogy-migration-v4-v5-web',
      version: '0.1.0',
    },
    {
      instructions: [
        'You are a local-first MCP server for Trilogy web migration.',
        'When using migrate_styled_provider tool: if projectType is "unknown", STOP and analyze the project structure.',
        'Analyze by: (1) checking for package.json keywords, (2) looking for build config files (webpack, vite, tsconfig), (3) inspecting src/ structure.',
        'Once you determine the project type, call the tool again with appropriate parameters.',
        'Safe to perform destructive operations only when confirmDestructive=true.',
        'Never operate outside workspace root.',
      ].join(' '),
      capabilities: {
        tools: {
          listChanged: false,
        },
        resources: {
          listChanged: false,
        },
        prompts: {
          listChanged: false,
        },
      },
    },
  )

  registerResources(server)
  registerPrompts(server)
  registerTools(server)

  return server
}

async function main(): Promise<void> {
  const server = createServer()
  const transport = new StdioServerTransport()

  await server.connect(transport)
  log('info', 'trilogy migration MCP server started', {
    transport: 'stdio',
    mode: 'local-first',
  })
}

main().catch((error) => {
  log('error', 'fatal_startup_error', {
    error: error instanceof Error ? error.message : String(error),
  })
  process.exit(1)
})
