# Lab 3 — Branching and Merging (Git-T03-HOL_001)

Estimated time: 30 minutes

Prerequisite: Git environment configured with **P4Merge** installed for
visual diffs (Perforce's free `p4merge` tool).

## Branching

**1. Create a new branch `GitNewBranch`**

```bash
git branch GitNewBranch
```

**2. List all local and remote branches**

```bash
git branch -a
```

Expected output (the `*` marks the branch you're currently on):

```
* master
  GitNewBranch
  remotes/origin/master
```

**3. Switch to the new branch and add files**

```bash
git checkout GitNewBranch
echo "This file was created on GitNewBranch" > branch-file.txt
```

**4. Commit the changes to the branch**

```bash
git add branch-file.txt
git commit -m "Add branch-file.txt on GitNewBranch"
```

**5. Check status**

```bash
git status
```

```
On branch GitNewBranch
nothing to commit, working tree clean
```

## Merging

**1. Switch back to master**

```bash
git checkout master
```

**2. List command-line differences between master and the branch**

```bash
git diff master GitNewBranch
```

This prints the line-by-line diff in the terminal — `branch-file.txt`
shows as newly added, since master doesn't have it yet.

**3. List the same differences visually with P4Merge**

```bash
git difftool -t p4merge master GitNewBranch
```

(First time only, configure the tool: )

```bash
git config --global diff.tool p4merge
git config --global difftool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
```

**4. Merge the branch into master**

```bash
git merge GitNewBranch
```

Since master hasn't diverged, this is a **fast-forward** merge — master
now includes `branch-file.txt`.

**5. Observe the log after merging**

```bash
git log --oneline --graph --decorate
```

```
* a1b2c3d (HEAD -> master, GitNewBranch) Add branch-file.txt on GitNewBranch
* 6a1ebad Lab 2: add .gitignore ...
* f277985 Lab 1: initial commit ...
```

**6. Delete the branch after merging, and check status**

```bash
git branch -d GitNewBranch
git status
git branch -a
```

`GitNewBranch` no longer appears in the branch list — its work is safely
part of `master`, so Git allows the delete without complaint (`-d`
refuses to delete a branch with unmerged work; `-D` would force it).
