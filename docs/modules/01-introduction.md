# 01 - Introduction to Gemini CLI Capabilities

This module expands on the foundational concepts introduced in `GETTING_STARTED.md`, providing a deeper dive into the core capabilities and interaction patterns of the Gemini CLI.

## Understanding Gemini's Role

The Gemini CLI is designed to be an intelligent coding partner. It can assist with a variety of tasks, including:

*   **Code Generation:** Writing new functions, classes, or even entire scripts based on your natural language prompts.
*   **Code Refactoring:** Improving existing code for readability, performance, or adherence to best practices.
*   **Debugging Assistance:** Helping identify and suggest fixes for bugs in your code.
*   **Code Explanation:** Providing clear explanations for complex code snippets.
*   **Test Generation:** Creating unit tests for your functions or modules.

## Key Interaction Patterns

Interacting with Gemini typically involves the following steps:

1.  **Define Your Goal:** Clearly articulate what you want Gemini to do. The more specific your prompt, the better the result.
2.  **Provide Context:** If Gemini needs to operate on existing code, make sure to provide the relevant files or code snippets.
3.  **Execute the Command:** Use the appropriate Gemini CLI command (e.g., `gemini generate`, `gemini refactor`) with your prompt and context.
4.  **Review and Refine:** Always review Gemini's output. It might be perfect, or it might require slight adjustments from you, or further iteration with Gemini.

## Crafting Effective Prompts

The quality of Gemini's output heavily depends on the quality of your input. Here are some tips for crafting effective prompts:

*   **Be Specific:** Instead of "write a function," try "write a Python function named `calculate_area` that takes `length` and `width` as arguments and returns their product."
*   **Specify Language/Framework:** Clearly state the programming language, framework, or library you are working with.
*   **Provide Constraints:** Mention any constraints or requirements, such as "make it efficient," "handle edge cases for negative numbers," or "follow PEP 8 style guidelines."
*   **Example-Based Prompting:** Sometimes, providing an example of desired input/output can be very effective.

## Next Steps

Head over to the exercises to put these concepts into practice!
*   `docs/exercises/01-basic-usage/`