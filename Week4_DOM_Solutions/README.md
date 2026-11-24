# Week 4 — DOM and Rendering Solutions

This repository contains beginner-friendly solutions for Assignments 1–8 and the Playlist Party capstone.

## Run the projects
1. Open this folder in VS Code.
2. Install/use the Live Server extension.
3. Open an assignment's `index.html` with Live Server.
4. Most projects load JavaScript with `type="module"`.

## Folders
- `assignment-1-dom-explorer`
- `assignment-2-selector-traversal`
- `assignment-3-safe-comment-box`
- `assignment-4-profile-notifications`
- `assignment-5-element-builder`
- `assignment-6-render-array`
- `assignment-7-html-template`
- `assignment-8-state-render`
- `playlist-party` — final capstone

## Important concepts
- The DOM is the browser's live, in-memory representation of a page. Editing it changes the current page, not the original HTML file on disk.
- `textContent` inserts text without parsing it as HTML, making it the safe default for user-provided data.
- `innerHTML` parses strings as HTML and can create cross-site scripting (XSS) vulnerabilities when untrusted input is inserted.
- Application state should be updated first, then `render()` should rebuild the visible page from that state. This keeps the data array as the single source of truth.

## Testing
Try the buttons repeatedly, remove every song, add a song again, and test the hostile text in Assignments 3, 7 and the capstone. Check the browser Console for errors.
