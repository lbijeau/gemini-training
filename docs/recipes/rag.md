# 🧠 Recipe: RAG & Infinite Context

**Goal:** Overcome context window limits and reduce costs by using **Retrieval-Augmented Generation (RAG)**. Learn how to connect Gemini to vast amounts of external knowledge or massive codebases without pasting everything into the chat.

## The Problem: The Token Budget

Even with large context windows (1M+ tokens), dumping thousands of files into Gemini has downsides:
1.  **Cost:** You pay for every token, every turn.
2.  **Latency:** Reading 500k lines of code takes time.
3.  **Distraction:** Too much irrelevant info can confuse the model ("Lost in the Middle" phenomenon).

**RAG** solves this by finding the *relevant 1%* of info and only giving that to Gemini.

---

## Scenario A: The Greenfield Builder (External Docs)

**Context:** You are building a new app using a bleeding-edge framework (e.g., a new version of Next.js or a private internal library) that Gemini wasn't trained on.

*   **Wrong Way:** Paste 50 PDF pages of documentation into the prompt.
*   **RAG Way:** Index the documentation. Let Gemini "search" for the specific API references it needs.

### The Workflow
1.  **Ingest:** You scrape the docs website into a local Vector Database (like ChromaDB).
2.  **Prompt:** "Build a Login form using the new `XYZ` library."
3.  **Retrieve:** Your custom tool searches the DB for "XYZ library login form examples".
4.  **Generate:** Gemini receives *only* the 2-3 relevant pages and writes perfect code.

---

## Scenario B: The Legacy Archaeologist (Codebase RAG)

**Context:** You are refactoring a 10-year-old monolith (500,000+ LOC). You need to change how `User` objects are saved, but the logic is scattered across 50 files.

*   **Wrong Way:** `ls -R` and try to read every file. (Gemini will refuse or time out).
*   **RAG Way:** Use Semantic Search to find "concepts" rather than just keywords.

### The Workflow
1.  **Ingest:** Index your codebase by chunking files (functions/classes).
2.  **Prompt:** "Where is the user password validated?"
3.  **Retrieve:** Your tool finds `LegacyAuth.java`, `SecurityUtils.cpp`, and `LoginController.py` based on semantic meaning, not just the word "password".
4.  **Refactor:** Gemini loads only those 3 files into context and refactors them safely.

---

## 🛠️ Implementation: Building a "Doc Search" Extension

To achieve this, you build a Gemini Extension (see [Exercise 05](../exercises/05-authoring-extensions/README.md)) that exposes a retrieval tool.

### 1. The Extension Manifest (`gemini-extension.json`)
```json
{
  "name": "rag-docs",
  "description": "Retrieves documentation from local vector store",
  "mcpServers": {
    "rag": {
      "command": "python3",
      "args": ["rag_server.py"]
    }
  }
}
```

### 2. The Server Logic (Pseudo-code)

This script uses `chromadb` (a local vector DB) to store and retrieve text.

```python
# rag_server.py
import chromadb
from mcp.server import Server

# Initialize DB
client = chromadb.PersistentClient(path="./knowledge_base")
collection = client.get_or_create_collection("docs")

# Tool: Add Documents (Ingestion)
@server.tool()
def learn_docs(folder_path: str):
    """Read .md files from folder and add to vector DB"""
    docs = load_markdown_files(folder_path)
    collection.add(documents=docs, ids=...)
    return "Indexed 50 documents."

# Tool: Search (Retrieval)
@server.tool()
def search_knowledge(query: str):
    """Find relevant docs for a topic"""
    results = collection.query(query_texts=[query], n_results=3)
    # Return the text content of the top 3 matches
    return "\n\n".join(results['documents'][0])
```

### 3. Usage in Gemini

Once installed, you simply talk to Gemini:

> **User:** "How do I implement auth with this new library?"
>
> **Gemini (Thought):** I don't know this library. I have a `search_knowledge` tool. I will use it.
> **Gemini (Action):** Calls `search_knowledge("implement auth library example")`.
> **Gemini (Observation):** Receives 3 snippets of documentation.
> **Gemini (Response):** "Based on the documentation, here is the code..."

## Summary

RAG turns Gemini from a "Know-It-All" (limited by training data) into a "Researcher" (limited only by what you let it read). For large projects, it is the key to scalability.
