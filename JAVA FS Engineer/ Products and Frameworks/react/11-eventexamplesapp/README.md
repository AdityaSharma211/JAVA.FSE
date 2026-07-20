# eventexamplesapp

**Lab objective:** Implement event handling, use the `this` keyword, and use
synthetic events.

## What it does (`App.js`, a class component)
- **Increment** button — calls two methods: increments the counter (`this.increment`)
  and shows `Hello! Member1` (`this.sayHello`).
- **Decrement** button — decreases the counter.
- **Say welcome** button — invokes `sayWelcome('welcome')`, passing an argument,
  which alerts `welcome`.
- **Click on me** button — invokes a **synthetic event** handler (`onClick`) that
  alerts `I was clicked`.
- `CurrencyConvertor` (`src/components/CurrencyConvertor.js`) — a controlled form
  with Amount/Currency inputs; clicking **Submit** calls `handleSubmit`, which
  alerts the converted amount (e.g. Amount `80` → `Converting to Euro Amount is
  6400`).

All handlers are bound in the constructor so `this` correctly refers to the
component instance.

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000`.
