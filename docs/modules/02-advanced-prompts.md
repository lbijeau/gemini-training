# 02 - Advanced Prompting Techniques

This module explores advanced techniques for crafting prompts that yield more accurate, nuanced, and powerful results from the Gemini CLI. Mastering these techniques will significantly enhance your efficiency and the quality of the generated code.

## 1. Zero-Shot vs. Few-Shot Prompting

*   **Zero-Shot Prompting:** This is what we've been doing so far. You ask Gemini to perform a task without providing any examples. It's effective for simple, common tasks.
    *   *Example:* "Write a Python function to sort a list of numbers."

*   **Few-Shot Prompting:** For more complex or specific tasks, you can provide one or more examples within your prompt to guide Gemini's output. This is a powerful way to get the exact format or style you need.
    *   *Example:*
        ```
        I want to refactor my code to use a specific style.

        # Original Code (before)
        def my_func(data):
            result = []
            for item in data:
                if item > 10:
                    result.append(item * 2)
            return result

        # Refactored Code (after)
        def my_func(data):
            return [item * 2 for item in data if item > 10]

        ---

        Now, refactor the following function in the same style:

        # My function to refactor
        def process_users(users):
            active_users = []
            for user in users:
                if user.is_active:
                    active_users.append(user.name)
            return active_users
        ```

## 2. Role-Based Prompting

You can assign a "role" or "persona" to Gemini to influence the tone, style, and focus of its response. This is particularly useful for code explanation or documentation tasks.

*   *Example:* "You are an expert security analyst. Review this function for potential vulnerabilities and explain any risks you find in simple terms."
*   *Example:* "Act as a senior software architect. Propose three different design patterns to solve this problem and list the pros and cons of each."

## 3. Chain of Thought (CoT) Prompting

For complex reasoning tasks, you can ask Gemini to "think step by step." This forces it to break down the problem and explain its reasoning process, often leading to more accurate results.

*   *Example:* "I need to optimize this function. First, explain the current time complexity. Second, identify the bottleneck. Third, propose a more efficient algorithm and explain why it's better. Finally, write the optimized code."

## 4. Structuring Your Prompt for Clarity

Use formatting like Markdown headers, lists, and code blocks within your prompt to make it easier for Gemini to understand the structure of your request.

*   **Use Delimiters:** Use clear delimiters like `---`, `###`, or ``` to separate different parts of your prompt (e.g., instructions, example code, your code).
*   **Be Explicit:** Clearly label different sections of your prompt (e.g., `# Instructions`, `# My Code`, `# Expected Output`).

By combining these techniques, you can guide Gemini to produce highly specific and accurate results, turning it into a much more powerful and reliable coding partner.

## Next Steps

Head over to `docs/exercises/02-advanced-prompting/` to practice these advanced techniques.