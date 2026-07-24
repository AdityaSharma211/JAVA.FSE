# Git Hands-On Labs — Solutions

This repository contains completed, working solutions for the five Git
hands-on labs (HOL) that were provided as Word documents:

| Folder | Lab | Topic |
|---|---|---|
| [`lab1-setup-and-first-commit`](lab1-setup-and-first-commit/SOLUTION.md) | Git-HOL 1 | Git configuration, Notepad++ as default editor, first commit |
| [`lab2-gitignore`](lab2-gitignore/SOLUTION.md) | Git-HOL 2 | Ignoring files/folders with `.gitignore` |
| [`lab3-branching-merging`](lab3-branching-merging/SOLUTION.md) | Git-HOL 3 (Git-T03-HOL_001) | Branching, merging, P4Merge |
| [`lab4-conflict-resolution`](lab4-conflict-resolution/SOLUTION.md) | Git-HOL 4 (Git-T03-HOL_002) | Resolving a merge conflict |
| [`lab5-cleanup-and-push`](lab5-cleanup-and-push/SOLUTION.md) | Git-HOL 5 (Git-T03-HOL_003) | Cleaning up and pushing back to remote |

## How this folder is organized

Every lab folder contains a `SOLUTION.md` with:

- The exact Git Bash commands to run, in order, for every numbered step
  in the original lab document.
- Short explanations of *why* each command is used.
- Sample expected output where useful, so you can confirm you did the
  step correctly.

The repository itself (this `git` folder) has also been walked through the
exercises end-to-end (config → first commit → `.gitignore` → branch →
merge → conflict → resolve → cleanup), so `git log --oneline --graph
--decorate --all` shows real history you can inspect and compare against
your own.

## Before you start (applies to every lab)

1. Install **Git Bash** (part of [Git for Windows](https://git-scm.com/download/win)) if you haven't already.
2. Create a free account on **GitHub** (or GitLab, per the original lab)
   — **do not use your company/Cognizant credentials.**
3. Install **Notepad++** and, optionally, **P4Merge** (needed for lab 3 & 4's visual diff/merge steps).

## Uploading this to GitHub

```bash
# from inside this "git" folder
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

(Replace `<your-username>` and `<your-repo>` with your own GitHub username
and the repository you created on github.com.)
