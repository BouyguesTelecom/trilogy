# Trilogy MCP - Migration v4 to v5 (Web)

Local-first MCP server for Trilogy web migrations over STDIO.

## Quick Start

### Build

```bash
npm run build
```

Or from the repository root:

```bash
npm run mcp:migration:build
```

### Use with an MCP Host

Point your MCP host to the built server:

```bash
node packages/mcp/migration-v4-v5/web/dist/index.js
```

Configuration example:

```json
{
  "command": "node",
  "args": ["packages/mcp/migration-v4-v5/web/dist/index.js"]
}
```

Once connected, the server exposes:
- **Prompt**: `migrate` - entry point for migrations
- **Tools**: migration tools (e.g., `migrate_styled_provider`)
- **Resources**: migration rules and workflow guides

## Development

```bash
npm run dev
```

## Architecture

- **Tools** (`src/tools/`): Migration operations (e.g., removing props, adding links)
- **Rules** (`src/domain/rules/`): Markdown-based migration rules with frontmatter
- **Resources** (`src/resources/`): Queryable migration catalogs and guides
- **Prompts** (`src/prompts/`): Entry points for the host/agent

All tools require `confirmDestructive: true` to apply changes.
