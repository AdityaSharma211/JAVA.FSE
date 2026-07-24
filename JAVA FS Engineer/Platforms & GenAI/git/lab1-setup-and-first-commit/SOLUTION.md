# Lab 1 — Setup, Notepad++ Integration, First Commit

Estimated time: 30 minutes

## Step 1 — Setup your machine with Git configuration

**1. Check Git is installed**

```bash
git --version
```

Expected output (version may differ):

```
git version 2.45.1.windows.1
```

**2. Set your global username and email**

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

**3. Verify the configuration**

```bash
git config --global --list
```

You should see `user.name` and `user.email` listed with the values you
just set.

## Step 2 — Integrate Notepad++ with Git and make it the default editor

**1. Check whether Git Bash can already see Notepad++**

```bash
notepad++
```

If Bash replies `command not found`, Notepad++'s install folder is not on
your `PATH`.

**2. Add Notepad++ to the PATH (Windows)**

Control Panel → System → Advanced system settings → Environment Variables
→ select the `Path` user variable → Edit → New → add the Notepad++
install folder, e.g.:

```
C:\Program Files\Notepad++
```

Restart Git Bash and re-run:

```bash
notepad++
```

It should now open the editor.

**3. Create a bash alias for Notepad++**

```bash
echo 'alias notepad++="/c/Program Files/Notepad++/notepad++.exe"' >> ~/.bashrc
source ~/.bashrc
```

**4. Configure Notepad++ as Git's default editor**

```bash
git config --global core.editor "notepad++ -multiinst -notabbar -nosession -noPlugin"
```

**5. Verify Notepad++ is the default editor**

```bash
git config --global -e
```

or

```bash
git config --global --list
```

You should see:

```
core.editor=notepad++ -multiinst -notabbar -nosession -noPlugin
```

(`-e` tells `git config` to *open the editor* rather than print to the
console — this itself is a way to confirm Notepad++ launches correctly.)

## Step 3 — Add a file to the source code repository

**1. Create the project folder and initialize Git**

```bash
mkdir GitDemo
cd GitDemo
git init
```

**2. Verify the repository was initialized (show hidden files)**

```bash
ls -la
```

You should see a hidden `.git` folder — this is your local repository.

**3. Create `welcome.txt` with content**

```bash
echo "Welcome to my first Git repository" > welcome.txt
```

**4. Verify the file was created**

```bash
ls -l
```

**5. Verify the content**

```bash
cat welcome.txt
```

**6. Check the status**

```bash
git status
```

Expected output:

```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        welcome.txt

nothing added to commit but untracked files present (use "git add" to track)
```

`welcome.txt` exists in the working directory but Git isn't tracking it
yet.

**7. Stage the file so Git tracks it**

```bash
git add welcome.txt
```

**8. Commit with a multi-line message (opens Notepad++)**

```bash
git commit
```

This opens Notepad++ (your configured editor). Type a commit message,
e.g.:

```
Add welcome.txt

Initial file added to the GitDemo repository.
```

Save and close Notepad++ to complete the commit.

**9. Confirm local repository matches the working directory**

```bash
git status
```

Expected output:

```
On branch master
nothing to commit, working tree clean
```

`welcome.txt` is now committed to the local repository.

**10. Create a remote repository**

On GitHub/GitLab, sign up (do not use company credentials) and create a
new remote repository named `GitDemo`. Copy its HTTPS URL.

```bash
git remote add origin https://github.com/<your-username>/GitDemo.git
```

**11. Pull from the remote (in case it has a README/license)**

```bash
git pull origin master --allow-unrelated-histories
```

> Newer GitHub repos default to branch `main` rather than `master` —
> use whichever name your remote actually created.

**12. Push local commits to the remote**

```bash
git push origin master
```

Your `welcome.txt` commit is now on GitHub/GitLab.
