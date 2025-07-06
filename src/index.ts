#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import { PromptOptimizer } from './prompt-optimizer.js';
import type { OptimizePromptArgs } from './types.js';

// Input validation schema
const OptimizePromptArgsSchema = z.object({
  originalPrompt: z.string().optional(),
  optimizedPrompt: z.string().optional(),
});

class PromptOptimizerServer {
  private server: Server;
  private optimizer: PromptOptimizer;

  constructor() {
    this.server = new Server(
      {
        name: 'prompt-ops-mcp',
        version: '1.0.0',
      }
    );

    this.optimizer = new PromptOptimizer();
    this.setupToolHandlers();
  }

  private setupToolHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'promptenhancer',
            description: `A prompt optimization tool that guides you through transforming basic prompts into comprehensive, well-structured prompts.

How it works:
1. First call: Provide an originalPrompt to receive optimization guidelines
2. The LLM follows the guidelines to create an optimized version
3. Second call: Provide the optimizedPrompt to get it ready for use

This tool uses a meta-prompting approach where the LLM does the actual optimization work.`,
            inputSchema: {
              type: 'object',
              properties: {
                originalPrompt: {
                  type: 'string',
                  description: 'The original prompt you want to optimize',
                },
                optimizedPrompt: {
                  type: 'string',
                  description: 'The optimized prompt created by following the guidelines',
                },
              },
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
        case 'promptenhancer': {
          const validatedArgs = OptimizePromptArgsSchema.parse(args);
          const result = await this.optimizer.optimizePrompt(validatedArgs as OptimizePromptArgs);
            
          return {
            content: [
              {
                type: 'text',
                text: result.content,
              },
            ],
          };
        }

        default:
          throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Invalid parameters: ${error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`
          );
        }
        throw error;
      }
    });
  }

  async start(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Prompt Ops MCP server started - Two-turn optimization ready');
  }
}

// Start the server
const server = new PromptOptimizerServer();
server.start().catch(console.error); 