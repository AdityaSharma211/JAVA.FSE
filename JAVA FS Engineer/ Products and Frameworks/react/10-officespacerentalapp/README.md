# officespacerentalapp

**Lab objective:** Use JSX syntax to create elements/attributes and render the DOM;
use inline CSS in JSX.

## What it does (all in `App.js`)
- `element` — a JSX element for the page heading.
- `jsxatt` — a JSX attribute example (`<img src={sr} .../>`) showing the office
  space image.
- `ItemName` — a JS object (`Name`, `Rent`, `Address`) rendered as office details.
- `offices` — an array of office objects looped over with `.map()` to render a
  list.
- `rentColor()` — returns the `textRed` class when rent is `<= 60000` and
  `textGreen` otherwise; applied via `className` (CSS rules in `App.css`).

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000`.
