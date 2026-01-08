# Exercise 08: Context Mastery with GEMINI.md

## Objective

In this exercise, you will define a "personality" and a set of coding rules for your project using `GEMINI.md`, and verify that Gemini follows them.

## Scenario

You are starting a new Python project, and you want to enforce a rule: "Every function must have a docstring." You don't want to type this in every prompt.

## Instructions

### Step 1: Create the Context File

Create a `GEMINI.md` file in the `practice/` directory.

```bash
touch practice/GEMINI.md
```

Add the following content:

```markdown
# Project Rules

1. You are a strict Python Code Reviewer.
2. EVERY function MUST have a docstring. No exceptions.
3. If I ask you to write code without a docstring, you must politely correct me and include it anyway.
```

### Step 2: Start Gemini in that Context

Navigate to the directory so Gemini picks up the file.

```bash
cd practice
gemini
```

### Step 3: Verify Memory

In the interactive session, check if Gemini sees your rules.

```
/memory show
```

You should see your "Project Rules" listed in the output.

### Step 4: Test the Rule

Try to break the rule!

```
Write a simple python function called add(a, b) that returns their sum. Be brief, no comments.
```

**Expected Behavior:**
Gemini should generate the code *with* a docstring, possibly adding a note like "I've added a docstring as per project rules."

### Step 5: Update Memory

1.  Edit `GEMINI.md` (in another terminal or editor) to add a new rule: "Also, prefer type hints."
2.  Back in your Gemini session, reload the context:
    ```
    /memory refresh
    ```
3.  Ask it to write another function and see if it uses type hints.

## Review

You have now "programmed" the AI's behavior for this folder. Any time you or your team works here, Gemini will automatically know the rules.