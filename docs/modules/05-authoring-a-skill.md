# 05 - Authoring Your Own Gemini Skills (Superpowers)

This module is for advanced users who want to extend Gemini's capabilities by creating custom "Skills" (often referred to as "Superpowers"). Learning to author skills allows you to integrate Gemini with any tool, API, or custom logic, making it an indispensable part of your development workflow.

## 1. Understanding Skill Anatomy

A Gemini Skill is typically a self-contained unit that includes:

*   **Skill Directory:** A folder containing all skill-related files.
*   **`SKILL.md` (Manifest):** A Markdown file that acts as the skill's manifest. It describes the skill, its purpose, how it's invoked, and any parameters it accepts. This is how Gemini discovers and understands your skill.
*   **Scripts/Executables:** The actual logic of the skill, often implemented as shell scripts, Python scripts, or other executables, which Gemini will run when the skill is invoked.
*   **Tool Definitions (Optional):** If your skill wraps an external tool, you might define how Gemini interacts with that tool.

## 2. The `SKILL.md` Manifest

The `SKILL.md` is crucial. It needs to clearly communicate:

*   **Skill Name:** A unique identifier.
*   **Description:** What the skill does.
*   **Usage:** How to invoke the skill, including command-line examples.
*   **Parameters:** Any arguments the skill accepts, with descriptions and types.
*   **Output:** What the skill returns.
*   **When to Use:** Contextual guidance for when Gemini should activate the skill.

Here's a simplified example of what a `SKILL.md` might contain:

```markdown
# my-first-skill
# A simple skill that echoes a message back to the user.
# ============================================

## When to Use

- When the user explicitly asks to "echo" a message.
- For demonstrating basic skill invocation.

## Usage

```
Tool: my-first-skill
Arguments:
  message: <string to echo>
```

## Parameters

*   `message` (string, required): The text message to be echoed.

## Output

The skill prints the provided message to standard output.
```

## 3. Implementing the Skill Logic

The "Scripts/Executables" are where the real work happens. For a simple skill, this might be a single shell or Python script.

**Example: `scripts/echo-message.sh`**

```bash
#!/bin/bash
# scripts/echo-message.sh

# Get the 'message' argument from the skill invocation context
# (Actual mechanism varies by Gemini CLI implementation, but this is illustrative)
MESSAGE=$1 # Assuming the first argument is the message

if [ -z "$MESSAGE" ]; then
  echo "Error: No message provided." >&2
  exit 1
fi

echo "Echoing: $MESSAGE"
```

## 4. Skill Discovery and Invocation

Once your skill is defined (i.e., the `SKILL.md` and associated scripts are in place), Gemini's runtime environment needs to discover it. Typically, this involves placing your skill directory in a designated `skills` folder (e.g., `~/.codex/skills/` or similar).

When you then make a request to Gemini that matches the "When to Use" criteria or explicitly invoke the skill, Gemini will execute the associated scripts with the provided arguments.

## Next Steps

Head over to the exercise to create and test your very first Gemini skill!
*   `docs/exercises/05-authoring-a-skill/` (to be created)