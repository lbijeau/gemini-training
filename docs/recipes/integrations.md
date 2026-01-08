# 🔌 Recipe: Workflow Integrations

**Goal:** Connect Gemini to your wider toolchain (GitHub, Jira, Confluence) to automate project management and reviews.

## 🐙 GitHub CLI (`gh`) Integration

Gemini works exceptionally well with the GitHub CLI (`gh`). Since Gemini can run shell commands, you can perform complex GitHub actions using natural language.

### Prerequisites
*   `gh` CLI installed (`brew install gh`).
*   Authenticated (`gh auth login`).

### Recipe 1: Intelligent PR Review
Instead of reading a raw diff, ask Gemini to summarize it and look for risks.

```bash
gstudent 'Run `gh pr diff <PR_NUMBER>` and summarize the changes.
Focus on:
1. Breaking changes.
2. Security risks.
3. Missing tests.
Output a markdown summary.'
```

### Recipe 2: Auto-Generate Issues
Turn a TODO comment or a bug report into a formal GitHub Issue.

```bash
gstudent 'Create a GitHub issue for the bug in `src/login.py`.
Title: "Login fails with 500 error on timeout"
Body: Use the error traceback I pasted earlier.
Labels: "bug", "p1"'
```
*(Gemini will translate this into `gh issue create ...`)*

### Recipe 3: Sprint Summary
Ask Gemini to summarize your team's recent activity.

```bash
gstudent 'Run `gh pr list --state merged --limit 20` and summarize what features were shipped this week.'
```

---

## 🔷 Jira & Confluence (Atlassian)

To connect Gemini to Jira or Confluence, you typically need a specific **MCP Server**. Unlike `gh` (which is a CLI tool), Atlassian tools are best accessed via API.

### Option A: Using `curl` (Quick & Dirty)
If you have an API Token, you can ask Gemini to fetch data directly.

**Prompt Template:**
```bash
gstudent 'Fetch ticket PROJ-123 from my Jira instance:
`curl -u email:token https://my-domain.atlassian.net/rest/api/3/issue/PROJ-123`
Summarize the acceptance criteria and write a test plan.'
```

### Option B: Using an MCP Server (Recommended)
For robust integration, install the [Atlassian MCP Server](https://github.com/modelcontextprotocol/servers).

1.  **Install the MCP:** Follow the instructions to add it to your Gemini config.
2.  **Use Natural Language:**
    ```bash
    gemini "List my high-priority Jira tickets for this sprint."
    gemini "Read the Confluence page 'Architecture Spec' and verify if my code matches the design."
    ```

**Note:** This requires setting up the MCP server in `~/.gemini/config.json`.
