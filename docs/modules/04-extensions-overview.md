# 04 - Extensions Overview: Expanding Gemini's Capabilities

This module introduces **Gemini Extensions**. Extensions are the mechanism for adding new capabilities, tools, and workflows to the Gemini CLI. They allow Gemini to interact with external systems, APIs, and your local environment in ways that the base model cannot.

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

## Under the Hood: How It Works

For the technically curious, Gemini uses the **Model Context Protocol (MCP)** to standardize these interactions.

1.  **Discovery:** When Gemini starts, it reads the `gemini-extension.json` manifests of all installed extensions. It builds a catalog of available tools (e.g., `asset-generator:generate_image`, `database:query`).
2.  **Context Injection:** A condensed list of these tools (names and descriptions) is invisibly injected into the system prompt. This tells the LLM, "You have these tools available."
3.  **The Handshake:** When you ask for an image, the LLM outputs a structured "Tool Call" request instead of plain text.
4.  **The Bridge:** The Gemini CLI intercepts this request, runs the corresponding code in the Extension (which runs as a separate process), and feeds the result back to the LLM.
5.  **Security:** Extensions run locally on your machine. You explicitly install them, giving you control over what capabilities your AI has access to.

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
*   **[Exercise 04: Using an Extension](../exercises/04-using-extensions/README.md)**