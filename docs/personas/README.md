# Personas

This directory contains markdown files that define specific "Personas" for the Gemini assistant.

## What are Personas?

Personas are pre-defined instruction sets that tell Gemini *who* to be. They set the tone, expertise level, and priorities for the session.

## How to Use Them

You can inject a persona into your current session in two ways:

### 1. The `@` Injection (Temporary)
Use the `@` command to read the persona file into your current prompt context.

```bash
gemini " @docs/personas/ravi-the-reviewer.md Review my code in main.py"
```

This tells Gemini: "Read the instructions in Ravi's file, adopt that persona, and then review my code."

### 2. The `GEMINI.md` Method (Persistent)
If you want Gemini to *always* act like a specific persona for a project, copy the content of the persona file into a `GEMINI.md` file in your project root.

```bash
cat docs/personas/alex-the-advanced-user.md > GEMINI.md
```

Now, every interaction in this folder will be guided by Alex's persona.
