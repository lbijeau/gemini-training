# Exercise 06: Authoring Your First Gemini Skill (Superpower)

## Objective

In this exercise, you will create a simple "echo" skill for Gemini, including its manifest (`SKILL.md`) and a basic shell script. This will demonstrate the fundamental steps involved in extending Gemini's capabilities.

## Scenario

You want Gemini to be able to "echo" a message back to you. This might seem trivial, but it's an excellent way to understand the mechanics of skill creation and invocation.

## Instructions

### Step 1: Create the Skill Directory

1.  **Create a new directory for your skill** within the `practice/` folder. This will simulate where your custom skills would live.
    ```bash
    mkdir -p practice/skills/my-echo-skill
    ```

### Step 2: Create the `SKILL.md` Manifest

1.  **Create the `SKILL.md` file** inside your new skill directory:
    ```bash
    touch practice/skills/my-echo-skill/SKILL.md
    ```

2.  **Add the following content** to `practice/skills/my-echo-skill/SKILL.md`:
    ```markdown
    # my-echo-skill
    # A simple skill that echoes a message back to the user.
    # ============================================

    ## When to Use

    - When the user explicitly asks Gemini to "echo" a specific message.
    - For demonstrating basic skill invocation and custom tool execution.

    ## Usage Example

    ```bash
    gemini "echo the message 'Hello from my custom skill!'"
    ```

    ## Parameters

    *   `message` (string, required): The text message to be echoed.

    ## Output

    The skill prints the provided message to standard output, prefixed with "Skill Output: ".
    ```

### Step 3: Implement the Skill Logic

1.  **Create a `scripts/` directory** inside your skill folder:
    ```bash
    mkdir -p practice/skills/my-echo-skill/scripts
    ```

2.  **Create an executable shell script** named `echo-message.sh` inside `practice/skills/my-echo-skill/scripts/`:
    ```bash
    touch practice/skills/my-echo-skill/scripts/echo-message.sh
    ```

3.  **Add the following content** to `practice/skills/my-echo-skill/scripts/echo-message.sh`:
    ```bash
    #!/bin/bash
    # scripts/echo-message.sh - Implements the echo skill logic

    # The skill's arguments are passed as command-line arguments to the script.
    # We expect the first argument to be the value of the 'message' parameter.
    MESSAGE="$1"

    if [ -z "$MESSAGE" ]; then
      echo "Error: Skill 'my-echo-skill' requires a 'message' parameter." >&2
      exit 1
    fi

    echo "Skill Output: $MESSAGE"
    ```

4.  **Make the script executable:**
    ```bash
    chmod +x practice/skills/my-echo-skill/scripts/echo-message.sh
    ```

### Step 4: Invoke Your New Skill

To run this skill, the `gemini-cli` must first be configured to discover it (e.g., by adding its path via `gemini extensions add ./practice/skills/my-echo-skill`).

Once registered, invoke it using a prompt that matches the "When to Use" criteria in your `SKILL.md`.

**Example Prompt:**
```bash
gemini "Please use the 'my-echo-skill' to echo the following message: 'This is my first custom skill!'"
```

**Expected Output (if invoked successfully):**
```
Skill Output: This is my first custom skill!
```

## Review and Learn

*   You've now created the basic components of a Gemini Skill.
*   The `SKILL.md` acts as the contract, defining how Gemini interacts with your logic.
*   The shell script is the implementation of that logic.

This exercise provides a foundation for developing more complex and powerful custom skills.

Good luck!