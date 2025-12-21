# Exercise 02: Advanced Prompting - Few-Shot and Role-Based Prompts

## Objective

This exercise will help you practice two powerful advanced prompting techniques: **Few-Shot Prompting** and **Role-Based Prompting**.

## Part 1: Few-Shot Prompting for Custom Formatting

### Scenario

You have a Python script with functions that return simple strings. You want to refactor these functions to return formatted JSON objects, but you want to ensure Gemini follows a very specific JSON structure.

### Instructions

1.  **Create the initial script:**
    Create a file `practice/user_service.py` with the following content:
    ```python
    # practice/user_service.py

    def get_user(user_id):
        # In a real app, this would fetch from a database
        if user_id == 1:
            return "Alice"
        return "User not found"

    def get_product(product_id):
        if product_id == 100:
            return "Laptop"
        return "Product not found"
    ```

2.  **Use Few-Shot Prompting to refactor `get_user`:**
    Your goal is to make the functions return a JSON object like `{"status": "success", "data": "..."}` or `{"status": "error", "message": "..."}`.

    Craft a prompt that first shows Gemini an example of how you would refactor `get_user`, and then asks it to refactor `get_product` in the same style.

    **Example Prompt Idea:**
    ```
    I want to refactor my Python functions to return a consistent JSON response.

    # --- BEFORE ---
    def get_user(user_id):
        if user_id == 1:
            return "Alice"
        return "User not found"

    # --- AFTER ---
    import json

    def get_user(user_id):
        if user_id == 1:
            return json.dumps({"status": "success", "data": "Alice"})
        return json.dumps({"status": "error", "message": "User not found"})

    ---

    Now, apply the exact same refactoring pattern to the `get_product` function in the file `practice/user_service.py`.
    ```
    *(Execute this prompt with the Gemini CLI, targeting `practice/user_service.py`)*

3.  **Review and verify** the output in `practice/user_service.py`. It should have correctly refactored `get_product`.

## Part 2: Role-Based Prompting for Code Review

### Scenario

You have a Python function that might be inefficient. You want to get an expert opinion on its performance.

### Instructions

1.  **Add a function to your script:**
    Add the following function to `practice/user_service.py`:
    ```python
    def find_common_elements(list1, list2):
        common = []
        for item1 in list1:
            for item2 in list2:
                if item1 == item2:
                    common.append(item1)
        return common
    ```

2.  **Use Role-Based Prompting to get a review:**
    Craft a prompt where you assign Gemini the role of an expert Python developer or performance analyst. Ask it to review the `find_common_elements` function and suggest a more efficient implementation.

    **Example Prompt Idea:**
    ```
    You are an expert Python developer specializing in code optimization.
    Review the function `find_common_elements` in the file `practice/user_service.py`.

    1.  Explain why the current implementation is inefficient.
    2.  Suggest a more performant alternative and explain why it's better.
    3.  Replace the existing function with your improved version.
    ```
    *(Execute this prompt with the Gemini CLI, targeting `practice/user_service.py`)*

3.  **Review the result.** Gemini should have replaced the nested loop with a more efficient solution (e.g., using sets) and possibly added comments explaining the change, based on your prompt.

Good luck!