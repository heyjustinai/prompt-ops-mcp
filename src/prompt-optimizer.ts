import type { OptimizePromptArgs, OptimizationResult } from './types.js';

export class PromptOptimizer {
  private readonly metaTemplate = `You are an expert prompt engineer. Your task is to transform the following basic prompt into a comprehensive, well-structured prompt that will produce high-quality results.

**Original Prompt**: "{{ORIGINAL_PROMPT}}"

**Optimization Guidelines**:

1. **Clarify Intent and Scope**
   - Identify the core objective
   - Make implicit requirements explicit
   - Add any missing context or constraints
   - Specify expected deliverables

2. **Add Structure and Organization**
   - Break complex requests into clear sections or steps
   - Use headings and bullet points for clarity
   - Specify the desired output format
   - Add logical flow and progression

3. **Enhance with Reasoning Elements**
   - Include instructions for step-by-step thinking
   - Add validation or verification steps
   - Request explanations for key decisions
   - Incorporate error handling where relevant

4. **Provide Context and Examples**
   - Add relevant background information
   - Include example inputs/outputs if helpful
   - Specify edge cases to consider
   - Define any technical terms or requirements

5. **Set Quality Standards**
   - Define success criteria
   - Specify any constraints or limitations
   - Add performance or quality requirements
   - Include testing or validation steps

**Instructions**: 
Transform the original prompt by applying ALL relevant optimization guidelines above. Create a prompt that is:
- Clear and unambiguous
- Comprehensive yet concise
- Structured for easy understanding
- Actionable with specific requirements

**IMPORTANT**: Return ONLY the optimized prompt itself, without any explanations, meta-commentary, or markdown code blocks. The response should be the exact prompt text that will be used.`;

  async optimizePrompt(args: OptimizePromptArgs): Promise<OptimizationResult> {
    // First turn: User provides original prompt
    if (args.originalPrompt && !args.optimizedPrompt) {
      const metaPrompt = this.metaTemplate.replace('{{ORIGINAL_PROMPT}}', args.originalPrompt);
      
      return {
        content: metaPrompt,
        isComplete: false,
        type: 'meta-template'
      };
    }
    
    // Second turn: LLM provides optimized prompt
    if (args.optimizedPrompt) {
      return {
        content: args.optimizedPrompt,
        isComplete: true,
        type: 'optimized-prompt'
      };
    }
    
    // Invalid state
    return {
      content: 'Please provide either an originalPrompt to optimize or an optimizedPrompt to use.',
      isComplete: true,
      type: 'meta-template'
    };
  }
} 