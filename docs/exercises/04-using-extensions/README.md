# Exercise 04: Using an Extension

## Objective

In this exercise, you will consciously use a **Gemini Extension** to perform a task that the base model cannot do alone. We will use an asset generation extension (hypothetically installed) to create an image.

## Scenario

You need a placeholder image for a user profile. You will use the "Asset Generator" extension to create it.

## Instructions

1.  **Formulate your request:**
    Instead of just asking for text, ask for an action that requires a tool. Be specific about what you want.

2.  **Execute the prompt:**
    ```bash
    gemini "Generate a 128x128 pixel placeholder image for a user avatar. It should be a minimalist, abstract face shape with a soft gradient background, in a flat-icon style. Save it to `assets/placeholder_avatar.png`."
    ```

3.  **Analyze what happened:**
    *   Gemini received your text.
    *   It recognized the intent ("Generate an image").
    *   It looked at its installed Extensions.
    *   It found a tool (e.g., `generate_image`) in the Asset Generator extension.
    *   It called that tool with your parameters (128x128, flat-icon, etc.).

## Verification

Check the `assets/` directory. If the file exists, the Extension worked!

## Key Takeaway

You didn't need to run a special command or know the tool's internal name. You just asked, and Gemini's **Intent Recognition** bridged the gap between your natural language and the Extension's code.