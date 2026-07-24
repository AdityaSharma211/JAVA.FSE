# Lab 2 — Ignoring Files and Folders with `.gitignore`

Estimated time: 20 minutes

## Goal

Create a `.log` file and a `log` folder in the working directory, then
update `.gitignore` so that both are ignored on commit. Verify with
`git status`.

## Steps

**1. Create a `.log` file**

```bash
echo "sample log output" > app.log
```

**2. Create a `log` folder with a file inside it**

```bash
mkdir log
echo "another log entry" > log/debug.log
```

**3. Check the current status (before ignoring anything)**

```bash
git status
```

Both `app.log` and the `log/` folder show up as **untracked**.

**4. Create/update `.gitignore`**

```bash
cat > .gitignore << 'EOF'
# Ignore all files with a .log extension
*.log

# Ignore the log folder entirely
log/
EOF
```

**5. Verify the ignore rules work**

```bash
git status
```

Expected output:

```
On branch master
nothing to commit, working tree clean
```

`app.log` and `log/` no longer appear as untracked — Git is ignoring
them, exactly as `.gitignore` specifies.

**6. Stage and commit the `.gitignore` file itself**

`.gitignore` is a normal file and should be tracked so the rule is
shared with everyone who clones the repo:

```bash
git add .gitignore
git commit -m "Add .gitignore to ignore *.log files and log/ folder"
```

**7. Confirm final state**

```bash
git status
```

```
On branch master
nothing to commit, working tree clean
```

- `working directory`: contains `app.log` and `log/` physically on disk.
- `local repository`: does **not** contain `app.log` or `log/` (they were
  never staged/committed) — only `.gitignore` was added.
- `remote repository` (after a `git push`): matches the local repository,
  so `app.log` and `log/` are absent there too.

## Note

If a file was already tracked by Git *before* you added it to
`.gitignore`, adding it to `.gitignore` won't stop Git from tracking it.
You'd first need:

```bash
git rm --cached <file>
```

to untrack it, then commit that removal.
