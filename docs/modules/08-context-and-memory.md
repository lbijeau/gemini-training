# 08 - Context and Memory: Configuring Gemini's Brain

Gemini isn't just a stateless chat bot; it has a memory system that you can configure to make it smarter about your specific project.

## Hierarchical Memory (`GEMINI.md`)

When you start a session, Gemini looks for files named `GEMINI.md` in the following locations:
1.  Your home directory (Global context).
2.  Your project root.
3.  Every subdirectory down to your current working directory.

It concatenates these files together to form its "System Instructions." This means you can have broad rules for all projects, specific rules for one repo, and even more specific rules for a `src/backend/` folder.

## Managing Memory Interactively

*   **`/memory show`**: Prints the exact context Gemini is currently using.
*   **`/memory add <text>`**: Temporarily adds a thought or rule to the current session's memory.
*   **`/memory refresh`**: Reloads all `GEMINI.md` files from disk. Use this after you edit a context file.

## Why use `GEMINI.md`?

*   **Style Guides:** "Always use TypeScript." "Prefer functional programming."
*   **Architecture:** "This project uses a Hexagonal Architecture."
*   **Role:** "You are a Senior SRE. Be paranoid about failure modes."

## Interactive Context (`/chat`)

Don't forget that `/chat save` and `/chat resume` (Module 06) interact with this. Saving a chat saves the *conversation history*, while `GEMINI.md` provides the *instructions*.

## Next Steps

Head to the exercise to define your project's personality.
*   **[Exercise 08: Context Mastery with GEMINI.md](../exercises/08-context-mastery/README.md)**