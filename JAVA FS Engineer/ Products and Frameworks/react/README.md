# ReactJS Hands-On Labs — Solutions

This repository contains solved versions of 10 ReactJS hands-on lab exercises.
Each lab is a **separate, independent Create-React-App project** with its own
`package.json`, `public/`, and `src/`. Nothing shares dependencies or state
across folders — build and run any one of them on its own.

```
react/
├── 1-myfirstreact/          -> Lab 1: SPA/React intro, create-react-app setup
├── 2-studentapp/             -> Lab 2: Class components (Home/About/Contact)
├── 3-scorecalculatorapp/     -> Lab 3: Function components + styling
├── 4-blogapp/                -> Lab 4: Component lifecycle (componentDidMount/Catch)
├── 5-cohort-dashboard/       -> Lab 5: CSS Modules & inline styling
├── 9-cricketapp/             -> Lab 9: ES6 map/arrow functions/destructuring
├── 10-officespacerentalapp/  -> Lab 10: JSX fundamentals
├── 11-eventexamplesapp/      -> Lab 11: Event handling & synthetic events
├── 12-ticketbookingapp/      -> Lab 12: Conditional rendering (login/logout)
└── 13-bloggerapp/            -> Lab 13: Multiple conditional rendering styles
```

Folder numbers match the original uploaded lab documents
(`1__ReactJS-HOL.docx`, `2__ReactJS-HOL.docx`, … `13__ReactJS-HOL.docx` — labs
6, 7, and 8 were not included in the upload set).

## Running any lab
```bash
cd <lab-folder>
npm install
npm start
```
Each app runs on `http://localhost:3000` by default (Create React App's dev
server). Since every project is independent, run them one at a time or change
the port (`PORT=3001 npm start`) to run more than one simultaneously.

## Lab-by-lab summary

| Folder | App name | What it demonstrates |
|---|---|---|
| `1-myfirstreact` | myfirstreact | Basic create-react-app setup; render a heading |
| `2-studentapp` | StudentApp | Class components — Home, About, Contact |
| `3-scorecalculatorapp` | scorecalculatorapp | Function component with props + CSS |
| `4-blogapp` | blogapp | `componentDidMount()` (fetch API) & `componentDidCatch()` |
| `5-cohort-dashboard` | cohortdashboard | CSS Modules, conditional styling by status |
| `9-cricketapp` | cricketapp | `map()`, arrow functions, destructuring, array merge (spread) |
| `10-officespacerentalapp` | officespacerentalapp | JSX elements/attributes, conditional inline CSS |
| `11-eventexamplesapp` | eventexamplesapp | Event handlers, `this` binding, synthetic events |
| `12-ticketbookingapp` | ticketbookingapp | Conditional rendering via element variables |
| `13-bloggerapp` | bloggerapp | Three different conditional-rendering techniques (`&&`, `if/else`, ternary) |

## Notes
- **Lab 5** originally shipped with a pre-built starter React app to unzip and
  style; that starter wasn't part of the uploaded materials, so `5-cohort-dashboard`
  is a from-scratch equivalent app styled exactly to the lab's CSS-module
  spec (see that folder's own README for details).
- Each lab folder has its own `README.md` with the specific objective and an
  explanation of the implementation.
- `node_modules/` and `build/` are intentionally not included (see
  `.gitignore` in each project) — run `npm install` first.

## Tech stack
- React 18
- Create React App (`react-scripts` 5)
- Plain CSS / CSS Modules (no UI framework, per the lab instructions)
