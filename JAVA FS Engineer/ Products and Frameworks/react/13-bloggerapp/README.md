# bloggerapp

**Lab objective:** Implement as many ways as possible of conditional rendering;
render multiple components; use keys with list rendering and `map()`.

## What it does
Three components, each demonstrating a **different** conditional-rendering
technique:

- `BookDetails.js` — logical `&&` operator combined with `Array.map()` (with a
  `key` on each list item) to render the `books` list, or a "no books" message.
- `BlogDetails.js` — a classic `if / else` statement that builds an
  **element variable** (`content`) before returning it.
- `CourseDetails.js` — the **ternary operator** to pick between an "enrolled"
  and "not enrolled" message.

`App.js` renders all three inside labeled sections (Book Details / Blog
Details / Course Details).

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000`.
