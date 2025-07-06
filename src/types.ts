export interface OptimizePromptArgs {
  originalPrompt?: string;
  optimizedPrompt?: string;
}

export interface OptimizationResult {
  content: string;
  isComplete: boolean;
  type: 'meta-template' | 'optimized-prompt';
} 