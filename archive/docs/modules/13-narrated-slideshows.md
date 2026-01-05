# 13 - Narrated Slideshows: From Code to Video

One of Gemini's most unique capabilities is transforming text or code into a narrated video presentation. This is perfect for sprint demos, architectural explainers, or educational content.

## The Workflow

Creating a slideshow is a two-step process:

1.  **The Outline (YAML):** First, Gemini generates a structured plan for the video. This YAML file defines the slides, the script for the narrator, and the visual layout.
2.  **The Render (Video/PDF):** Then, Gemini takes that YAML and compiles it into an `.mp4` video (with AI narration) or a `.pdf` slide deck.

## Step 1: Generating the Outline

You can generate an outline from scratch or based on existing files.

*   **From Topic:**
    > "Generate a slide outline for a 3-minute video explaining the 'Factory Pattern' in Python. Use a friendly tone."
*   **From Code:**
    > "Read `src/main.py` and generate a slide outline explaining how this code works to a junior developer."

Gemini uses the `generate_outline` tool for this. It will return a block of YAML code.

## Step 2: Rendering the Video

Once you have the YAML (let's say it's saved as `talk.yaml`), you tell Gemini to render it.

> "Render the slides from `talk.yaml` as an mp4 video."

Gemini uses the `render_slides` tool. This process:
1.  Generates the slide visuals (using HTML/CSS under the hood).
2.  Synthesizes the audio narration (using TTS).
3.  Combines them into a video file.

## Text-to-Speech (TTS) Only

If you just want audio, you can use the `synthesize_speech` tool directly.
> "Speak the text: 'Welcome to the Gemini training course' and save it as intro.mp3"

## Next Steps

Time to become a content creator.

*   [Exercise 13: Creating a Video](../exercises/13-narrated-slideshows/README.md)
