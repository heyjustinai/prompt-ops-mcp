# Prompt Ops MCP

A streamlined Model Context Protocol (MCP) server that optimizes prompts using meta-prompting techniques. This server can be easily integrated into Cursor and other MCP-compatible tools to enhance prompt quality and effectiveness.

## Features

- **Two-Turn Prompt Optimization**: Transform basic prompts into sophisticated, structured requests using a simple two-turn approach
- **Meta-Prompting Technique**: Leverages the LLM's capabilities to apply optimization guidelines
- **MCP Integration**: Seamlessly integrates with Cursor and other MCP-compatible tools
- **TypeScript**: Built with TypeScript for type safety and better development experience

## Installation

### Via NPM (Recommended)

```bash
npm install -g prompt-ops-mcp
```

### From Source

```bash
git clone <repository-url>
cd prompt-ops-mcp
npm install
npm run build
```

## Usage

### Integration with Cursor

Add the following to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "prompt-optimizer": {
      "command": "npx",
      "args": ["prompt-ops-mcp"]
    }
  }
}
```

### Direct Usage

```bash
# Run the server
npx prompt-ops-mcp

# Or if installed globally
prompt-ops-mcp
```

## How It Works: Two-Turn Optimization

The prompt optimizer uses a simple two-turn approach:

1. **Turn 1**: Provide your original prompt → Receive optimization guidelines
2. **Turn 2**: Provide the optimized prompt → Get it ready for use

### Available Tool: `promptenhancer`

**Parameters:**
- `originalPrompt`: The prompt you want to optimize (for Turn 1)
- `optimizedPrompt`: The optimized prompt created by following the guidelines (for Turn 2)

**Example Usage (Turn 1):**
```
@prompt-ops promptenhancer {"originalPrompt": "Write a Python function to calculate fibonacci numbers"}
```

**Example Usage (Turn 2):**
```
@prompt-ops promptenhancer {"optimizedPrompt": "Your optimized prompt here..."}
```

## Optimization Guidelines

The meta-prompting framework includes guidance for:

1. **Clarifying Intent and Scope**: Making implicit requirements explicit
2. **Adding Structure and Organization**: Breaking complex requests into clear sections
3. **Enhancing with Reasoning Elements**: Including step-by-step thinking instructions
4. **Providing Context and Examples**: Adding relevant background information
5. **Setting Quality Standards**: Defining success criteria and constraints

## Example Transformation

See [example-two-turn.md](example-two-turn.md) for a complete example of the two-turn optimization process.

## Development

### Setup

```bash
git clone <repository-url>
cd prompt-ops-mcp
npm install
```

### Development Scripts

```bash
# Run in development mode
npm run dev

# Build the project
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Format code
npm run format
```

### Project Structure

```
src/
├── index.ts              # Main MCP server implementation
├── prompt-optimizer.ts   # Core prompt optimization logic
└── types.ts             # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run `npm run lint` and `npm run format`
6. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/yourusername/prompt-ops-mcp/issues)
- Discussions: [Join the discussion](https://github.com/yourusername/prompt-ops-mcp/discussions)

## Changelog

### v1.0.0
- Initial release with two-turn prompt optimization
- Full MCP integration support 