# Lab 5 — Clean Up and Push Back to Remote (Git-T03-HOL_003)

Estimated time: 10 minutes

Prerequisite: Lab 4 completed (Hands-on ID **Git-T03-HOL_002**).

## Steps

**1. Verify master is in a clean state**

```bash
git status
```

```
On branch master
nothing to commit, working tree clean
```

**2. List all available branches**

```bash
git branch -a
```

Since `GitNewBranch` and `GitWork` were already deleted after merging in
Labs 3 and 4, only `master` (and any `remotes/origin/*` branches) should
remain:

```
* master
  remotes/origin/master
```

**3. Pull the remote repository into master**

```bash
git pull origin master
```

This brings in any changes made on the remote (e.g. by teammates) since
your last sync, and merges them into your local `master`.

**4. Push the pending changes from Git-T03-HOL_002 to the remote**

```bash
git push origin master
```

This uploads everything committed locally during Labs 3 and 4 — the
branch/merge work and the conflict-resolution commits — to the remote
repository.

**5. Confirm the changes are reflected remotely**

- On GitHub/GitLab, open the repository in the browser and check the
  commit history matches your local `git log --oneline --graph
  --decorate`.
- Or, from the command line:

```bash
git log origin/master --oneline --graph --decorate
```

This should match your local log exactly, confirming the push
succeeded and the remote is fully up to date.

## Summary of the full workflow (Labs 1–5)

```bash
git log --oneline --graph --decorate --all
```

```
* 00dd47a (HEAD -> master) Ignore .orig backup files left by git mergetool
*   335a0eb Resolve merge conflict in hello.xml between master and GitWork
|\
| * bb799a9 Add and update hello.xml on GitWork
* | f205113 Add hello.xml on master with different content
|/
* f5ed622 Lab 4: add conflict resolution solution doc
* 3f054bb Add branch-file.txt on GitNewBranch
* 9173569 Lab 3: add branching & merging solution doc
* 6a1ebad Lab 2: add .gitignore to ignore *.log files and log/ folder
* f277985 Lab 1: initial commit - add welcome.txt and lab1 solution
```

This single history captures the setup, first commit, `.gitignore`,
branch + fast-forward merge, branch + conflicting merge + resolution,
and is now ready to push/keep in sync with the remote.
