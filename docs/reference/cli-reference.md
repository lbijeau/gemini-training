# Gemini CLI Command Reference

This document provides a comprehensive reference for all available Gemini CLI commands, their options, and usage examples.

---

## 1. `gemini generate`

Generates new code based on a prompt.

**Usage:**
```bash
gemini generate --output <file_path> --prompt "<your_prompt>"
```

**Arguments:**

*   `--output, -o <file_path>` (optional): The file to write the generated code to. If not provided, the output will be printed to standard output.
*   `--prompt, -p <string>` (required): The natural language prompt describing the code you want to generate.

**Example:**
```bash
# Generate a Python function and save it to a file
gemini generate -o practice/my_function.py -p "write a python function that calculates the square of a number"
```

---

## 2. `gemini refactor`

Modifies existing code in a file based on a prompt.

**Usage:**
```bash
gemini refactor --file <file_path> --prompt "<your_prompt>"
```

**Arguments:**

*   `--file, -f <file_path>` (required): The path to the file you want to refactor. The file will be modified in-place.
*   `--prompt, -p <string>` (required): The natural language prompt describing the desired refactoring.

**Example:**
```bash
# Refactor a Python script to use list comprehension
gemini refactor -f practice/my_script.py -p "refactor this code to use a more idiomatic list comprehension"
```

---

## 3. `gemini explain`

Explains a piece of code.

**Usage:**
```bash
gemini explain --file <file_path> --prompt "<your_prompt>"
```

**Arguments:**

*   `--file, -f <file_path>` (required): The file containing the code you want to be explained.
*   `--prompt, -p <string>` (required): A prompt specifying what part of the code you want explained (e.g., "Explain the `my_function` function").

**Example:**
```bash
# Get an explanation of a complex regex in a file
gemini explain -f practice/validator.py -p "Explain the regular expression in the is_valid_email function"
```

---

## 4. `gemini fix`

Identifies and fixes bugs in a piece of code.

**Usage:**
```bash
gemini fix --file <file_path> --prompt "<your_prompt>"
```

**Arguments:**

*   `--file, -f <file_path>` (required): The path to the file containing the buggy code. The file will be modified in-place.
*   `--prompt, -p <string>` (required): A prompt describing the bug or the unexpected behavior.

**Example:**
```bash
# Fix a function that is producing an incorrect result
gemini fix -f practice/buggy_code.py -p "The factorial function is giving the wrong output for the input 5. It should be 120."
```

---

## 5. `gemini use-skill`

Invokes a custom Gemini Skill (Superpower).

**Usage:**
```bash
gemini use-skill <skill_name> [skill_arguments...]
```

**Arguments:**

*   `<skill_name>` (required): The name of the skill to invoke.
*   `[skill_arguments...]` (optional): Any arguments or flags that the specific skill accepts.

**Example:**
```bash
# Use a custom skill named 'my-echo-skill'
gemini use-skill my-echo-skill --message "Hello from my custom skill!"
```

---

## 6. `gemini generate-asset`

Generates non-code assets, like images or diagrams, using a skill.

**Usage:**
```bash
gemini generate-asset --output <file_path> --width <pixels> --height <pixels> --style <style_name> --prompt "<your_prompt>"
```

**Arguments:**

*   `--output, -o <file_path>` (required): The file to save the generated asset to.
*   `--width <pixels>` (optional): The width of the asset in pixels.
*   `--height <pixels>` (optional): The height of the asset in pixels.
*   `--style <style_name>` (optional): A style preset (e.g., `flat-icon`, `photorealistic`).
*   `--prompt, -p <string>` (required): A prompt describing the desired asset.

**Example:**
```bash
# Generate a placeholder avatar image
gemini generate-asset -o assets/avatar.png --width 128 --height 128 --style flat-icon -p "minimalist abstract face"
```