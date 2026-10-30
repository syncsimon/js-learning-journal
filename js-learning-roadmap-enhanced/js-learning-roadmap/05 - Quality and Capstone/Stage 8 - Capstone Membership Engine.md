---
title: Stage 8 - Capstone Membership Engine
stage: 8
status: Not Started
---

# 🏁 Stage 8 — Capstone: Membership Domain Engine

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Demonstrate language-level competence by building a realistic, terminal-run in-memory domain engine with clean logic, modules, tests, and documentation.

This is **not** a web app. Do not add DOM, a backend framework, a database, or runtime-specific file/network APIs.

## Requirements

### Domain model

- [ ] Represent members with stable IDs, names, and contact labels suitable for sample data.
- [ ] Represent membership plans with a name, price, and billing interval.
- [ ] Represent memberships with start date, due date, status, and payment status.
- [ ] Define valid statuses and transitions.
- [ ] Keep domain rules separate from display formatting.
- [ ] Validate required fields and invalid values.

### Core behaviour

- [ ] Add a member to the in-memory collection.
- [ ] Search members by ID and name.
- [ ] Create a membership from a valid plan.
- [ ] Renew a membership and update the relevant dates.
- [ ] Mark a payment as received or not received.
- [ ] Determine overdue, active, and inactive membership states from explicit rules.
- [ ] Filter memberships by status and payment status.
- [ ] Summarise total expected payments and received payments.
- [ ] Produce a readable report from sample data.
- [ ] Handle unknown IDs, duplicate IDs, invalid dates, and invalid state transitions.

### Code design

- [ ] Use functions with clear input/output contracts.
- [ ] Use arrays, objects, `Map`, and `Set` where appropriate.
- [ ] Use modules to separate member, plan, membership, and reporting logic.
- [ ] Use classes only if they genuinely simplify the model.
- [ ] Use async code only for a clearly explained simulated workflow.
- [ ] Keep side effects and output formatting away from core domain calculations where possible.

### Verification

- [ ] Add tests for each core behaviour.
- [ ] Test normal, boundary, invalid, empty, and duplicate-data cases.
- [ ] Verify date comparisons around due dates.
- [ ] Test payment state changes and invalid transitions.
- [ ] Verify totals with hand-calculated examples.
- [ ] Run the full test suite before finalising.
- [ ] Review and fix confusing names, duplication, and unnecessary complexity.

### GitHub deliverables

- [ ] A clear repository README with project purpose and scope.
- [ ] Setup and run/test instructions that work from a fresh clone.
- [ ] Sample data and example output.
- [ ] A short design note explaining data structures and key decisions.
- [ ] Tests committed alongside implementation.
- [ ] Meaningful commit history that reflects actual development.
- [ ] At least one branch + pull request review if practical.
- [ ] No secrets, personal data, empty commits, or artificial contribution-graph activity.

## Final readiness checklist

- [ ] I can explain primitive types, coercion, operators, conditions, and loops.
- [ ] I can design functions and handle errors.
- [ ] I can transform data with strings, arrays, objects, `Map`, and `Set`.
- [ ] I understand scope, closures, `this`, and the prototype chain.
- [ ] I can use modern syntax, regex, iterators, recursion, and basic complexity reasoning.
- [ ] I understand promises, `async`/`await`, and Promise combinators.
- [ ] I can use modules, tests, and a debugger.
- [ ] I can explain the main design choices without reading the code.
- [ ] I can use Git/GitHub: branch, diff, commit, push, and review.
- [ ] I can take a new language-level problem from requirements to tested implementation.

## After this roadmap

Choose a separate next track based on your goal:

- **Runtime and backend:** Node.js APIs, terminal input, files, package management, HTTP, then a backend framework.
- **Web frontend:** HTML, CSS, DOM, browser APIs, accessibility, then a frontend framework.
- **Problem solving:** more data structures, algorithms, and timed practice.

Do not try to learn all three tracks at once.
