# 🧪 Recipe: Unit Testing

**Goal:** Generate comprehensive unit tests for existing code, ensuring edge case coverage and following project conventions.

## 📋 The Prompt Template

```bash
gstudent 'Generate unit tests for the file `<FILE_PATH>`.
Framework: <FRAMEWORK_NAME> (e.g., pytest, jest)
Requirements:
1. Cover happy paths and edge cases.
2. Mock external dependencies (e.g., database, API calls).
3. Follow the testing conventions seen in `<EXISTING_TEST_FILE>`.
Output the tests to `<NEW_TEST_FILE_PATH>`.'
```

## 💡 Example Scenario

You have a Python file `src/utils.py` with a function `calculate_discount(price, user_type)`.

**Command:**
```bash
gstudent 'Generate pytest unit tests for `src/utils.py`.
Requirements:
1. Test normal users, premium users, and invalid inputs (negative prices).
2. Use parameterization for the test cases.
3. Save the tests to `tests/test_utils.py`.'
```

## 🧩 Pro Tips

*   **Mention "Edge Cases":** Explicitly asking for edge cases (null values, empty strings, negative numbers) significantly improves the quality of AI-generated tests.
*   **Provide a Reference:** If you have an existing test file that you like, tell Gemini to "follow the style of `tests/existing_test.py`". It will mimic your naming conventions and fixture usage.
