# Exercise 14: Browser Automation

In this exercise, you will direct Gemini to perform a multi-step interaction on a live website.

## Goal
Automate a search on Wikipedia and capture the result.

## The Scenario
You want to verify that Wikipedia's search functionality is working and visually inspect the results page for the term "Gemini (language model)".

## Instructions

1.  **Start the Browser**
    Ask Gemini to navigate to Wikipedia.
    *   **Prompt:** "Navigate to `https://en.wikipedia.org`."

2.  **Perform the Search**
    You need to find the search box and type in it.
    *   **Prompt:** "Find the search input, type 'Gemini (language model)', and press Enter."
    *   *Note: Gemini might do this in two steps (fill, then press key).*

3.  **Capture the Evidence**
    Once the page loads, take a picture.
    *   **Prompt:** "Take a screenshot of the page and save it as `wiki_gemini.png`."

4.  **Close the Page**
    Always clean up.
    *   **Prompt:** "Close the page."

## Success Criteria
*   You have a `wiki_gemini.png` file in your directory.
*   The image shows the Wikipedia article for Google's Gemini model.

## Troubleshooting
*   **"Element not found":** Sometimes the page loads slowly. You can ask Gemini to "Wait for the search box to appear" or just retry the prompt.
*   **"UID expired":** If you wait too long between prompts, the page snapshot might expire. Gemini usually handles this by taking a new snapshot, but sometimes you just need to re-state the command.
