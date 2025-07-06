# Two-Turn Prompt Optimization Example

This shows how the simplified prompt-ops-mcp tool works using a two-turn approach.

## How It Works

1. **Turn 1**: Provide your original prompt → Receive optimization guidelines
2. **Turn 2**: Provide the optimized prompt → Get it ready for use

## Example Session

### Turn 1: Request Optimization

**User:**
```
@prompt-ops promptenhancer {"originalPrompt": "Write a Python function to calculate fibonacci numbers"}
```

**Tool Response:**
```
You are an expert prompt engineer. Your task is to transform the following basic prompt into a comprehensive, well-structured prompt that will produce high-quality results.

**Original Prompt**: "Write a Python function to calculate fibonacci numbers"

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

**IMPORTANT**: Return ONLY the optimized prompt itself, without any explanations, meta-commentary, or markdown code blocks. The response should be the exact prompt text that will be used.
```

### Turn 2: Submit Optimized Prompt

**User (after LLM optimizes):**
```
@prompt-ops promptenhancer {
  "optimizedPrompt": "Create a Python function to calculate Fibonacci numbers with the following specifications:\n\n**Function Requirements**:\n- Function name: `calculate_fibonacci`\n- Input: Single integer `n` (position in Fibonacci sequence, where n >= 0)\n- Output: The nth Fibonacci number\n- Use iterative approach for O(n) time complexity\n\n**Implementation Steps**:\n1. First, validate the input:\n   - Check if n is an integer\n   - Check if n >= 0\n   - Raise appropriate errors for invalid inputs\n\n2. Handle base cases:\n   - If n = 0, return 0\n   - If n = 1, return 1\n\n3. For n > 1, implement iterative calculation:\n   - Initialize two variables for the previous two Fibonacci numbers\n   - Iterate from 2 to n, updating the values\n   - Return the final result\n\n**Code Structure**:\n```python\ndef calculate_fibonacci(n: int) -> int:\n    # Input validation\n    # Base cases\n    # Iterative calculation\n    # Return result\n```\n\n**Testing Requirements**:\n- Include docstring with function description and examples\n- Handle edge cases: fibonacci(0) = 0, fibonacci(1) = 1\n- Test with typical values: fibonacci(5) = 5, fibonacci(10) = 55\n- Verify error handling for negative numbers and non-integer inputs\n\n**Performance Considerations**:\n- Time complexity should be O(n)\n- Space complexity should be O(1)\n- Consider adding memoization for repeated calls (optional enhancement)\n\nProvide the complete implementation with comprehensive error handling and clear comments explaining each step."
}
```

**Tool Response (Final):**
```
Create a Python function to calculate Fibonacci numbers with the following specifications:

**Function Requirements**:
- Function name: `calculate_fibonacci`
- Input: Single integer `n` (position in Fibonacci sequence, where n >= 0)
- Output: The nth Fibonacci number
- Use iterative approach for O(n) time complexity

**Implementation Steps**:
1. First, validate the input:
   - Check if n is an integer
   - Check if n >= 0
   - Raise appropriate errors for invalid inputs

2. Handle base cases:
   - If n = 0, return 0
   - If n = 1, return 1

3. For n > 1, implement iterative calculation:
   - Initialize two variables for the previous two Fibonacci numbers
   - Iterate from 2 to n, updating the values
   - Return the final result

**Code Structure**:
```python
def calculate_fibonacci(n: int) -> int:
    # Input validation
    # Base cases
    # Iterative calculation
    # Return result
```

**Testing Requirements**:
- Include docstring with function description and examples
- Handle edge cases: fibonacci(0) = 0, fibonacci(1) = 1
- Test with typical values: fibonacci(5) = 5, fibonacci(10) = 55
- Verify error handling for negative numbers and non-integer inputs

**Performance Considerations**:
- Time complexity should be O(n)
- Space complexity should be O(1)
- Consider adding memoization for repeated calls (optional enhancement)

Provide the complete implementation with comprehensive error handling and clear comments explaining each step.
```

## Key Benefits

1. **Simple**: Just 2 turns instead of 4 steps
2. **Flexible**: The LLM can apply its full capabilities
3. **Transparent**: You see exactly how the prompt is optimized
4. **Efficient**: No session management or state tracking needed

## Usage in Cursor

1. Call the tool with your original prompt
2. The LLM will receive the optimization guidelines and create an optimized version
3. Call the tool again with the optimized prompt
4. The LLM will execute the optimized prompt

This leverages Cursor's LLM to do the optimization work while the tool provides structured guidance. 