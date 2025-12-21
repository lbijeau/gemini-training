# 07 - Custom Commands: Automating Your Workflow

If you find yourself typing the same long prompt over and over (e.g., "Review this code for style compliance with PEP8..."), you can automate it using **Custom Commands**.

## What is a Custom Command?

A custom command is a shortcut (like `/review`) that expands into a full, complex prompt. It can also accept arguments and execute shell commands.

## Where do they live?

Custom commands are defined in TOML files.
*   **Global:** `~/.gemini/commands/` (Available everywhere)
*   **Project:** `.gemini/commands/` (Available only in this project—great for team standards!)

## The TOML Format

A simple command file `my-command.toml` looks like this:

```toml
description = "A brief description of what this does."
prompt = """
You are an expert.
Please perform task X on this input: {{args}}
"""
```

## Advanced Features

### 1. Argument Injection (`{{args}}`)
Anything you type after the command (e.g., `/my-command script.py`) is injected into the `{{args}}` placeholder.

### 2. Shell Execution (`!{...}`)
You can run shell commands *inside* your prompt generation.

```toml
prompt = """
Summarize the changes in this git diff:
!{git diff --staged}
"""
```
When you run this, Gemini CLI executes `git diff --staged`, pastes the output into the prompt, and *then* sends it to the AI. This is incredibly powerful for context-aware automation.

### 3. File Injection (`@{...}`)
You can also inject file contents automatically.

```toml
prompt = """
Review the code in {{args}} against our style guide:
@{docs/style-guide.md}
"""
```

## Next Steps

Head to the exercise to build your own custom command.
*   [Exercise 08: Creating a Custom Command](../exercises/08-creating-custom-commands/README.md)