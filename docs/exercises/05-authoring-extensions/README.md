# Exercise 05: Authoring Your First Extension

## Objective

In this exercise, you will manually create the directory structure and manifest for a Gemini Extension. This demystifies the "magic" of how Gemini finds and loads tools.

## Scenario

In Exercise 04, you tried to generate an image and failed because the "limbs" (Tools) were missing. Now, you will build the skeleton for that missing limb: an extension named `placeholder-gen`.

## Instructions

### Step 1: Create the Directory

Extensions can live anywhere, but let's put it in `practice/extensions`.

```bash
mkdir -p practice/extensions/placeholder-gen
```

### Step 2: Create the Manifest

Create the `gemini-extension.json` file. This is what makes it an extension.

```bash
touch practice/extensions/placeholder-gen/gemini-extension.json
```

Add the following content:

```json
{
  "name": "placeholder-gen",
  "version": "0.0.1",
  "description": "A tool for generating placeholder assets",
  "contextFileName": "GEMINI.md"
}
```

### Step 3: Add Context

Create a `GEMINI.md` file in that directory.

```bash
touch practice/extensions/placeholder-gen/GEMINI.md
```

Add content:
```markdown
# Asset Generator Context

You are equipped with the 'Placeholder Generator' extension.
When the user asks for a placeholder, you now have the conceptual ability to handle it.
Always specify the dimensions and format when confirming.
```

### Step 4: Link the Extension (Hypothetical)

To install this extension in your real Gemini CLI, you would run:

```bash
gemini extensions link ./practice/extensions/placeholder-gen
```

Once linked, Gemini would load your `GEMINI.md` context automatically.

### Step 5: Adding the "Limbs" (MCP)

To make this extension actually *do* something (like create a real file), you would add an `mcpServers` section to the JSON:

```json
{
  "mcpServers": {
    "image-gen": {
      "command": "python3",
      "args": ["image_tool.py"]
    }
  }
}
```

Then, you would write `image_tool.py` to handle the logic of creating pixels.

## Review

You have created the valid skeleton of an extension!
1.  **Manifest**: Defines identity.
2.  **Context**: Defines instructions and personality.

By linking this, you've gone from "I can't do that" to "I am an Asset Generator". You've given Gemini the **instructions** it needs to understand its new role.