---
title: Stage 4 - Scope Closures and Objects
stage: 4
status: Not Started
---

# 🧠 Stage 4 — Scope, Closures and the Object Model

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Understand where values live, how functions retain access to variables, and how JavaScript object behaviour works.

## 4.1 Scope and execution

- [ ] Global, function, and block scope.
- [ ] Lexical scope.
- [ ] `let`/`const` versus `var`.
- [ ] Temporal Dead Zone (TDZ).
- [ ] Variable shadowing.
- [ ] Call stack at a conceptual level.
- [ ] Hoisting: what is created/available and when.
- [ ] Avoid accidental global variables.

### Drills

- [ ] Predict output for nested scopes.
- [ ] Find and explain a TDZ error.
- [ ] Demonstrate shadowing without confusing variable names.
- [ ] Explain why a block-scoped variable is unavailable outside its block.

## 4.2 Closures

- [ ] Understand a closure as a function plus access to its lexical environment.
- [ ] Return a function from another function.
- [ ] Use closures to preserve private state.
- [ ] Understand closures in loops and callbacks.
- [ ] Recognise when a closure keeps data reachable longer than expected.

### Drills

- [ ] Build a counter factory.
- [ ] Build a function that remembers a configured discount.
- [ ] Create independent counters and show that their state does not collide.
- [ ] Explain what variables a returned function can still access.

## 4.3 `this`, prototypes, and classes

- [ ] Understand that `this` depends on how a function is called.
- [ ] Method calls and lost method context.
- [ ] Arrow functions do not create their own `this`.
- [ ] `call`, `apply`, and `bind` at a practical level.
- [ ] Prototype chain and property lookup.
- [ ] Constructor functions (recognition).
- [ ] `class`, `constructor`, instance methods, and `extends`.
- [ ] Composition versus inheritance.
- [ ] Prefer simple object/function designs when classes add no value.

### Drills

- [ ] Compare a method call with a detached function call.
- [ ] Bind a method and verify its `this`.
- [ ] Demonstrate inherited property lookup.
- [ ] Create a small class and a subclass, then decide whether inheritance is justified.
- [ ] Check own properties versus inherited properties.

## Project: Configurable Rules Engine

Build a rules engine that evaluates a record against configurable business rules.

- [ ] Represent rules as functions.
- [ ] Create a factory that closes over configuration.
- [ ] Support multiple independent rule sets.
- [ ] Define a clear contract for rule input and output.
- [ ] Use classes only if they make the design clearer.
- [ ] Test missing fields, boundary values, and conflicting rules.
- [ ] Explain where closure state lives and how `this` is used (if used).
- [ ] Write a README with design choices.
- [ ] Commit and push.

> [!success] Self-test before marking this stage Done
> Close your notes and explain the key ideas aloud. Rebuild the project from a blank file, test normal and edge cases, and explain one bug you fixed. Set the status to **Done** only when you can do this independently.

## Done when…

- [ ] I can trace scope without relying on guesswork.
- [ ] I can explain closures with a concrete example.
- [ ] I can predict `this` for common call patterns.
- [ ] I understand the prototype chain and do not use classes automatically.

## Resources

- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [MDN: `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Scope and closures — English YouTube search](https://www.youtube.com/results?search_query=JavaScript+scope+closures+this+prototype+chain+English)
- [Scope and closures — Hindi YouTube search](https://www.youtube.com/results?search_query=JavaScript+scope+closures+this+prototype+Hindi)
