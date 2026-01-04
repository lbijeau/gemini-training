# 10 - Connected Gemini: Web Capabilities

Up until now, we've used Gemini to work with the files on your local machine. In this module, we'll explore how to connect Gemini to the internet to fetch up-to-date information, documentation, and debug solutions.

## Why Connect to the Web?

Even the best AI models have a "knowledge cutoff"—they don't know about libraries released last week or the specific API response of your company's internal service. By giving Gemini web access, you enable it to:

1.  **Read Live Documentation:** Fetch the latest docs for a library instead of hallucinating outdated syntax.
2.  **Debug with Search:** Google specific error messages to find StackOverflow discussions or GitHub issues.
3.  **Summarize Articles:** Read and summarize long blog posts or technical articles.

## Core Tools

Gemini provides two primary tools for web interaction:

### 1. `google_web_search`

This tool allows Gemini to perform a Google search and process the results.

*   **When to use:** When you need to find an answer but don't know the URL, or when debugging an obscure error.
*   **Example Prompt:**
    > "Search for 'React 19 server components breaking changes' and summarize the top 3 risks."
    > "I'm getting error code `0x80040154` in my C# app. Search for this error and suggest a fix."

### 2. `web_fetch`

This tool allows Gemini to retrieve the full content of a specific URL. It handles HTML-to-text conversion automatically, so the model can read articles, docs, or issues.

*   **When to use:** When you have a specific link you want Gemini to read (e.g., a documentation page, a PR, or a blog post).
*   **Example Prompt:**
    > "Read https://api.example.com/v2/docs and generate a Python client for the 'Users' endpoint."
    > "Summarize the key points from this article: https://example.com/article"

## Best Practices

*   **Be Specific with URLs:** When using `web_fetch`, ensure the URL is correct.
*   **Combine Tools:** You can often combine these in a workflow.
    > "Search for the 'LangChain' documentation, find the page on 'Agents', and then explain how to create a custom tool."
*   **Verify Source:** AI can still misinterpret text. If Gemini generates code based on documentation, ask it to "quote the section of the docs you used" to verify.

## Next Steps

Let's put this into practice by using Gemini to learn a new library from its live documentation.

*   [Exercise 10: Web Capabilities](../exercises/10-web-capabilities/README.md)
