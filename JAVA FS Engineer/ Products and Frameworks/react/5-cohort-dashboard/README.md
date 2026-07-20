# cohort-dashboard

**Lab objective:** Style a react component using a CSS Module, apply styles via
`className` and `style` properties.

> **Note:** the original lab hands you a pre-built React app to unzip and style.
> That starter zip wasn't included in the uploaded materials, so this folder
> provides an equivalent minimal cohort-dashboard app (data + component) built
> from scratch, styled exactly per the lab's instructions.

## What it does
- `src/components/CohortDetails.module.css` — CSS Module defining:
  - `.box` — 300px wide, `inline-block`, 10px margin, 10px top/bottom &
    20px left/right padding, 1px black border, 10px border radius
  - a `dt` tag-selector rule (font-weight 500)
  - `.ongoing` (green) / `.completed` (blue) heading colors
- `src/components/CohortDetails.js` — imports the CSS Module, applies `.box`
  to the container `div`, and conditionally colors the `<h3>` cohort name
  green when `status === "ongoing"` and blue otherwise.
- `src/data/cohorts.js` — sample ongoing/completed cohort records.
- `App.js` renders a `CohortDetails` card per cohort.

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000`.
