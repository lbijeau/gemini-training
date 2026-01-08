# 🛠️ Recipe: Refactoring

**Goal:** Improve the structure, readability, or performance of existing code without changing its external behavior.

## 📋 The Prompt Template

```bash
gstudent 'Refactor the function `<FUNCTION_NAME>` in `<FILE_PATH>`.
Goal: <SPECIFIC_GOAL> (e.g., improve readability, extract methods, optimize loop).
Constraints:
1. Do not change the function signature.
2. Use type hints.
3. Ensure it handles <SPECIFIC_CONDITION> more gracefully.'
```

## 💡 Example Scenario

You have a massive `process_order` function in `src/orders.py` that is 200 lines long.

**Command:**
```bash
gstudent 'Refactor the `process_order` function in `src/orders.py`.
Goal: Extract logic into smaller helper functions (e.g., `validate_stock`, `calculate_total`, `send_email`).
Constraints:
1. Keep the main `process_order` function under 20 lines.
2. Add docstrings to all new helper functions.
3. Verify that the logic flow remains identical.'
```

## 🧩 Pro Tips

*   **Be Specific about "Why":** Telling Gemini *why* you are refactoring (e.g., "for readability" vs "for performance") drastically changes the result.
*   **Incremental Refactoring:** For large files, refactor one function at a time. "Refactor the whole file" can sometimes lead to overly aggressive changes that break things.
