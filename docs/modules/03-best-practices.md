# 03 - Best Practices for Working with Gemini

This module provides a summary of best practices and a recommended workflow to help you get the most out of the Gemini CLI. Adopting these habits will improve the quality of generated code, increase your efficiency, and foster a more effective partnership with the AI.

## The "Review, Refine, Re-prompt" Workflow

Treat Gemini as a collaborator, not an infallible oracle. The most effective workflow is an iterative cycle of communication and refinement.

1.  **Review:** Always start by carefully reviewing the code or explanation Gemini provides.
    *   Does it correctly solve the problem?
    *   Does it adhere to your project's conventions and style?
    *   Are there any potential bugs or edge cases it missed?
    *   Is it secure and performant?

2.  **Refine:** If the output isn't perfect, make small manual edits. Often, Gemini gets you 90% of the way there, and a quick fix is the most efficient next step. Don't be afraid to correct the AI's work.

3.  **Re-prompt:** If the output is significantly off-track or requires major changes, go back to your prompt.
    *   How can you make your request clearer?
    *   Should you provide more context?
    *   Would a "few-shot" example or a different "role" help? (See Module 02)
    *   Can you break the problem into smaller, more manageable steps for Gemini?

This iterative loop is the key to successful collaboration with any AI code assistant.

## General Best Practices

*   **Start Small:** For complex tasks, don't ask Gemini to write the entire application at once. Break the problem down into smaller functions or components and have Gemini build them one by one. This makes it easier to review and debug.

*   **Trust, but Verify:** Never blindly copy-paste code from Gemini into a production environment. Always test the code thoroughly, just as you would with code written by a human colleague.

*   **Provide Clean Context:** Gemini's performance is highly dependent on the context you provide. Ensure the files you're working on are clean and well-structured. Remove irrelevant comments or code that might confuse the AI.

*   **Use as a Learning Tool:** If Gemini generates a piece of code you don't understand, ask it to explain it to you! Use prompts like, "Explain this regular expression," or "What is the time complexity of this function you just wrote?"

*   **Version Control is Your Friend:** Always work in a `git` repository. This gives you a safety net. If Gemini makes an undesirable change, you can easily view the diff and revert it.

*   **Combine with Your Own Expertise:** Gemini is a powerful tool, but it's a supplement to, not a replacement for, your own skills and judgment. Use it to automate tedious tasks, brainstorm ideas, and learn new patterns, but always apply your own expertise to the final product.

By following these best practices, you can make Gemini a valuable and productive member of your development team.