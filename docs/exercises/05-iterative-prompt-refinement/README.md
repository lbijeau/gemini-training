# Exercise 05: Iterative Prompt Refinement - The "Review, Refine, Re-prompt" Cycle

## Objective

This exercise will guide you through the "Review, Refine, Re-prompt" workflow, a crucial best practice for effectively collaborating with Gemini. You will start with a general prompt, evaluate Gemini's response, and then refine your prompt to get closer to the desired outcome.

## Scenario

You need Gemini to write a Python function that calculates the nth Fibonacci number. You'll start with a basic request and then iteratively improve it.

## Instructions

### Step 1: Initial (General) Prompt

1.  **Create an empty file** for Gemini to write into:
    ```bash
    touch practice/fibonacci.py
    ```

2.  **Ask Gemini to write the function with a general prompt:**
    ```bash
    gemini "Write a Python function to calculate the nth Fibonacci number. Place it in a new file named `practice/fibonacci.py`."
    ```

3.  **Review the output (First Iteration):**
    Examine `practice/fibonacci.py`.
    *   Does it use recursion or iteration?
    *   Does it handle edge cases (e.g., `n=0`, `n=1`) correctly?
    *   Is it efficient?

### Step 2: Refine Prompt (Add Constraints/Requirements)

Let's assume Gemini's first attempt was recursive and you wanted an iterative solution for efficiency.

1.  **Modify your prompt** to add this constraint. You might also ask it to include documentation.
    ```bash
    gemini "In the file `practice/fibonacci.py`, please replace the existing function with a new, *iterative* version that calculates the nth Fibonacci number. Also, include a docstring explaining the function, its parameters, and what it returns."
    ```
    *Note: By explicitly telling Gemini to modify the file, you guide it to perform an in-place edit.*

2.  **Review the output (Second Iteration):**
    Check `practice/fibonacci.py` again. Has it addressed your new requirements? Is it iterative? Does it have a docstring?

### Step 3: Re-prompt (Address Specific Issues/Edge Cases)

Let's say the iterative solution is good, but you realize it doesn't handle negative input or you want a specific type hint.

1.  **Modify your prompt further.**
    ```bash
    gemini "Refine the existing function in `practice/fibonacci.py`. Ensure it raises a ValueError if 'n' is a negative number and add type hints for the 'n' parameter (int) and the return value (int)."
    ```

2.  **Review the output (Final Iteration):**
    Verify the updated `practice/fibonacci.py`. Does it handle negative numbers? Are the type hints present?

## Expected Outcome

By following this iterative process, you should end up with a robust, well-documented, and efficient `fibonacci` function tailored to your specific requirements. This demonstrates the power of guiding Gemini through successive refinements.

## Troubleshooting Tips

*   Don't be afraid to be very specific in your prompts.
*   If Gemini struggles with a complex request, try breaking it down into smaller, simpler requests.
*   Always inspect the generated code critically.

Good luck!