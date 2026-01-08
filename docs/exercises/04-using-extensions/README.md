# Exercise 04: Understanding Capabilities and Extensions

## Objective

In this exercise, you will explore the limits of the core Gemini model and understand how Extensions bridge the gap between text generation and real-world actions. You will attempt a task that requires a tool, observe the "Capability Gap," and learn how Extensions fill it.

## Scenario

You need a placeholder image for a user profile. You might expect an AI to just "do it," but without the specific "Eyes and Hands" (Tools), a text model is limited.

## Instructions

1.  **Attempt the impossible:**
    Ask Gemini to perform an action that requires an external tool, such as generating an image or querying a live database (assuming you haven't installed specific extensions for these yet).

```bash
gstudent 'Generate a 128x128 pixel placeholder image for a user avatar. Save it to `assets/placeholder_avatar.png`.'
```

2.  **Analyze the Response:**
    *   **The Outcome:** Gemini will likely respond that it cannot generate images directly, or it might write *code* (Python/HTML) to generate an image, but it won't *create* the binary file itself directly in the way an Image Generation Tool would.
    *   **The Lesson:** The core model processes text. While the CLI allows it to write text files (like code), it cannot natively generate binary assets (like images) or execute external actions without a specific Tool.

3.  **The Role of Extensions:**
    If you had an **Asset Generator Extension** installed:
    1.  Gemini would recognize the intent ("Generate image").
    2.  It would see the `generate_image` tool provided by the extension.
    3.  It would **call** that tool, and the extension would do the work.

## Key Takeaway

Extensions are not just "extra commands"; they are the **limbs** of the AI. When you ask for something outside the realm of text processing, Gemini checks its installed Extensions to see if it has a tool for the job.

*   **Without Extension:** "I can't do that, but here is some Python code..."
*   **With Extension:** "Done. I've saved the image to `assets/`."
