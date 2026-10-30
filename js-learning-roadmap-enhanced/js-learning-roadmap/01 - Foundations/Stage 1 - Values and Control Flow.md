---
title: Stage 1 - Values and Control Flow
stage: 1
status: Not Started
---

# 🧱 Stage 1 — Values and Control Flow

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Understand primitive values, make decisions, repeat work, and solve small problems using clear step-by-step logic.

## 1.1 Values, variables, and types

- [x] Values and expressions.
- [x] `const` versus `let`; why to avoid `var` at first.
- [x] Naming variables clearly.
- [x] Primitive types: string, number, boolean, `undefined`, `null`, bigint, symbol (know the purpose of the less-common types).
- [x] `typeof` and its limitations.
- [x] Dynamic typing and reassignment.
- [ ] `NaN`, `Infinity`, and `-Infinity`.
- [ ] Truthy and falsy values.
- [ ] Strict equality (`===`, `!==`) versus loose equality (`==`, `!=`).
- [ ] Explicit conversion: `Number()`, `String()`, `Boolean()`.
- [ ] Distinguish numeric conversion from parsing strings.

### Drills

- [ ] Predict the type and result of at least 15 expressions before running them.
- [ ] Test `typeof null`, `typeof NaN`, and `Number.isNaN()`.
- [ ] Compare `0`, `"0"`, `""`, `null`, `undefined`, and `NaN` in conditions.
- [ ] Find examples where `Number()` and `parseInt()` differ.
- [ ] Explain why `===` is the default choice for equality checks.

## 1.2 Operators and expressions

- [ ] Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`.
- [ ] Operator precedence and parentheses.
- [ ] Assignment and compound assignment.
- [ ] Comparison operators.
- [ ] Logical operators: `&&`, `||`, `!`.
- [ ] Short-circuit evaluation.
- [ ] Nullish coalescing (`??`) and how it differs from `||`.
- [ ] Conditional (ternary) operator.
- [ ] Increment/decrement; understand prefix versus postfix before using them.
- [ ] Safe handling of invalid numbers and division by zero.

### Drills

- [ ] Build expressions for discounts, tax, totals, and remainders.
- [ ] Predict short-circuit results without running the code.
- [ ] Compare `value || fallback` with `value ?? fallback` for `0`, `false`, `""`, `null`, and `undefined`.
- [ ] Add parentheses to make a complex expression easy to read.

## 1.3 Decisions

- [ ] `if`, `else if`, and `else`.
- [ ] Nested conditions.
- [ ] Combining conditions with logical operators.
- [ ] `switch` and `break`.
- [ ] Guard clauses and early returns (preview; deepen in Stage 2).
- [ ] Order conditions from specific to general when necessary.

### Drills

- [ ] Convert a set of rules into an `if/else` chain.
- [ ] Write a grade classifier with boundary values.
- [ ] Write a shipping-fee rule with free-shipping thresholds.
- [ ] Test values immediately below, at, and above every threshold.

## 1.4 Loops

- [ ] `for` loops.
- [ ] `while` and `do...while`.
- [ ] `break` and `continue`.
- [ ] Loop counters and loop invariants.
- [ ] Accumulators and running totals.
- [ ] Off-by-one errors and termination conditions.
- [ ] Nested loops; understand their cost at a basic level.

### Drills

- [ ] Sum numbers in a range.
- [ ] Count values matching a condition.
- [ ] Find the largest of several numbers.
- [ ] Print a multiplication table.
- [ ] Reverse the digits of a positive integer.
- [ ] Test empty ranges, zero, negative values, and boundary values where relevant.

## Project: Expense Summary Calculator

Build a terminal-run script that works with a hard-coded sample array of expense records. Keep it language-only: no file reading or interactive input.

- [ ] Define sample expenses with category and amount.
- [ ] Calculate total spending.
- [ ] Calculate category totals.
- [ ] Find the largest expense.
- [ ] Count expenses above a threshold.
- [ ] Classify spending against a configurable budget.
- [ ] Handle an empty list and invalid numeric values deliberately.
- [ ] Print a readable summary.
- [ ] Add at least 8 test cases or manual checks.
- [ ] Write a README describing assumptions and sample output.
- [ ] Commit and push the project.

## Problem-solving routine

- [ ] Restate the problem in plain language.
- [ ] Write 2–3 sample inputs and expected outputs.
- [ ] Identify edge cases before coding.
- [ ] Solve with the simplest correct approach.
- [ ] Trace variables by hand for one example.
- [ ] Test, then refactor names and repeated logic.

> [!success] Self-test before marking this stage Done
> Close your notes and explain the key ideas aloud. Rebuild the project from a blank file, test normal and edge cases, and explain one bug you fixed. Set the status to **Done** only when you can do this independently.

## Done when…

- [ ] I can explain the result of an expression without guessing.
- [ ] I can choose between conditions and loops confidently.
- [ ] I test boundaries and empty cases.
- [ ] I can solve the project without copying a finished solution.

## Resources

- [MDN: Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [MDN: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript basics — English YouTube search](https://www.youtube.com/results?search_query=JavaScript+basics+variables+data+types+operators+English)
- [JavaScript basics — Hindi YouTube search](https://www.youtube.com/results?search_query=JavaScript+basics+variables+data+types+Hindi)
