# Exercise 03: Code Explanation and Debugging

## Objective

This exercise will guide you on how to use Gemini to understand and debug complex or unfamiliar code.

## Part 1: Explaining Complex Code

### Scenario

You've encountered a piece of Python code that uses a regular expression to validate an email address. You understand the high-level goal, but the regex pattern itself is confusing.

### Instructions

1.  **Create the script to be explained:**
    Create a file `practice/validator.py` with the following content:
    ```python
    # practice/validator.py
    import re

    def is_valid_email(email):
        """
        Checks if the given string is a valid email address.
        """
        # A complex regex for email validation
        pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
        if pattern.match(email):
            return True
        return False

    # Example Usage
    print(is_valid_email("test@example.com"))
    print(is_valid_email("invalid-email"))
    ```

2.  **Ask Gemini to explain the code:**
    Craft a prompt that asks Gemini to explain the regular expression in the `is_valid_email` function.

    **Example Prompt Idea:**
    ```bash
    gemini "In the file `practice/validator.py`, please explain the regular expression pattern used in the `is_valid_email` function. Break down each part of the regex and explain what it matches. Respond in the console."
    ```

3.  **Review the explanation:**
    Read Gemini's response. Does it clearly explain the different components of the regex?

## Part 2: Debugging with Gemini

### Scenario

You have a function that is supposed to find the factorial of a number, but it's producing an incorrect result for `factorial(5)`.

### Instructions

1.  **Create the buggy script:**
    Create a file `practice/buggy_factorial.py` with the following content:
    ```python
    # practice/buggy_factorial.py

    def factorial(n):
        """
        Calculates the factorial of a non-negative integer.
        This function has a bug.
        """
        if n == 0:
            return 1
        else:
            result = 1
            # Bug: The range should go up to n, not n-1
            for i in range(1, n):
                result *= i
            return result

    # Expected output for factorial(5) is 120, but this will be wrong.
    print(f"The factorial of 5 is: {factorial(5)}")
    ```

2.  **Ask Gemini to find and fix the bug:**
    Craft a prompt that describes the problem (incorrect output) and asks Gemini to identify and fix the bug.

    **Example Prompt Idea:**
    ```bash
    gemini "$(cat << 'EOF'
The function `factorial` in `practice/buggy_factorial.py` is not working correctly. When I run it with an input of 5, it produces the wrong result. The expected answer is 120.

Please identify the bug in the function, explain what is wrong, and fix the code directly in the file.
EOF
)"
    ```

3.  **Review and verify the fix:**
    *   Check the code in `practice/buggy_factorial.py`. Gemini should have corrected the `range` in the loop.
    *   Run the script again to confirm it produces the correct output (120).
        ```bash
        python practice/buggy_factorial.py
        ```

This exercise demonstrates how Gemini can be a powerful assistant for both understanding and troubleshooting code.