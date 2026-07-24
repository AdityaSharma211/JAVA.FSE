# Lab 4 — Resolving a Merge Conflict (Git-T03-HOL_002)

Estimated time: 30 minutes

Prerequisite: Lab 3 completed (Hands-on ID **Git-T03-HOL_001**).

## Steps

**1. Verify master is clean**

```bash
git checkout master
git status
```

```
On branch master
nothing to commit, working tree clean
```

**2. Create branch `GitWork` and add `hello.xml`**

```bash
git branch GitWork
git checkout GitWork
cat > hello.xml << 'EOF'
<greeting>
  <message>Hello from GitWork branch</message>
</greeting>
EOF
```

**3. Update the content and observe the status**

```bash
echo '<!-- updated on GitWork -->' >> hello.xml
git status
```

`hello.xml` shows as untracked/modified, waiting to be staged.

**4. Commit the changes on the branch**

```bash
git add hello.xml
git commit -m "Add and update hello.xml on GitWork"
```

**5. Switch to master**

```bash
git checkout master
```

**6. Add `hello.xml` to master with different content**

```bash
cat > hello.xml << 'EOF'
<greeting>
  <message>Hello from master branch</message>
</greeting>
EOF
```

**7. Commit the changes to master**

```bash
git add hello.xml
git commit -m "Add hello.xml on master with different content"
```

Master and `GitWork` now each have their own, different version of
`hello.xml` — a classic setup for a conflict.

**8. Observe the log across all branches**

```bash
git log --oneline --graph --decorate --all
```

You'll see the two branches have diverged, each with its own commit
touching `hello.xml`.

**9. Check differences with the Git diff tool**

```bash
git diff master GitWork -- hello.xml
```

**10. Visualize the differences with P4Merge**

```bash
git difftool -t p4merge master GitWork -- hello.xml
```

**11. Merge the branch into master**

```bash
git merge GitWork
```

Git stops with:

```
Auto-merging hello.xml
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts and then commit the result.
```

**12. Observe the conflict markup**

```bash
cat hello.xml
```

```xml
<<<<<<< HEAD
<greeting>
  <message>Hello from master branch</message>
</greeting>
=======
<greeting>
  <message>Hello from GitWork branch</message>
</greeting>
<!-- updated on GitWork -->
>>>>>>> GitWork
```

**13. Use a 3-way merge tool to resolve the conflict**

```bash
git mergetool -t p4merge
```

P4Merge opens with three panes — **yours** (master), **theirs**
(GitWork), and **base** — plus the merged result pane. Pick/combine the
lines you want (e.g. keep a single `<message>` and the update comment),
save, and close the tool.

If resolving manually instead, edit `hello.xml` directly and remove the
`<<<<<<<`, `=======`, `>>>>>>>` markers, keeping the content you want:

```xml
<greeting>
  <message>Hello from master and GitWork branches (merged)</message>
</greeting>
<!-- updated on GitWork -->
```

**14. Commit the resolved merge**

```bash
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml between master and GitWork"
```

**15. Check status and add the mergetool backup file to `.gitignore`**

`git mergetool` leaves a backup file (`hello.xml.orig`) behind:

```bash
git status
```

```
Untracked files:
        hello.xml.orig
```

```bash
echo "*.orig" >> .gitignore
```

**16. Commit the `.gitignore` update**

```bash
git add .gitignore
git commit -m "Ignore .orig backup files left by git mergetool"
```

**17. List all available branches**

```bash
git branch -a
```

**18. Delete the branch now merged into master**

```bash
git branch -d GitWork
```

**19. Observe the final log**

```bash
git log --oneline --graph --decorate
```

You'll see a merge commit joining the two diverging histories, with the
conflict-resolution commit right after it.
