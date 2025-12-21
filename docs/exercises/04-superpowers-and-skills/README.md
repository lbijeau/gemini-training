# Exercise 04: Using a Simple Superpower

## Objective

In this exercise, you will experience using a "superpower" (or skill) to extend Gemini's capabilities. We will use the `asset-generator` to generate a small image, demonstrating how Gemini can leverage external tools.

## Scenario

You are working on a feature that requires a placeholder image for a user avatar. Instead of manually searching for one, you'll ask Gemini to generate it using its `asset-generator` skill.

## Instructions

1.  **Understand the `asset-generator` Superpower:**
    Recall that we used an `asset-generator` when we created the logo and diagram for this repository. This superpower allows Gemini to generate images based on prompts.

2.  **Generate a placeholder avatar:**
    Ask Gemini to generate a simple, minimalist avatar. You'll specify the content, dimensions, and output path.

    **Example Prompt Idea:**
    ```bash
    gemini "Generate a 128x128 pixel placeholder image for a user avatar. It should be a minimalist, abstract face shape with a soft gradient background, in a flat-icon style. Save it to `assets/placeholder_avatar.png`."
    ```
    *(Note: This assumes Gemini is configured with an asset generation skill that understands this type of prompt.)*

3.  **Verify the output:**
    Check the `assets/` directory to confirm that `placeholder_avatar.png` has been created. You can open it to see the generated image.

## Expected Outcome

A new file `assets/placeholder_avatar.png` will be created, containing a 128x128 minimalist abstract avatar image.

## Further Exploration

*   Experiment with different prompts, styles, and dimensions using the `gemini generate-asset` (or equivalent) command.
*   Think about other types of assets you might need (e.g., icons, background images) and try generating them.

This exercise demonstrates how superpowers allow Gemini to perform specialized tasks, integrating with various tools and APIs to fulfill complex requests.