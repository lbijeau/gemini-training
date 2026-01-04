# Exercise 10: Connected Gemini

In this exercise, you will use Gemini's web capabilities to generate code based on live documentation.

## Goal
Use `web_fetch` to read the documentation for a specific Python library and generate a script that uses it correctly.

## The Scenario
You are building a CLI tool and you want to use the `rich` library to print beautiful tables to the terminal. You don't know the syntax.

## Instructions

1.  **Create a file** named `inventory.py` with this raw data:
    ```python
    data = [
        {"item": "Potion", "cost": 50, "stock": 10},
        {"item": "Sword", "cost": 250, "stock": 2},
        {"item": "Shield", "cost": 150, "stock": 5},
    ]
    ```

2.  **Ask Gemini** to go to the `rich` documentation URL for Tables and learn how to use it.
    *   **URL:** `https://rich.readthedocs.io/en/stable/tables.html`
    *   **Prompt Idea:** "Read https://rich.readthedocs.io/en/stable/tables.html and write a python script that prints the `data` list as a Rich Table. Make the headers bold and magenta."

3.  **Run the script** to verify it works.
    ```bash
    python3 inventory.py
    # Note: You might need to install rich first: pip install rich
    ```

4.  **Bonus:** Use `google_web_search` to find out "how to add a footer to a Rich table" and ask Gemini to update your script.

## Success Criteria
*   You have a `inventory.py` file.
*   Running it produces a nicely formatted table in your terminal.
*   You successfully used `web_fetch` (check your session logs or Gemini's output to confirm it used the tool).
