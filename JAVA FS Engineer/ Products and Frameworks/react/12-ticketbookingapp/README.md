# ticketbookingapp

**Lab objective:** Implement conditional rendering — element variables, and
prevent/allow components from rendering based on state.

## What it does
- `LoginButton.js` / `LogoutButton.js` — presentational buttons that call the
  `onClick` handler passed via props.
- `Pages.js` — `GuestPage` (browse flights only) and `UserPage` (browse + book
  flights).
- `Greeting.js` — an **element variable** pattern: returns `<UserPage/>` when
  `isLoggedIn` is true, otherwise `<GuestPage/>`.
- `App.js` — holds `isLoggedIn` state. Clicking **Login** shows the Logout
  button and the User page; clicking **Logout** shows the Login button and the
  Guest page again.

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000`.
