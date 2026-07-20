# blogapp

**Lab objective:** Implement `componentDidMount()` and `componentDidCatch()` life
cycle hooks.

## What it does
- `Post.js` — a plain JS class modelling a single post (`id`, `title`, `body`).
- `Posts.js` — a class component that:
  - initializes `posts` in state via the constructor
  - `loadPosts()` fetches posts from
    `https://jsonplaceholder.typicode.com/posts` and stores them in state
  - `componentDidMount()` calls `loadPosts()` once the component mounts
  - `render()` displays each post's title (heading) and body (paragraph)
  - `componentDidCatch()` shows any rendering error as an alert

## Run
```bash
npm install
npm start
```
Open `http://localhost:3000`. Requires internet access to reach
jsonplaceholder.typicode.com.
