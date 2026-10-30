---
title: Stage 2 - Functions and Errors
stage: 2
status: Not Started
---

# 🧩 Stage 2 — Functions and Errors

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Break problems into small reusable functions and make invalid situations explicit.

## 2.1 Functions

- [ ] Function declarations.
- [ ] Function expressions.
- [ ] Arrow functions and their syntax.
- [ ] Parameters, arguments, and default parameters.
- [ ] Return values versus printing output.
- [ ] Local variables and function scope (full scope model in Stage 4).
- [ ] Pure functions and side effects.
- [ ] Function composition.
- [ ] Callbacks as values passed to functions.
- [ ] Early returns and guard clauses.
- [ ] Rest parameters (`...args`).

### Drills

- [ ] Write a function to calculate tax and return the result.
- [ ] Write a function that validates a value and returns a boolean.
- [ ] Refactor repeated calculations into reusable functions.
- [ ] Pass a function into another function.
- [ ] Trace the call stack for nested function calls.

## 2.2 Errors and defensive programming

- [ ] Syntax errors versus runtime errors versus logic errors.
- [ ] Read an error message and locate the failing line.
- [ ] `throw new Error(...)`.
- [ ] `try`, `catch`, and `finally`.
- [ ] Validate function inputs at the boundary.
- [ ] Avoid silently hiding errors.
- [ ] Use clear error messages.
- [ ] Decide whether to return a result, a sentinel, or throw an error.

### Drills

- [ ] Reject a negative quantity where it is invalid.
- [ ] Handle a missing required argument.
- [ ] Throw a clear error for an unsupported operation.
- [ ] Deliberately trigger an error, then diagnose and fix it.
- [ ] Distinguish an invalid input from a valid zero value.

## Project: Calculator Toolkit

- [ ] Implement arithmetic functions with clear return values.
- [ ] Add input validation for unsupported operations and invalid numbers.
- [ ] Add percentage and discount helpers.
- [ ] Compose multiple functions to calculate a final total.
- [ ] Keep calculation logic separate from output formatting.
- [ ] Add tests for normal, boundary, and invalid cases.
- [ ] Document function contracts and example calls.
- [ ] Commit and push the finished toolkit.

> [!success] Self-test before marking this stage Done
> Close your notes and explain the key ideas aloud. Rebuild the project from a blank file, test normal and edge cases, and explain one bug you fixed. Set the status to **Done** only when you can do this independently.

## Done when…

- [ ] I can explain the difference between a parameter and an argument.
- [ ] I know when a function should return a value rather than print it.
- [ ] I can trace a function call and diagnose a thrown error.
- [ ] I can split a problem into small, named functions.

## Resources

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript functions — English YouTube search](https://www.youtube.com/results?search_query=JavaScript+functions+parameters+return+callbacks+English)
- [JavaScript functions — Hindi YouTube search](https://www.youtube.com/results?search_query=JavaScript+functions+return+value+Hindi)
