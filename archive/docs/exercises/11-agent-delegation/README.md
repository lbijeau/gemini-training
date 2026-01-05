# Exercise 11: Agent Delegation

In this exercise, you will practice "Manager Mode" by delegating a complex research task to the `codebase_investigator` agent.

## Goal
Use the `delegate_to_agent` tool to perform a deep-dive analysis of this repository without manually reading files yourself.

## The Scenario
You are a new Tech Lead on the `gemini-training` project. You want to understand the current state of the documentation regarding "Extensions" before you plan a roadmap. You don't have time to `grep` through files manually.

## Instructions

1.  **Formulate a Delegation Prompt.**
    You want the agent to:
    *   Look into the `docs/` folder.
    *   Find every mention of "Extensions" or "Superpowers".
    *   Summarize which modules cover these topics.

    *Draft Prompt:* "Delegate to the codebase investigator. I need a summary of all training modules that teach about 'Extensions'. Scan the `docs/` directory and list the specific files and key concepts they cover."

2.  **Execute.**
    Run this prompt in the Gemini CLI.

3.  **Analyze the Interaction.**
    Watch the logs (or the output).
    *   Did Gemini call `delegate_to_agent`?
    *   Did the Agent return a report?
    *   Did Gemini summarize that report for you?

## Success Criteria
*   You received a coherent summary listing modules like `04-extensions-overview.md` and `06-authoring-extensions.md`.
*   You verified that the `codebase_investigator` tool was actually used.

## Challenge
Ask the investigator to "Create a high-level architectural map of the `practice/` folder and identify any file types that seem out of place."
