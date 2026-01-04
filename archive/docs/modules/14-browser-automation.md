# 14 - Browser Automation: The Ghost in the Machine

Gemini isn't stuck in your terminal. With Browser Automation tools, it can launch a real web browser (Chrome) and surf the web just like a human user.

## Capabilities

Unlike `web_fetch` (which just downloads text), these tools allow for **interaction**:
*   **`navigate_page`**: Go to a URL.
*   **`click`**: Click buttons or links.
*   **`fill`**: Type text into forms.
*   **`take_screenshot`**: See what the page looks like.
*   **`evaluate_script`**: Run JavaScript on the page.

## Use Cases

1.  **End-to-End (E2E) Testing:**
    > "Go to `localhost:3000`, log in with user 'test', and verify the dashboard loads."
2.  **Visual Verification:**
    > "Go to my staging site and take a screenshot of the homepage on a mobile viewport."
3.  **Complex Data Retrieval:**
    > "Go to this SPA (Single Page Application), wait for the data table to load, and extract the top 5 rows."

## How it "Sees"

When Gemini looks at a page, it doesn't just see pixels. It pulls a "Snapshot" of the interactive elements (buttons, inputs) and assigns them unique IDs (UIDs).

1.  **You:** "Click the Login button."
2.  **Gemini:** *Analyzes page... finds button with text 'Login'... sees it has UID `45`.* -> calls `click(uid=45)`.

## Safety Notice

When you give AI control of a browser, it can click anything you tell it to. Be careful when automating actions on production sites or sites with financial transactions.

## Next Steps

Let's take Gemini for a drive.

*   [Exercise 14: Browser Automation](../exercises/14-browser-automation/README.md)
