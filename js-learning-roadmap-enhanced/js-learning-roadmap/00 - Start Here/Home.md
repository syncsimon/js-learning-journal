---
title: Home
type: dashboard
---

# 🏠 Learning Dashboard

> [!quote] The rule
> **Read a little. Practise a lot. Build something. Explain it. Commit the real work.**

## Live progress dashboard

> [!info] Interactive tracking
> Use the status dropdown near the top of each stage note. The cards below update from those properties. Card background colours indicate each stage's status.

```dataviewjs
const folders = [
  "01 - Foundations",
  "02 - Core JavaScript",
  "03 - Deeper JavaScript",
  "04 - Asynchronous JavaScript",
  "05 - Quality and Capstone"
];
const stages = folders
  .flatMap(folder => dv.pages(`"${folder}"`).where(p => p.stage !== undefined).array())
  .sort((a, b) => a.stage - b.stage);
const total = stages.length;
const done = stages.filter(p => String(p.status ?? "Not Started").toLowerCase() === "done").length;
const active = stages.filter(p => String(p.status ?? "Not Started").toLowerCase() === "in progress").length;
const percent = total ? Math.round(done / total * 100) : 0;
const summary = dv.container.createEl("div", { cls: "roadmap-summary" });
summary.createEl("div", { cls: "roadmap-metric", text: `${percent}% complete` });
summary.createEl("div", { cls: "roadmap-subtext", text: `${done} of ${total} stages done · ${active} in progress` });
const bar = summary.createEl("div", { cls: "roadmap-progress-track" });
bar.createEl("div", { cls: "roadmap-progress-fill", attr: { style: `width: ${percent}%` } });
const grid = dv.container.createEl("div", { cls: "roadmap-grid" });
for (const page of stages) {
  const status = String(page.status ?? "Not Started");
  const slug = status.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
  const card = grid.createEl("div", { cls: `roadmap-card roadmap-status-${slug}` });
  const link = card.createEl("a", { cls: "internal-link roadmap-card-title", text: `Stage ${page.stage} — ${page.title}`, attr: { "data-href": page.file.path, href: page.file.path } });
  card.createEl("span", { cls: "roadmap-status-label", text: status });
}
```

### Status legend

- <span class="roadmap-inline-status roadmap-inline-not-started">Not Started</span> — not begun yet
- <span class="roadmap-inline-status roadmap-inline-in-progress">In Progress</span> — currently learning or practising
- <span class="roadmap-inline-status roadmap-inline-done">Done</span> — can explain and apply the material independently

## Current focus

- **Current stage:** [[../01 - Foundations/Stage 0 - Setup and Workflow|Stage 0 — Setup and Workflow]]
- **Current project:** Learning repository setup
- **Start here:** [[../01 - Foundations/Stage 0 - Setup and Workflow|Open the current stage]]

## Progress checklist

### Foundations
- [ ] [[../01 - Foundations/Stage 0 - Setup and Workflow|Stage 0 — Setup and Workflow]]
- [ ] [[../01 - Foundations/Stage 1 - Values and Control Flow|Stage 1 — Values and Control Flow]]

### Core JavaScript
- [ ] [[../02 - Core JavaScript/Stage 2 - Functions and Errors|Stage 2 — Functions and Errors]]
- [ ] [[../02 - Core JavaScript/Stage 3 - Strings Arrays and Objects|Stage 3 — Strings, Arrays and Objects]]

### Deeper JavaScript
- [ ] [[../03 - Deeper JavaScript/Stage 4 - Scope Closures and Objects|Stage 4 — Scope, Closures and Objects]]
- [ ] [[../03 - Deeper JavaScript/Stage 5 - Language Tools|Stage 5 — Language Tools]]

### Async and job-ready habits
- [ ] [[../04 - Asynchronous JavaScript/Stage 6 - Async Fundamentals|Stage 6 — Async Fundamentals]]
- [ ] [[../05 - Quality and Capstone/Stage 7 - Modules Testing and Debugging|Stage 7 — Modules, Testing and Debugging]]
- [ ] [[../05 - Quality and Capstone/Stage 8 - Capstone Membership Engine|Stage 8 — Capstone Membership Engine]]

## Weekly routine

- [ ] Choose one small, specific learning target.
- [ ] Read the short lesson and try the drills.
- [ ] Spend more time coding than watching videos.
- [ ] Finish or improve one tangible artifact.
- [ ] Test edge cases and write a short reflection.
- [ ] Commit and push meaningful changes.
- [ ] Review the previous week's weak topics.

## Quick links

- [[Learning Log]]
- [[Git and GitHub Workflow]]
- [[../06 - Resources/Resource Index|Resource Index]]
- [[../07 - Templates/Topic Notes Template|Topic Notes Template]]
- [[../07 - Templates/Project Template|Project Template]]
- [[../07 - Templates/Weekly Review Template|Weekly Review Template]]

## Notes to self

> [!note] Keep this small
> Write down questions, bugs, and concepts you cannot yet explain. Do not turn note-taking into a substitute for coding.
