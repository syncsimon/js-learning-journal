---
title: JavaScript Learning Roadmap
type: learning-hub
status: active
---

# 🧭 JavaScript Learning Roadmap

> [!abstract] Goal
> Learn **JavaScript itself**, from beginner to confident language-level problem solver, using short lessons, deliberate practice, small projects, tests, and a real Git/GitHub workflow.

This vault is designed for **Obsidian**. Copy the `js-learning-roadmap` folder into your vault, then open `00 - Start Here/Home.md`.

## Obsidian UI setup

For the enhanced dashboard and dropdown controls, install these community plugins:

1. **Meta Bind** — provides the inline status dropdown on stage and template notes.
2. **Dataview** — renders the live dashboard, completion percentage, and status-coloured stage cards on `00 - Start Here/Home.md`.

Then enable the included CSS snippet:

1. Open **Settings → Appearance → CSS snippets** and enable `roadmap-ui.css`. If you copied this folder inside an existing vault, copy `.obsidian/snippets/roadmap-ui.css` into that vault’s actual `.obsidian/snippets/` folder first.
2. In **Settings → Community plugins → Dataview**, enable **Enable JavaScript Queries**.
3. Open `00 - Start Here/Home.md`.

Status options are **Not Started**, **In Progress**, and **Done**. Change the status dropdown on each stage note; the dashboard reads the `status` frontmatter property. The coloured backgrounds apply to dashboard cards, not the entire note. Existing checklists and lesson content remain in place.

Without these plugins, the Markdown notes and checklists still work; only the dropdown controls and live dashboard require the plugins.

## How to use this roadmap

- [ ] Read the short lesson for the current topic.
- [ ] Work through the drills without looking at solutions first.
- [ ] Complete the linked assignment or project.
- [ ] Test edge cases and write down anything confusing.
- [ ] Commit meaningful work and push it to GitHub.
- [ ] Mark a topic complete only when you can explain it and use it without copying.

> [!tip] Track progress honestly
> Checkboxes represent demonstrated understanding, not merely having read a page. If a concept becomes shaky later, uncheck it and revisit it.

## Roadmap at a glance

| Stage | Focus | Project | Status |
|---|---|---|---|
| [[01 - Foundations/Stage 0 - Setup and Workflow\|Stage 0]] | Terminal, editor, Git/GitHub | Learning repository | `Not started` |
| [[01 - Foundations/Stage 1 - Values and Control Flow\|Stage 1]] | Values, types, operators, conditions, loops | Expense summary calculator | `Not started` |
| [[02 - Core JavaScript/Stage 2 - Functions and Errors\|Stage 2]] | Functions, parameters, errors, reuse | Calculator toolkit | `Not started` |
| [[02 - Core JavaScript/Stage 3 - Strings Arrays and Objects\|Stage 3]] | Strings, arrays, objects, collections | Inventory and sales analyzer | `Not started` |
| [[03 - Deeper JavaScript/Stage 4 - Scope Closures and Objects\|Stage 4]] | Scope, closures, `this`, prototypes, classes | Rules engine | `Not started` |
| [[03 - Deeper JavaScript/Stage 5 - Language Tools\|Stage 5]] | Destructuring, regex, iterators, recursion, complexity | Data-processing challenge set | `Not started` |
| [[04 - Asynchronous JavaScript/Stage 6 - Async Fundamentals\|Stage 6]] | Event loop, promises, `async`/`await`, concurrency | Async job scheduler simulation | `Not started` |
| [[05 - Quality and Capstone/Stage 7 - Modules Testing and Debugging\|Stage 7]] | Modules, tests, debugging, code quality | Tested module package | `Not started` |
| [[05 - Quality and Capstone/Stage 8 - Capstone Membership Engine\|Stage 8]] | Combine the language skills | Membership domain engine | `Not started` |

## Learning rules

- **Language first:** no DOM, CSS, browser APIs, Node-specific APIs, backend frameworks, or databases in this track.
- **Terminal execution only:** use Node.js only as a JavaScript file runner if needed. Do not use Node APIs such as `fs`, `process`, or `readline` in this track.
- **Input limitation:** JavaScript has no built-in, standard interactive terminal-input API. Early programs use sample data and function calls; terminal input can be learned later in a runtime-focused track.
- **Practice before videos:** attempt each exercise first; use a video or reference when stuck, then close it and reproduce the idea yourself.
- **Projects after topic groups:** each stage ends with a project or a set of applied challenges.

## GitHub contribution habits

- [ ] Use one public or private learning repository with a clear README.
- [ ] Commit actual progress with messages that explain the change.
- [ ] Push completed work regularly; check `git status` before finishing.
- [ ] Keep a small `learning-log.md` or stage notes when useful.
- [ ] Use branches and pull requests after the first week or two, even for self-review.
- [ ] Never create empty commits or meaningless edits just to fill the contribution graph.

> [!warning] Contribution graph
> Green squares depend on GitHub's eligibility rules, repository visibility, commit email, default branch, and other settings. Prioritise a useful repository and consistent learning over the graph itself.

## Folder map

- `00 - Start Here/` — dashboard, weekly plan, learning log, Git workflow.
- `01 - Foundations/` — setup and beginner language fundamentals.
- `02 - Core JavaScript/` — functions, errors, strings, arrays, objects.
- `03 - Deeper JavaScript/` — scope, object model, advanced language tools.
- `04 - Asynchronous JavaScript/` — async behaviour and promises.
- `05 - Quality and Capstone/` — modules, testing, debugging, capstone.
- `06 - Resources/` — curated references and video-search links.
- `07 - Templates/` — reusable project and reflection templates.

## Completion standard

A stage is complete when you can:

1. Explain each key idea in your own words.
2. Solve its drills without copying.
3. Complete the project and test meaningful edge cases.
4. Read and improve your own code.
5. Commit and push the work with a useful README.
