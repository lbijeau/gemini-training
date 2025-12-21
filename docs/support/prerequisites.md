# Prerequisites for Gemini Training

This document provides a quick primer on essential command-line concepts and tools that are frequently used throughout the Gemini Training exercises. If you're new to the terminal or find some commands unfamiliar, this guide is for you!

## 1. Navigating the Terminal

*   **`cd <directory>`**: Change Directory. Moves you into a specified folder.
    *   `cd ..`: Move up one directory.
    *   `cd ~`: Go to your home directory.
    *   `cd`: Also goes to your home directory.
*   **`ls` / `ls -F` / `ls -l`**: List (files and directories). Shows the contents of your current directory.
    *   `-F`: Appends a character to indicate file type (e.g., `/` for directories, `*` for executables).
    *   `-l`: Long format, shows details like permissions, owner, size, and modification date.
*   **`pwd`**: Print Working Directory. Shows you your current location in the file system.
*   **`mkdir <directory_name>`**: Make Directory. Creates a new folder.
    *   `mkdir -p a/b/c`: Creates parent directories as needed.

## 2. File Manipulation

*   **`touch <file_name>`**: Creates an empty new file or updates the timestamp of an existing file. Many exercises start by asking you to create a file with `touch`.
*   **`cat <file_name>`**: Concatenate and Print files. Displays the content of a file to standard output. Useful for quickly viewing what's inside a file.
*   **`echo <text>`**: Prints text to the console. Often used with redirection (`>`) to write content to a file.
*   **`>` (Redirection Operator)**: Writes the output of a command to a file, overwriting the file's content if it exists.
    *   Example: `echo "Hello" > greeting.txt` will create/overwrite `greeting.txt` with "Hello".
*   **`>>` (Append Redirection Operator)**: Appends the output of a command to the end of a file, without overwriting existing content.
    *   Example: `echo "World" >> greeting.txt` will add "World" to the end of `greeting.txt`.

## 3. Basic Scripting and Execution

*   **`chmod +x <script_name>`**: Change Mode. Makes a file executable. You'll use this when creating custom skills.
*   **`./<script_name>`**: Executes a script in the current directory.
*   **`python <script_name>.py`**: Runs a Python script.

## 4. Multi-line Prompts in the Terminal

Many Gemini commands involve long prompts. To make these easier to write in the terminal, we often use `heredoc` syntax with `cat`.

**Example:**
```bash
gemini refactor --file my_file.py --prompt "$(cat << 'EOF'
This is the first line of my prompt.
It can span multiple lines.
'EOF' prevents variable expansion inside the prompt.
EOF
)"
```
*   **`cat << 'EOF' ... EOF`**: This block tells the shell to treat everything between `EOF` (or any other chosen delimiter) markers as input to the `cat` command.
*   **`$(...)` (Command Substitution)**: The entire `cat` block is enclosed in `$(...)`, which tells the shell to execute the `cat` command and substitute its output (your multi-line prompt) directly into the `gemini` command as the value for `--prompt`.
*   **`'EOF'` (Quoted Delimiter)**: Quoting `EOF` prevents shell variable expansion and command substitution *within* your prompt, ensuring that the prompt is passed to Gemini exactly as you wrote it.

## 5. Getting Help

*   **`<command> --help` / `man <command>`**: Most command-line tools provide help documentation. Use `--help` for a quick summary and `man` for a more detailed manual page.

By familiarizing yourself with these commands, you'll be well-equipped to navigate the exercises and get the most out of your Gemini training!