# 04 - Extensions: Expanding Gemini's Capabilities

This module introduces **Gemini Extensions**. Extensions are the mechanism for adding new capabilities, tools, and workflows to the Gemini CLI. You might hear the community refer to these as "Superpowers," but "Extensions" is the official term.

## What is an Extension?

An Extension is a package that enhances Gemini with:
1.  **Tools:** New functions Gemini can execute (like generating images, querying a database, or rendering diagrams).
2.  **Context:** Persistent instructions (`GEMINI.md`) specific to that extension.
3.  **Commands:** Custom shortcuts.

Think of Extensions like browser plugins. They transform Gemini from a text generator into a versatile automation platform.

## How Extensions Work

When you install an extension, Gemini gains access to its **Tools**. When you ask Gemini to do something (e.g., "Create a logo"), it checks its available tools to see if any of them can fulfill your request.

*   **Intent Recognition:** Gemini analyzes your prompt.
*   **Tool Selection:** If your prompt matches a tool's capability (e.g., the `generate_image` tool from an Asset Generator extension), Gemini selects it.
*   **Execution:** Gemini runs the tool and returns the result (the image).

## Example: The Asset Generator

We've used an extension already! When we generated the logo for this repository, we were using an extension that provided an `asset-generator` tool.

*   **You asked:** "Generate a logo..."
*   **Gemini thought:** "I have a tool that generates images. I will use it."
*   **Gemini executed:** The tool created `logo.png`.

## Managing Extensions

You can manage extensions using the `gemini extensions` command group.

*   `gemini extensions list`: See what you have installed.
*   `gemini extensions add <path>`: Install a local extension.
*   `gemini extensions remove <name>`: Uninstall an extension.

## Next Steps

In the next exercise, you will use an installed extension to perform a task. Later, in Module 05, you will learn how to build your own!
*   `docs/exercises/04-using-extensions/` (to be created)