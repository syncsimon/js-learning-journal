---
title: Git and GitHub Workflow
type: workflow
---

# 🔁 Git and GitHub Workflow

Use Git from the first day. The goal is to build a useful history of real learning, not to manufacture green squares.

## One-time setup

- [ ] Install Git and verify it with `git --version`.
- [ ] Configure your name: `git config --global user.name "Your Name"`.
- [ ] Configure your GitHub-verified email: `git config --global user.email "you@example.com"`.
- [ ] Create a GitHub repository for the roadmap.
- [ ] Add a README explaining the learning goal and folder structure.
- [ ] Clone the repository locally or initialise Git in the project folder and connect the remote.
- [ ] Make the first real commit and push it.

> [!warning] Email privacy
> Use an email verified by GitHub. If you prefer privacy, use the GitHub-provided `noreply` address and configure it correctly.

## Daily workflow

Run these commands from the repository root:

```bash
git status
git diff
git add "path/to/the-file.md" "path/to/assignment.js"
git diff --cached
git commit -m "Add conditionals practice"
git push
```

- [ ] Check `git status` before and after the session.
- [ ] Review `git diff` before staging.
- [ ] Stage specific files when possible; avoid blindly staging secrets or generated files.
- [ ] Use a message that describes the actual change.
- [ ] Push work when a useful checkpoint is ready.

## Good commit messages

Examples:

- `Add number and string conversion drills`
- `Solve loop boundary exercises`
- `Add expense calculator project`
- `Fix discount calculation for zero subtotal`
- `Document promise error handling examples`

Avoid vague messages such as `update`, `stuff`, `changes`, or commits containing no meaningful work.

## Repository structure suggestion

```text
js-learning-roadmap/
├── README.md
├── 00 - Start Here/
├── 01 - Foundations/
├── 02 - Core JavaScript/
├── 03 - Deeper JavaScript/
├── 04 - Asynchronous JavaScript/
├── 05 - Quality and Capstone/
├── 06 - Resources/
├── 07 - Templates/
└── practice/
    ├── stage-01/
    ├── stage-02/
    └── ...
```

Keep runnable `.js` exercises and projects in a `practice/` directory in the Git repository if you prefer to separate code from Obsidian notes. Markdown checkboxes track learning; source files demonstrate it.

## After the first 1–2 weeks

- [ ] Create a branch for a project or a substantial change.
- [ ] Push the branch.
- [ ] Open a pull request against your default branch.
- [ ] Review the diff as if a teammate wrote it.
- [ ] Leave a short review comment or checklist.
- [ ] Merge when the work is ready.

## Contribution graph troubleshooting

If a genuine contribution does not appear, check:

- [ ] The commit email is verified on GitHub.
- [ ] The repository is not a fork if the activity type requires a non-fork repository.
- [ ] The commit is on the default branch or merged into it, where required.
- [ ] Repository visibility and GitHub contribution settings allow it to count.
- [ ] The commit date and time are correct.

**Do not** make empty commits, create fake changes, or edit random files only for green squares. Real, useful progress is the goal.
