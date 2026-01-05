# 11 - Working with Agents: scaling Your Capability

As your tasks get more complex, a single prompt—or even a single "Agent"—might not be enough. You might need a specialist.

Gemini includes a powerful tool called `delegate_to_agent` that allows it to hand off a sub-task to a specialized worker.

## The `codebase_investigator` Agent

Currently, the primary specialized agent available to you is the `codebase_investigator`.

*   **Role:** A generic software architect and detective.
*   **Superpower:** It is explicitly designed to "roam" your codebase. It can search files, read context, map dependencies, and return a structured report.
*   **Why use it?**
    *   **Context Limit:** If you just ask Gemini "How does this whole app work?", it might struggle to read every file at once. The investigator can search iteratively.
    *   **Independence:** You can give it a vague goal ("Find where user auth is handled and if there are security risks") and it will perform multiple search/read steps on its own before reporting back.

## How to Delegate

You don't need to run a special command. You just ask Gemini to "investigate" or "research" something that requires deep analysis.

*   **Implicit Delegation:**
    > "Investigate the `src/utils` folder and tell me which functions are unused."
    *(Gemini might decide to call the investigator tool)*

*   **Explicit Delegation:**
    > "Delegate to the codebase_investigator: Map out the dependency graph of the `OrderService` class."

## The "Manager" Workflow

When you delegate, *you* become the Manager, *Gemini* becomes the Lead, and the *Agent* becomes the Worker.

1.  **You (Manager):** "I want to refactor the payment module. Find all dependencies first."
2.  **Gemini (Lead):** "I will hire the Investigator to map the payment module." -> *Calls `delegate_to_agent`*
3.  **Investigator (Worker):** *Searches files... Reads imports... Notes dependencies...* -> "Here is the report."
4.  **Gemini (Lead):** "Based on the report, here is the refactoring plan..."

## Next Steps

Let's try being a Manager.

*   [Exercise 11: Agent Delegation](../exercises/11-agent-delegation/README.md)
