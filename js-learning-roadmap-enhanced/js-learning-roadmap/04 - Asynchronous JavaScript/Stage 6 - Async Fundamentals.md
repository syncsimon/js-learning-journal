---
title: Stage 6 - Async Fundamentals
stage: 6
status: Not Started
---

# ⏳ Stage 6 — Asynchronous JavaScript

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Understand how asynchronous work is represented and coordinated, without introducing network, browser, or Node-specific APIs.

## 6.1 Synchronous execution and the event loop

- [ ] Synchronous versus asynchronous work.
- [ ] Call stack and queued callbacks at a conceptual level.
- [ ] Understand why a timer callback is not immediate (conceptual only; no runtime timer exercises required).
- [ ] Promise jobs/microtasks versus task queue at a high level.
- [ ] Predict the ordering of simple logs involving promises and synchronous code.
- [ ] Avoid claiming JavaScript executes all asynchronous work in parallel.

## 6.2 Promises

- [ ] Promise states: pending, fulfilled, rejected.
- [ ] Create a promise for learning purposes.
- [ ] `.then()`, `.catch()`, and `.finally()`.
- [ ] Return values from `.then()` callbacks.
- [ ] Promise chaining.
- [ ] Error propagation through a chain.
- [ ] Why forgetting to return a promise breaks the intended chain.
- [ ] `Promise.resolve()` and `Promise.reject()`.

### Drills

- [ ] Predict output order for synchronous logs and promise callbacks.
- [ ] Chain two simulated asynchronous jobs.
- [ ] Propagate a failure and recover with `.catch()`.
- [ ] Compare returning a value with returning a promise.

## 6.3 `async` / `await`

- [ ] An `async` function always returns a promise.
- [ ] `await` unwraps a fulfilled promise or throws on rejection.
- [ ] Use `try/catch` around awaited work.
- [ ] Sequential `await` versus starting independent work together.
- [ ] Avoid unnecessary `await` when returning a promise directly is clearer.
- [ ] Know that async syntax does not itself create background threads.

## 6.4 Promise combinators and concurrency

- [ ] `Promise.all()`.
- [ ] `Promise.allSettled()`.
- [ ] `Promise.race()`.
- [ ] `Promise.any()`.
- [ ] Choose the combinator based on the desired failure/result behaviour.
- [ ] Understand concurrency limits conceptually.
- [ ] Use only controlled simulated tasks in this track.

## Project: Async Job Scheduler Simulation

Create functions that simulate delayed jobs using promises, without using runtime timer APIs or networking. A job may resolve/reject through a manually controlled promise or deterministic test harness.

- [ ] Represent jobs with IDs, statuses, and outcomes.
- [ ] Run independent jobs together with `Promise.all()`.
- [ ] Collect every outcome with `Promise.allSettled()`.
- [ ] Handle one failed job without losing the full status report.
- [ ] Use `async`/`await` and clear error handling.
- [ ] Demonstrate sequential versus concurrent orchestration.
- [ ] Add tests for success, failure, empty job lists, and mixed outcomes.
- [ ] Document why the simulation is not a real scheduler/runtime.
- [ ] Commit and push.

> [!success] Self-test before marking this stage Done
> Close your notes and explain the key ideas aloud. Rebuild the project from a blank file, test normal and edge cases, and explain one bug you fixed. Set the status to **Done** only when you can do this independently.

## Done when…

- [ ] I can predict basic synchronous/promise log order.
- [ ] I can explain promise chaining and rejection propagation.
- [ ] I can choose the correct Promise combinator.
- [ ] I can write readable `async`/`await` code with error handling.

## Resources

- [MDN: Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS)
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Async JavaScript — English YouTube search](https://www.youtube.com/results?search_query=JavaScript+event+loop+promises+async+await+English)
- [Async JavaScript — Hindi YouTube search](https://www.youtube.com/results?search_query=JavaScript+event+loop+promises+async+await+Hindi)
