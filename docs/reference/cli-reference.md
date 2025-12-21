# Gemini CLI Command Reference

This document provides a comprehensive reference for the Gemini CLI, based on its help output. The primary interaction model is a single, conversational entry point with flags to modify its behavior.

---

## Basic Usage

### Interactive Mode
To launch Gemini in a fully interactive CLI session, simply run the command without any arguments:
```bash
gemini
```

### One-Shot (Non-Interactive) Mode
To ask a single question and receive a response without entering an interactive session, provide your query as a positional argument:
```bash
gemini "your query here"
```
**Example:**
```bash
gemini "Write a Python function to calculate the square of a number and print it to the console."
```

---

## Key Options

These flags modify the CLI's behavior.

### Prompting and Interaction

*   `[query..]` (Positional Argument): The most common way to provide a prompt for non-interactive use.
*   `-i, --prompt-interactive <string>`: Executes the provided prompt and then enters an interactive session.
*   `-p, --prompt <string>` (**Deprecated**): An older way to provide a prompt. It is recommended to use the positional `[query..]` argument instead.

### Execution Control

*   `-s, --sandbox`: Runs the command in a sandbox environment for safety.
*   `-y, --yolo`: **(Use with caution)** Automatically accepts all actions without prompting for confirmation.
*   `--approval-mode <mode>`: Sets the approval behavior.
    *   `default`: Prompt for approval on actions.
    *   `auto_edit`: Automatically approve tools that only edit files.
    *   `yolo`: Automatically approve all tools.

### Session Management

*   `-r, --resume <session>`: Resumes a previous session. Use `"latest"` for the most recent session or a number from the session list.
*   `--list-sessions`: Lists all available sessions for the current project.
*   `--delete-session <session_index>`: Deletes a specific session by its index number.

### Model and Output

*   `-m, --model <string>`: Specifies the model to use for the session.
*   `-o, --output-format <format>`: Sets the format of the CLI output (`text`, `json`, or `stream-json`).

### Extensions and Tools

*   `-e, --extensions <list>`: A list of specific extensions to use for the session.
*   `-l, --list-extensions`: Lists all available extensions and exits.

---

## Commands

While the main interaction is the positional query, there are a few dedicated commands for management.

### `gemini mcp`
*   **Purpose:** Manage MCP (Multi-Capability Provider) servers.
*   **Usage:** `gemini mcp` (Further subcommands would be detailed by `gemini mcp --help`).

### `gemini extensions <command>`
*   **Purpose:** Manage Gemini CLI extensions.
*   **Usage:**
    ```bash
    # List all extensions
    gemini extensions list

    # (Other subcommands like 'add', 'remove' would be detailed by 'gemini extensions --help')
    ```

---
## Example Combining Options

Here's an example of a more complex, non-interactive command:
```bash
# Ask Gemini to refactor a file using a specific model and running in a sandbox
gemini -s -m "gemini-pro" "Please refactor the Python script in 'my_app/utils.py' to be more efficient. Specifically, optimize the 'process_data' function."
```