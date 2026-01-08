# 🐛 Recipe: Debugging

**Goal:** Identify the root cause of a bug and generate a fix.

## 📋 The Prompt Template

```bash
gstudent 'I am encountering an error in `<FILE_PATH>`.
Error Message: "<PASTE_ERROR_MESSAGE>"
Steps to Reproduce: <DESCRIBE_STEPS>
Task:
1. Explain the likely cause of this error.
2. Fix the code in `<FILE_PATH>`.
3. Add a comment explaining why the fix works.'
```

## 💡 Example Scenario

Your Python script crashes with a `KeyError` when processing user data.

**Command:**
```bash
gstudent 'I am getting a `KeyError: "email"` in `src/users.py` line 42.
It seems to happen when the user data comes from the legacy system.
Analyze `src/users.py`.
Task:
1. Find where the "email" key is accessed.
2. Add a safe check (e.g., `.get()` or a try/except block) to handle missing keys.
3. If the key is missing, log a warning and skip that record.'
```

## 🧩 Pro Tips

*   **Paste the Traceback:** Gemini is excellent at reading stack traces. Always paste the full error output if you have it.
*   **"Explain First":** Asking Gemini to "Explain the error" before "Fixing it" often leads to better solutions because it forces the model to reason about the problem first (Chain of Thought).
