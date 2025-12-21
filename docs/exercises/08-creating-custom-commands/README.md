# Exercise 08: Creating a Custom Command

## Objective

In this exercise, you will create a project-specific custom command `/commit-msg` that automatically generates a Conventional Commit message based on your staged changes.

## Scenario

You hate writing commit messages. You want to just type `/commit-msg` and have Gemini look at your `git diff` and write it for you.

## Instructions

### Step 1: Create the Directory

Since we want this command to be available for this project (and shared with your team), we will create it in the project's `.gemini` folder.

```bash
mkdir -p .gemini/commands
```

### Step 2: Define the Command

Create a new file `.gemini/commands/commit-msg.toml`.

```bash
touch .gemini/commands/commit-msg.toml
```

Open this file and add the following content:

```toml
description = "Generates a Conventional Commit message from staged changes."

prompt = """
You are an expert developer.
Please write a Conventional Commit message (type: subject) for the following changes.
Be concise.

Changes:
!{git diff --staged}
"""
```

### Step 3: Test It

1.  Make a small change to a file (e.g., add a comment to `practice/hello_world_gemini.py`).
2.  Stage the change:
    ```bash
    git add practice/hello_world_gemini.py
    ```
3.  Start Gemini:
    ```bash
    gemini
    ```
4.  Run your new command:
    ```
    /commit-msg
    ```

### Expected Output

Gemini should see the diff (injected via `!{git diff --staged}`) and propose a commit message like:
`docs: Add comment to hello_world script`

## Review

You just built an automation tool!
1.  You defined a shortcut `/commit-msg`.
2.  You used `!{...}` to dynamically fetch system state (the git diff).
3.  You wrapped it in a prompt to guide the AI.

This command is now part of your project and can be used by anyone who clones it.