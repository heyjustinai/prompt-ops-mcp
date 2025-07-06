# Cursor Integration Example

This document shows how to integrate the Prompt Ops MCP with Cursor.

## Setup

1. **Install the package globally:**
   ```bash
   npm install -g prompt-ops-mcp
   ```

2. **Configure Cursor MCP settings:**
   
   Open Cursor settings and add the MCP server configuration:
   
   ```json
   {
     "mcpServers": {
       "prompt-optimizer": {
         "command": "prompt-ops-mcp"
       }
     }
   }
   ```

3. **Alternative: Use npx (no global install required):**
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

## Usage Examples

### 1. Two-Turn Prompt Optimization

#### Turn 1: Request Optimization Guidelines

**MCP Tool Call:**
```json
{
  "tool": "promptenhancer",
  "parameters": {
    "originalPrompt": "Write a function"
  }
}
```

**Result:**
The tool will return comprehensive optimization guidelines covering:
- Clarifying intent and scope
- Adding structure and organization
- Enhancing with reasoning elements
- Providing context and examples
- Setting quality standards

#### Turn 2: Submit Optimized Prompt

**MCP Tool Call:**
```json
{
  "tool": "promptenhancer",
  "parameters": {
    "optimizedPrompt": "Your enhanced prompt following the guidelines"
  }
}
```

**Result:**
The tool will return the final optimized prompt ready for use.

## Best Practices

1. **Follow the two-turn process:**
   - First turn: Get optimization guidelines
   - Second turn: Submit your optimized prompt

2. **Apply all relevant guidelines:**
   - Make implicit requirements explicit
   - Add clear structure and organization
   - Include step-by-step reasoning elements
   - Provide context and examples where helpful
   - Set clear quality standards

3. **Focus on clarity and completeness:**
   - Be specific about requirements
   - Include expected outputs
   - Address potential edge cases
   - Specify validation criteria

## Troubleshooting

### Server Not Starting
- Ensure Node.js 18+ is installed
- Check that the package is installed correctly
- Verify MCP configuration syntax

### Tool Not Available
- Restart Cursor after configuration changes
- Check MCP server logs for errors
- Verify the command path is correct

### Poor Optimization Results
- Follow all the guidelines provided in Turn 1
- Include more context in your original prompt
- Be explicit about requirements and expectations 