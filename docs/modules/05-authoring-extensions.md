# 05 - Authoring Gemini Extensions

Advanced users can extend the capabilities of the Gemini CLI by creating **Extensions**. Extensions are packages that can add new Tools (via MCP Servers), Custom Commands, and specialized Context (`GEMINI.md`).

## What is an Extension?

An extension is a directory containing a `gemini-extension.json` manifest file. It packages functionality so it can be shared and installed.

## Key Components

1.  **Manifest (`gemini-extension.json`)**: Describes the extension and how to run it.
2.  **MCP Servers**: Scripts (usually Node.js or Python) that implement the Model Context Protocol. This is how you give Gemini "Tools" like `fetch_url` or `query_database`.
3.  **Context (`GEMINI.md`)**: A Markdown file that provides persistent instructions to the model whenever the extension is active.

## The `gemini-extension.json` Format

```json
{
  "name": "my-cool-extension",
  "version": "1.0.0",
  "contextFileName": "GEMINI.md",
  "mcpServers": {
    "myServer": {
      "command": "node",
      "args": ["${extensionPath}/dist/index.js"],
      "cwd": "${extensionPath}"
    }
  }
}
```

*   **`mcpServers`**: Defines tools. Gemini starts these servers and communicates with them to execute actions.
*   **`${extensionPath}`**: A variable that resolves to the extension's installation directory.

## Tools vs. Skills vs. Superpowers

You might hear these terms used interchangeably. In the official Gemini CLI:
*   **Tools** are the atomic functions defined in MCP servers.
*   **Extensions** are the packages that contain Tools.
*   "Superpowers" is a community term often used to describe this extensibility.

## Developing an Extension

The CLI provides a scaffold command:
```bash
gemini extensions new <name> <template>
```
Common templates include `mcp-server` (for TypeScript/Node.js).

## Next Steps

Head to the exercise to manually scaffold a simple extension structure.
*   **[Exercise 06: Authoring Extensions](../exercises/06-authoring-extensions/README.md)**