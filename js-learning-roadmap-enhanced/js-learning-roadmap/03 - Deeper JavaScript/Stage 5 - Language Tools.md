---
title: Stage 5 - Language Tools
stage: 5
status: Not Started
---

# 🛠️ Stage 5 — Language Tools and Problem-Solving Patterns

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Become comfortable with common modern syntax, specialised language features, and basic algorithmic reasoning.

## 5.1 Destructuring and modern syntax

- [ ] Array destructuring.
- [ ] Object destructuring and renaming.
- [ ] Default values in destructuring.
- [ ] Rest syntax and spread syntax; distinguish their purposes.
- [ ] Optional chaining (`?.`).
- [ ] Nullish coalescing (`??`).
- [ ] Logical assignment operators (recognition and practical use).
- [ ] Template literals and concise object properties.
- [ ] Avoid clever syntax when a clear statement is easier to understand.

### Drills

- [ ] Extract values from nested records safely.
- [ ] Rename a destructured property.
- [ ] Use defaults without accidentally replacing valid falsy values.
- [ ] Refactor repetitive copying/assignment code using spread syntax.

## 5.2 Regular expressions

- [ ] Understand literals such as `/pattern/flags`.
- [ ] Character classes, quantifiers, anchors, and groups.
- [ ] `test`, `match`, `replace`, and `split`.
- [ ] Escape special characters correctly.
- [ ] Understand that regex can validate patterns but is not a universal parser.
- [ ] Avoid writing an overly complex regex for a simple task.

### Drills

- [ ] Check whether a string contains a sequence of digits.
- [ ] Replace repeated whitespace.
- [ ] Extract a simple code pattern from text.
- [ ] Test valid, invalid, empty, and unusual strings.

## 5.3 Iterators and generators

- [ ] Understand iterable versus iterator.
- [ ] Know what `Symbol.iterator` represents.
- [ ] Use `for...of` with built-in iterables.
- [ ] Write a simple generator with `function*` and `yield`.
- [ ] Understand lazy generation at a conceptual level.
- [ ] Recognise when a normal array is simpler.

## 5.4 Recursion and algorithmic thinking

- [ ] Identify a base case and recursive case.
- [ ] Trace recursive calls.
- [ ] Understand stack growth and recursion limits.
- [ ] Compare iterative and recursive solutions.
- [ ] Understand Big O notation at a beginner level: O(1), O(n), O(n²), O(log n).
- [ ] Distinguish time complexity from space complexity.
- [ ] Choose clear solutions before attempting clever optimisations.

### Drills

- [ ] Sum an array recursively and iteratively.
- [ ] Find the maximum value in a list.
- [ ] Count character frequencies with a `Map`.
- [ ] Remove duplicates while preserving order.
- [ ] Compare a nested-loop solution with a `Map`/`Set` solution.
- [ ] State the rough time complexity and why.

## Project: Data-Processing Challenge Set

- [ ] Solve 10 small data-transformation problems.
- [ ] Include at least two string/regex tasks.
- [ ] Include at least two `Map`/`Set` tasks.
- [ ] Include one recursive solution and an iterative alternative.
- [ ] Include at least one generator only where lazy values help.
- [ ] Add sample inputs, expected outputs, and edge cases.
- [ ] Explain the complexity of 3 solutions.
- [ ] Commit and push.

> [!success] Self-test before marking this stage Done
> Close your notes and explain the key ideas aloud. Rebuild the project from a blank file, test normal and edge cases, and explain one bug you fixed. Set the status to **Done** only when you can do this independently.

## Done when…

- [ ] I can use modern syntax without confusing defaults and falsy values.
- [ ] I can write and test a modest regular expression.
- [ ] I can explain iterable, iterator, and generator in my own words.
- [ ] I can identify a base case and estimate basic complexity.

## Resources

- [MDN: Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- [MDN: Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [MDN: Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [Big O and problem solving — English YouTube search](https://www.youtube.com/results?search_query=JavaScript+Big+O+recursion+generators+English)
- [Big O and problem solving — Hindi YouTube search](https://www.youtube.com/results?search_query=JavaScript+recursion+Big+O+Hindi)
