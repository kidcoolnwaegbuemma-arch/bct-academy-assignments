# Playlist Party — Capstone

## How to run
Open `index.html` with VS Code Live Server. The project uses a JavaScript module.

## Features
- Six starting songs, including the required hostile-text test record.
- Song count and total playlist duration.
- Like/Unlike with a matching `aria-pressed` value.
- Remove songs and add suggested songs.
- Empty-state message when no songs remain.
- HTML template cloning and `textContent` for every song value.
- Responsive layout for narrow screens.

## Code review note
After testing repeated Like, Remove and Add actions, the rendering logic uses the `songs` array as the only source of truth. Every action updates the array first and calls `render()`, which replaces the list. Dynamic song information is assigned with `textContent`, so the hostile test title and artist appear as ordinary text rather than being interpreted as HTML.

## Key explanation
The DOM is the live page structure held by the browser; it is not the saved HTML source file. `textContent` is safer than `innerHTML` for user-provided strings because it inserts literal text. State must be updated before rendering so that the array and visible page stay synchronized.
