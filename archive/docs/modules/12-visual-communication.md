# 12 - Visual Communication: Diagrams and Assets

A picture is worth a thousand tokens. Gemini isn't just a text engine; it can generate visual assets to help you document, design, and prototype your software.

## 1. Architectural Diagrams (`render-mermaid`)

Mermaid is a syntax for generating charts from text. Gemini can write this syntax and then "render" it into an image file for you.

*   **Best for:** Flowcharts, Sequence Diagrams, Class Diagrams, Entity Relationship Diagrams (ERD).
*   **Example Prompt:**
    > "Render a mermaid sequence diagram showing the OAuth2 login flow between a User, Client App, and Auth Server."
    > "Create a class diagram for a basic E-commerce system (Product, Cart, User) and save it as `ecommerce_design.png`."

## 2. UI Wireframes (`render-wireframe`)

When you need to visualize a user interface, describing it in text is hard. Gemini can generate "Excalidraw" style wireframes.

*   **Best for:** Mocking up web pages, mobile screens, or dashboard layouts.
*   **Example Prompt:**
    > "Render a wireframe for a 'Login Screen' with a username field, password field, 'Forgot Password' link, and a large 'Sign In' button."

## 3. Image Generation (`generate-image`)

For non-technical assets—like logos, icons, or placeholder images for your website—Gemini can use the Imagen model.

*   **Best for:** Logos, icons, marketing images, slide backgrounds.
*   **Example Prompt:**
    > "Generate a pixel-art style icon of a robot holding a wrench."
    > "Create a photorealistic image of a futuristic server room."

## The Visual Workflow

1.  **Describe:** Tell Gemini what you want to see.
2.  **Refine:** If the diagram is wrong, ask Gemini to "fix the arrow between A and B."
3.  **Embed:** Use the generated files in your `README.md` or design documents.

## Next Steps

Let's generate some assets for your project.

*   [Exercise 12: Visual Assets](../exercises/12-visual-communication/README.md)
