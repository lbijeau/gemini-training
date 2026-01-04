# Exercise 12: Visual Communication

In this exercise, you will use Gemini to generate the design artifacts for a new application.

## Goal
Generate a database diagram, a UI wireframe, and a logo for a hypothetical "Pet Adoption App".

## Instructions

### Part 1: The Data Model (Mermaid)
Ask Gemini to design the database.
*   **Prompt:** "Render a Mermaid ER diagram for a Pet Adoption app. It needs tables for `Pet`, `Shelter`, and `AdoptionApplication`. Save it as `pet_db.png`."
*   **Verify:** Check the folder for `pet_db.png` and open it.

### Part 2: The User Interface (Wireframe)
Ask Gemini to design the main screen.
*   **Prompt:** "Render a wireframe for the 'Pet Detail' screen. It should show a pet photo placeholder, a name title, a description block, and an 'Adopt Me' button."
*   **Verify:** Check for the generated wireframe image.

### Part 3: The Brand (Imagen)
Ask Gemini to create a logo.
*   **Prompt:** "Generate a flat-icon style logo of a happy dog and cat inside a house shape. Use blue and orange colors."
*   **Verify:** Check the output image.

## Success Criteria
*   You have three new image files in your directory.
*   You have viewed them and confirmed they match your description.

## Pro Tip
You can embed these directly into markdown!
```markdown
![Database Schema](./pet_db.png)
```
