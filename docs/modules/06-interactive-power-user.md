# 06 - Interactive Power User: Slash and At Commands

While prompts are the primary way to interact with the Gemini model, the Gemini CLI offers a rich "operating system" of built-in commands to manage your session, context, and environment. Mastering these tools distinguishes a casual user from a power user.

## 1. Slash Commands (`/`) - Controlling the Environment

Slash commands provide meta-level control over the CLI itself. They don't go to the LLM; they tell the CLI to *do* something.

### Key Commands

*   **`/chat`**: Manage your conversation history.
    *   `/chat save <tag>`: Save the current state (e.g., before trying a risky refactor).
    *   `/chat resume <tag>`: Jump back to that saved state.
    *   `/chat list`: See your saved checkpoints.
*   **`/clear`**: Clears the screen (like `Ctrl+L`), but keeps the session history active.
*   **`/memory`**: Manage the AI's "long-term" instruction context.
    *   `/memory show`: See exactly what `GEMINI.md` context files are currently loaded.
    *   `/memory refresh`: Force a reload if you've edited a `GEMINI.md` file.
*   **`/model`**: Open a dialog to switch models mid-session (e.g., switch to a faster model for simple tasks, or a stronger one for complex reasoning).
*   **`/settings`**: Open an interactive settings editor.

### Why use them?
Imagine you are about to ask Gemini to rewrite a massive file. Run `/chat save before-rewrite`. If the result is bad, you don't just undo the file changes—you can run `/chat resume before-rewrite` to wipe the *context* of that bad attempt from the AI's memory, ensuring it doesn't get confused by its own previous mistake.

## 2. At Commands (`@`) - Context Injection

The most precise way to give Gemini context is with the `@` symbol. This explicitly injects file content into the prompt.

*   **`@path/to/file`**: Reads the file and adds it to the prompt.
*   **`@path/to/directory/`**: Recursively reads files in that directory (respecting `.gitignore`).

### Pro Tip: The "Lone At" (`@`)
If you type just `@` (without a path), it passes your prompt raw to the model. This is useful if you are talking *about* the `@` symbol itself and don't want the CLI to try and interpret it as a file path.

### Example Workflow

Instead of:
> "Look at the utils.py file and fix the bug."

Use:
> "Analyze @src/utils.py. I am getting a ZeroDivisionError in the calculate_ratio function. Propose a fix."

This guarantees the AI sees exactly what you want it to see.

## 3. Shell Mode (`!`)

Sometimes you need to run a system command without leaving the CLI.

*   **`!ls -la`**: Runs the `ls` command and prints the output.
*   **`!git status`**: Checks your git status.

This is invaluable for verifying that Gemini's changes actually worked (e.g., running `!pytest` immediately after a refactor).

## Next Steps

Head to the exercise to practice this "Power User" workflow.
*   `docs/exercises/07-interactive-mastery/` (to be created)