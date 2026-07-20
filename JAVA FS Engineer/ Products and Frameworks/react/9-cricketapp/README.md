# cricketapp

**Lab objective:** Use the ES6 `map()` method, arrow functions, and destructuring.

## What it does
- `playersData.js` — 11 players (`name`, `score`) and an `IndianTeam` name array.
- `ListofPlayers.js`
  - `ListofPlayers` — renders all players via `Array.map()`.
  - `Scorebelow70` — filters players with `score <= 70` using an ES6 arrow
    function.
- `IndianPlayers.js`
  - `OddPlayers` / `EvenPlayers` — pull the 1st/3rd/5th and 2nd/4th/6th team
    members using **array destructuring**.
  - `T20Players` + `RanjiTrophyPlayers` merged into `IndianPlayers` with the
    ES6 spread operator.
  - `ListofIndianPlayers` — renders the merged array.
- `App.js` toggles between the two views with a `flag` state variable and a
  button (`flag === true` → player list & low-scorers; `flag === false` →
  odd/even/merged Indian players).

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000`.
