# Exercise 06: Authoring Your First Extension

## Objective

In this exercise, you will manually create the directory structure and manifest for a Gemini Extension. This demystifies the "magic" of how Gemini finds and loads tools.

## Scenario

You want to create an extension named `my-toolbox` that will eventually host some python scripts. For now, we will set up the skeleton.

## Instructions

### Step 1: Create the Directory

Extensions can live anywhere, but let's put it in `practice/extensions`.

```bash
mkdir -p practice/extensions/my-toolbox
```

### Step 2: Create the Manifest

Create the `gemini-extension.json` file. This is what makes it an extension.

```bash
touch practice/extensions/my-toolbox/gemini-extension.json
```

Add the following content:

```json
{
  "name": "my-toolbox",
  "version": "0.0.1",
  "description": "My personal collection of tools",
  "contextFileName": "GEMINI.md"
}
```

### Step 3: Add Context

Create a `GEMINI.md` file in that directory.

```bash
touch practice/extensions/my-toolbox/GEMINI.md
```

Add content:
```markdown
# My Toolbox Context

You are equipped with the 'My Toolbox' extension.
Always prefer efficient solutions.
```

### Step 4: Link the Extension (Hypothetical)

To install this extension in your real Gemini CLI, you would run:

```bash
gemini extensions link ./practice/extensions/my-toolbox
```

Once linked, Gemini would load your `GEMINI.md` context automatically.

## Review

You have created the valid skeleton of an extension!
1.  **Manifest**: Defines identity.
2.  **Context**: Defines instructions.

To add actual *tools* (like API calls), you would add an `mcpServers` section to the JSON and write a script to handle the requests, but that's an advanced topic for another day!