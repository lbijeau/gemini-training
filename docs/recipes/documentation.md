# 📚 Recipe: Documentation

**Goal:** Generate clear, accurate documentation for code, APIs, or entire modules.

## 📋 The Prompt Template

```bash
gstudent 'Add docstrings to all functions in `<FILE_PATH>`.
Style: <STYLE_GUIDE> (e.g., Google style, JSDoc).
Include:
1. Parameter types and descriptions.
2. Return value descriptions.
3. Example usage.'
```

## 💡 Example Scenario

You have a `src/api.js` file with several Express routes but no comments.

**Command:**
```bash
gstudent 'Generate JSDoc comments for all functions in `src/api.js`.
Ensure you document the expected request body structure and the response format.
Also, generate a Markdown table summarizing all the API endpoints in this file and save it to `docs/api-reference.md`.'
```

## 🧩 Pro Tips

*   **Explain the "Big Picture":** When generating a README, give Gemini a summary of what the project does first. "This is a CLI for tracking fitness goals. Write a README..."
*   **Update, Don't Just Create:** You can ask Gemini to "Update the existing README to include instructions for the new `login` feature."
