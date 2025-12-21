# Exercise 07: Interactive Mastery - Branching and Context

## Objective

In this exercise, you will master the "Power User" features of the Gemini CLI: saving chat checkpoints (`/chat`) and injecting precise context (`@`).

## Scenario

You are working on a tricky Python script. You want to try two different implementation strategies (Iterative vs. Recursive) without confusing the AI. You will use chat checkpoints to "branch" time.

## Instructions

### Step 1: Setup

1.  Create a file `practice/sequences.py` with a basic placeholder:
    ```bash
    echo "def calculate_sequence(n): pass" > practice/sequences.py
    ```
2.  Start an interactive Gemini session:
    ```bash
    gemini
    ```

### Step 2: Establish the Base State

1.  In the Gemini CLI, tell it about the file using the `@` command:
    ```
    I want to work on @practice/sequences.py.
    ```
2.  Now, **save this state** so we can come back to it.
    ```
    /chat save base-state
    ```

### Step 3: Branch A - The Recursive Approach

1.  Ask Gemini to implement a *recursive* solution.
    ```
    Implement the function to calculate the nth Fibonacci number using recursion.
    ```
2.  Verify the code (conceptually).
3.  **Save this branch.**
    ```
    /chat save recursive-branch
    ```

### Step 4: Branch B - The Iterative Approach (Time Travel!)

Now, let's go back in time. We want to try an iterative approach, but we don't want the AI to be "biased" by its previous recursive solution (or confuse the context).

1.  **Resume the base state.**
    ```
    /chat resume base-state
    ```
    *Notice that the history of the "recursive" conversation is gone from the current session context.*

2.  Ask Gemini to implement an *iterative* solution.
    ```
    Implement the function to calculate the nth Fibonacci number using an iterative loop.
    ```

### Step 5: Using Shell Commands (`!`)

1.  Verify the file content directly from the CLI to make sure it changed.
    ```
    !cat practice/sequences.py
    ```

## Review

You just performed "Time Travel Debugging" with an AI!
1.  You established a clean context (`@`).
2.  You saved it (`/chat save`).
3.  You explored one path.
4.  You reverted to the clean state (`/chat resume`) to explore a completely different path cleanly.

This is vastly more powerful than just "undoing" file changes, because it resets the **AI's Memory** as well.