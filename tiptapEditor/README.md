# TipTap Editor Project

## Overview
This project is a rich-text editor application built using React, featuring a TipTap editor, custom buttons for text formatting, and functionality for saving and displaying the editor's content. The application uses local storage to persist data across sessions.

---

## File Structure

### Export File
```javascript
import Home from "./src/components/Home/Home";
import TipTap from "./src/components/Editor/TipTap";
import NewPost from "./src/components/NewPost/NewPost";
import Button from "./src/components/button/Button";

export {
    Home,
    TipTap,
    NewPost,
    Button
};
```
This file consolidates and exports all major components for easier imports throughout the project.

---

## Components

### 1. **Home Component**
**File:** `Home.js`

This is the main component that:
- Retrieves saved data from local storage when the page loads.
- Provides state management for the saved content.
- Renders the `TipTap` editor and `NewPost` components.

#### Key Features
- State `afterSavedContent` stores the retrieved local storage data.
- A function `saveContent` updates local storage and state when the editor's content is saved.

```javascript
const Home = () => {
  const storageData = localStorage.getItem('newpost');
  const [afterSavedContent, setAfterSavedContent] = useState(storageData || '');

  const saveContent = useCallback((html) => {
    localStorage.setItem('newpost', html);
    setAfterSavedContent(html);
  }, []);

  return (
    <>
      <TipTap saveContent={saveContent} />
      <NewPost savedContent={afterSavedContent} />
    </>
  );
};
```

---

### 2. **TipTap Editor Component**
**File:** `TipTap.js`

A rich-text editor using TipTap, with extensive formatting options implemented as custom buttons.

#### Key Features
- **Extensions:** `StarterKit`, `Underline`, and `Link`.
- **Editor Initialization:** Uses `useEditor` from `@tiptap/react`.
- **Content Saving:** A `handleSaveBtn` function validates and saves the editor's HTML content to local storage using the provided `saveContent` callback.

```javascript
const TipTap = ({ saveContent }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: '',
  });

  const handleSaveBtn = () => {
    const editorData = editor.getHTML();
    if (editorData) {
      saveContent(editorData);
    } else {
      alert("Please Write Something");
    }
  };

  return (
    <>
      <EditorContent editor={editor} />
      <button onClick={handleSaveBtn}>
        Save
      </button>
    </>
  );
};
```

---

### 3. **Button Component**
**File:** `Button.js`

This component provides reusable buttons for various text formatting actions.

#### Key Features
- Executes TipTap editor commands like bold, italic, underline, heading, etc.
- Handles special cases like setting or removing links.
- Highlights active formatting.

```javascript
const Button = ({ label, editor, action, Option = {}, isActiveCheck }) => {
  const handleBtn = () => {
    if (isActiveCheck === 'link') {
      const previousUrl = editor.getAttributes('link').href;
      const url = window.prompt('URL', previousUrl);
      if (url) {
        editor.chain().focus().setLink({ href: url }).run();
      }
    } else {
      editor.chain().focus()[action](Option).run();
    }
  };

  return (
    <button onClick={handleBtn}>{label}</button>
  );
};
```

---

### 4. **NewPost Component**
**File:** `NewPost.js`

This component displays the saved content from the editor using `html-react-parser`.

#### Key Features
- Converts saved HTML content into React elements for rendering.
- Displays saved content inside a styled container.

```javascript
const NewPost = ({ savedContent }) => (
  <div>
    {parse(savedContent)}
  </div>
);
```

---

## How to Run

1. Clone the repository.
2. Navigate to the project folder.
3. Install dependencies using:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

---

## Features Overview

- **Rich Text Editing**: Supports bold, italic, headings, lists, links, and more.
- **Data Persistence**: Saves and retrieves editor content from local storage.
- **Custom Buttons**: Modular and reusable buttons for text formatting.
- **Dynamic Content Rendering**: Displays saved content dynamically using `html-react-parser`.

---

## Future Enhancements
- Add more extensions like image and table support.
- Implement undo/redo functionality directly in the `TipTap` component.
- Improve UI/UX with a modern design framework like Material-UI or TailwindCSS.

---

## Dependencies
- React
- `@tiptap/react`
- `@tiptap/starter-kit`
- `@tiptap/extension-underline`
- `@tiptap/extension-link`
- `html-react-parser`
