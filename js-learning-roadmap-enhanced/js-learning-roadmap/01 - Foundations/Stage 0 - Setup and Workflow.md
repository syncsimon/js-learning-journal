---
title: Stage 0 - Setup and Workflow
stage: 0
status: Not Started
---

# 🧰 Stage 0 — Setup and Workflow

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Run simple JavaScript files, use the terminal confidently, and keep your work in a GitHub repository from day one.

## 0.1 Understand the learning environment

- [ ] Know the difference between JavaScript (language) and a runtime (program that executes it).
- [ ] Understand that Node.js will initially be used only to run `.js` files.
- [ ] Know what is intentionally excluded: DOM, CSS, browser APIs, Node APIs, frameworks, and databases.
- [ ] Create a dedicated folder for the learning repository.
- [ ] Create a `README.md` with the goal, setup instructions, and learning plan.

## 0.2 Linux terminal essentials

- [ ] `pwd` — show current directory.
- [ ] `ls` and `ls -la` — list files.
- [ ] `cd` — change directory.
- [ ] `mkdir` — create directories.
- [ ] `touch` — create files.
- [ ] `cp` and `mv` — copy and move/rename files.
- [ ] `cat` and `less` — inspect text files.
- [ ] `head` and `tail` — inspect the beginning/end of a file.
- [ ] `grep` — search text.
- [ ] `find` — locate files.
- [ ] `rm` — remove files carefully.
- [ ] Understand relative paths, absolute paths, `.` and `..`.
- [ ] Use shell history and tab completion.
- [ ] Know how to interrupt a running command with `Ctrl+C`.

### Terminal drills

- [ ] Create `learning/notes`, `learning/practice`, and `learning/projects`.
- [ ] Create a text file, add content using an editor, and read it back.
- [ ] Find all `.js` files inside the practice folder.
- [ ] Rename a file and verify the result.
- [ ] Navigate to a parent directory and return to the project.

## 0.3 Run JavaScript

- [ ] Install a code editor.
- [ ] Install Node.js LTS if needed for execution.
- [ ] Verify `node --version`.
- [ ] Create `hello.js` containing `console.log("Hello, JavaScript!")`.
- [ ] Run it with `node hello.js`.
- [ ] Run a file from the correct working directory.
- [ ] Understand that `console.log()` is provided by the runtime, not part of the ECMAScript language specification itself.

> [!important] Terminal input limitation
> JavaScript does not provide a standard, built-in interactive terminal-input API. In this track, early exercises use sample data and function calls. Terminal input can be added later when studying runtime APIs.

## 0.4 Git and GitHub

- [ ] Follow [[../00 - Start Here/Git and GitHub Workflow|Git and GitHub Workflow]].
- [ ] Create a repository and make the first meaningful commit.
- [ ] Push to GitHub and verify the files appear.
- [ ] Edit a file and inspect `git diff`.
- [ ] Commit a second meaningful change.
- [ ] Learn the difference between working tree, staging area, commit, and remote.

## Mini-project: Learning repository

- [ ] Create the folder structure from the main roadmap.
- [ ] Add a README with setup and usage instructions.
- [ ] Add `practice/hello.js`.
- [ ] Add a short note explaining the difference between JavaScript and Node.js.
- [ ] Make at least three meaningful commits across real setup work.
- [ ] Push the repository and verify its contents.

> [!success] Self-test before marking this stage Done
> Close your notes and explain the key ideas aloud. Rebuild the project from a blank file, test normal and edge cases, and explain one bug you fixed. Set the status to **Done** only when you can do this independently.

## Done when…

- [ ] I can navigate folders and manage files without a tutorial.
- [ ] I can run a `.js` file and understand the command.
- [ ] I can explain the role of a runtime.
- [ ] I can commit and push changes to GitHub.
- [ ] I can show a clean, understandable repository.

## Resources

- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [GitHub: Getting started with Git](https://docs.github.com/en/get-started/using-git/about-git)
- [GitHub Skills](https://skills.github.com/)
- [Linux terminal basics — English YouTube search](https://www.youtube.com/results?search_query=linux+terminal+basics+for+beginners)
- [Linux terminal basics — Hindi YouTube search](https://www.youtube.com/results?search_query=linux+terminal+basics+Hindi+beginners)
