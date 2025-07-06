# Turn-Based Prompt Optimization Example

This shows how the prompt-ops-mcp tool works in a turn-based manner, using Cursor's built-in LLM to do the actual optimization work.

## Example Session

### Step 1: Start Optimization

**User:**
```
@prompt-ops optimize_prompt {"originalPrompt": "Write a Python function to calculate fibonacci numbers"}
```

**Tool Response:**
```
I'll help you optimize this prompt through a structured process. 

Original prompt: "Write a Python function to calculate fibonacci numbers"

Step 1 of 4: Analysis

Analyze this prompt and identify:
1. The core intent and objective
2. Any ambiguities or unclear aspects
3. Missing context or requirements
4. Implicit assumptions that should be made explicit

Provide a clear analysis of these aspects.

Current Progress: Step 1 of 4
Next Action: Provide your analysis of the prompt
```

### Step 2: Analysis Response

**User (guided by Cursor's LLM):**
```
@prompt-ops optimize_prompt {
  "optimizationStep": "Analysis: The core intent is to create a Python function that calculates Fibonacci numbers. Ambiguities include: 1) Which Fibonacci number to calculate (nth number or sequence?), 2) What input parameters are expected, 3) What should be returned, 4) Performance requirements, 5) Whether to handle edge cases like negative inputs. Missing context includes the use case, performance needs, and whether recursion or iteration is preferred.",
  "stepNumber": 1
}
```

**Tool Response:**
```
Step 2 of 4: clarify

Based on your analysis, rewrite the prompt to:
1. Eliminate ambiguities
2. Make the objective crystal clear
3. Add any missing context
4. Make implicit requirements explicit

Provide the clarified version of the prompt.

Current Progress: Step 2 of 4
Next Action: Provide the clarified prompt
```

### Step 3: Clarification Response

**User (guided by Cursor's LLM):**
```
@prompt-ops optimize_prompt {
  "optimizationStep": "Create a Python function named 'fibonacci' that takes a single integer parameter 'n' (where n >= 0) and returns the nth Fibonacci number. The function should handle edge cases for n=0 (return 0) and n=1 (return 1). For performance, use an iterative approach rather than recursion. The function should raise a ValueError for negative inputs.",
  "stepNumber": 2
}
```

**Tool Response:**
```
Step 3 of 4: structure

Now enhance the prompt with clear structure:
1. Add section headers if appropriate
2. Break down complex requests into steps
3. Specify the desired output format
4. Add any constraints or requirements

Provide the structured version of the prompt.

Current Progress: Step 3 of 4
Next Action: Provide the structured prompt
```

### Step 4: Structure Response

**User (guided by Cursor's LLM):**
```
@prompt-ops optimize_prompt {
  "optimizationStep": "**Task**: Create a Python function to calculate Fibonacci numbers\n\n**Function Specification**:\n- Name: `fibonacci`\n- Parameter: `n` (integer, n >= 0)\n- Returns: The nth Fibonacci number\n\n**Requirements**:\n1. Handle edge cases:\n   - If n = 0, return 0\n   - If n = 1, return 1\n2. Use iterative approach for efficiency\n3. Validate input:\n   - Raise ValueError for negative inputs\n   - Raise TypeError for non-integer inputs\n\n**Expected behavior**:\n- fibonacci(0) → 0\n- fibonacci(1) → 1\n- fibonacci(5) → 5\n- fibonacci(10) → 55",
  "stepNumber": 3
}
```

**Tool Response:**
```
Step 4 of 4: reasoning

Finally, enhance the prompt with chain-of-thought elements:
1. Add instructions for step-by-step reasoning
2. Include prompts for the model to explain its thinking
3. Add validation or self-checking steps
4. Ensure the prompt guides systematic problem-solving

Provide the final optimized prompt with chain-of-thought reasoning.

Current Progress: Step 4 of 4
Next Action: Provide the final optimized prompt
```

### Step 5: Final Optimization

**User (guided by Cursor's LLM):**
```
@prompt-ops optimize_prompt {
  "optimizationStep": "Create a Python function to calculate Fibonacci numbers following these steps:\n\n**Step 1: Understand the Problem**\nExplain what the Fibonacci sequence is and why an iterative approach is preferred over recursion.\n\n**Step 2: Function Specification**\n- Name: `fibonacci`\n- Parameter: `n` (integer, n >= 0) - the position in the Fibonacci sequence\n- Returns: The nth Fibonacci number\n\n**Step 3: Implementation Plan**\n1. First, validate the input (check type and range)\n2. Handle base cases (n=0 and n=1)\n3. For n>1, use iteration with two variables to track previous values\n4. Explain the time and space complexity of your solution\n\n**Step 4: Code Implementation**\nWrite the function with clear comments explaining each step.\n\n**Step 5: Testing and Validation**\n1. Test with edge cases: fibonacci(0), fibonacci(1)\n2. Test with typical cases: fibonacci(5), fibonacci(10)\n3. Test error handling: fibonacci(-1), fibonacci('string')\n4. Verify the results match expected Fibonacci sequence\n\n**Step 6: Optimization Analysis**\nExplain why your solution is efficient and discuss any potential improvements.",
  "stepNumber": 4
}
```

**Tool Response (Final):**
```
Create a Python function to calculate Fibonacci numbers following these steps:

**Step 1: Understand the Problem**
Explain what the Fibonacci sequence is and why an iterative approach is preferred over recursion.

**Step 2: Function Specification**
- Name: `fibonacci`
- Parameter: `n` (integer, n >= 0) - the position in the Fibonacci sequence
- Returns: The nth Fibonacci number

**Step 3: Implementation Plan**
1. First, validate the input (check type and range)
2. Handle base cases (n=0 and n=1)
3. For n>1, use iteration with two variables to track previous values
4. Explain the time and space complexity of your solution

**Step 4: Code Implementation**
Write the function with clear comments explaining each step.

**Step 5: Testing and Validation**
1. Test with edge cases: fibonacci(0), fibonacci(1)
2. Test with typical cases: fibonacci(5), fibonacci(10)
3. Test error handling: fibonacci(-1), fibonacci('string')
4. Verify the results match expected Fibonacci sequence

**Step 6: Optimization Analysis**
Explain why your solution is efficient and discuss any potential improvements.
```

## How It Works

1. **No External API Required**: The tool uses Cursor's built-in LLM to do the actual optimization work
2. **Turn-Based Interaction**: Each step guides the LLM through a specific aspect of optimization
3. **Progressive Enhancement**: The prompt gets better with each step:
   - Analysis → Understanding the problem
   - Clarification → Removing ambiguities
   - Structure → Organizing the request
   - Reasoning → Adding chain-of-thought elements
4. **Final Output**: A comprehensive, well-structured prompt ready for use

This approach leverages the LLM's capabilities while providing a structured framework for consistent, high-quality prompt optimization. 