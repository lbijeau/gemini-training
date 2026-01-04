# Exercise 13: Narrated Slideshows

In this exercise, you will produce a short narrated video using only AI tools.

## Goal
Create a 30-second video explaining "Why Documentation Matters".

## Instructions

### 1. Generate the Outline
Ask Gemini to create the content plan.
*   **Prompt:** "Generate a brief slide outline (3 slides max) for a video titled 'Why Documentation Matters'. Keep the narration short and punchy."
*   **Action:** Gemini will generate a YAML block. Copy this text and save it to a file named `doc_video.yaml`.
    *(Or ask Gemini: "Save that YAML to `doc_video.yaml`")*

### 2. Review the YAML
Open `doc_video.yaml`. You'll see the structure:
```yaml
slides:
  - title: "Why Documentation Matters"
    narration: "..."
```
You can edit the narration text if you want to change what the AI says.

### 3. Render the Video
Ask Gemini to build the final asset.
*   **Prompt:** "Render the slides from `doc_video.yaml` into a video file named `docs_matter.mp4`."

### 4. Verify
Check your directory. You should see `docs_matter.mp4`.
*   *Note: Video generation can take a minute or two depending on the length.*

## Success Criteria
*   You have a valid `.yaml` outline file.
*   You have a playing `.mp4` video file with audio narration.
