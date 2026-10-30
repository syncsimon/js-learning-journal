---
title: Stage 7 - Modules Testing and Debugging
stage: 7
status: Not Started
---

# 🧪 Stage 7 — Modules, Testing and Debugging

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Organise code across files, verify behaviour systematically, and make code changes safely.

## 7.1 ES modules

- [ ] Understand why modules exist.
- [ ] Named exports and imports.
- [ ] Default exports and imports.
- [ ] Import paths and file extensions as required by the runtime setup.
- [ ] Keep module responsibilities focused.
- [ ] Avoid circular dependencies in beginner projects.
- [ ] Distinguish JavaScript language modules from runtime-specific module configuration.

## 7.2 Testing

- [ ] Understand unit tests and integration tests.
- [ ] Write arrange/act/assert test cases.
- [ ] Test return values, errors, and edge cases.
- [ ] Use a test runner such as Vitest for projects if desired.
- [ ] Keep business logic independent of terminal output.
- [ ] Use deterministic sample data.
- [ ] Avoid tests that only repeat the implementation's assumptions.
- [ ] Learn to test behaviour, not private implementation details.

## 7.3 Debugging and code quality

- [ ] Read stack traces from top to bottom and identify the relevant frame.
- [ ] Reproduce a bug with the smallest failing example.
- [ ] Inspect variables and expressions in an editor debugger or temporary logs.
- [ ] Use linting/formatting tools when introduced in a project.
- [ ] Name variables and functions by intent.
- [ ] Replace duplicated logic with a well-named helper when appropriate.
- [ ] Keep functions focused and avoid premature abstraction.
- [ ] Refactor only while tests remain green.
- [ ] Review a diff before committing.

## Project: Tested Module Package

- [ ] Split the calculator or data-processing project into logical modules.
- [ ] Export only the public functions needed by consumers.
- [ ] Add unit tests for core functions.
- [ ] Add tests for error cases and boundary values.
- [ ] Add clear run/test instructions to the README.
- [ ] Verify a fresh clone can run the project using the documented steps.
- [ ] Fix one deliberately introduced bug and document how it was diagnosed.
- [ ] Review names, duplication, and module boundaries.
- [ ] Commit and push.

> [!success] Self-test before marking this stage Done
> Close your notes and explain the key ideas aloud. Rebuild the project from a blank file, test normal and edge cases, and explain one bug you fixed. Set the status to **Done** only when you can do this independently.

## Done when…

- [ ] I can import/export functions between files.
- [ ] I can write a test that would fail if the behaviour were broken.
- [ ] I can reproduce and diagnose a bug systematically.
- [ ] I can make a small refactor with tests protecting the behaviour.

## Resources

- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Vitest documentation](https://vitest.dev/guide/)
- [Debugging JavaScript — English YouTube search](https://www.youtube.com/results?search_query=JavaScript+debugging+unit+testing+modules+English)
- [Debugging JavaScript — Hindi YouTube search](https://www.youtube.com/results?search_query=JavaScript+testing+debugging+Hindi)
