---
title: Stage 3 - Strings Arrays and Objects
stage: 3
status: Not Started
---

# 🧺 Stage 3 — Strings, Arrays and Objects

> [!info] Stage status
**Stage status:** INPUT[inlineSelect(option(Not Started), option(In Progress), option(Done)):status]

> [!tip] Recommended study flow
> **Concepts → Warm-up → Core drills → Challenge → Project → Self-test.** Start with the easiest drills, then solve the rest without notes. For a challenge, change one requirement or add an edge case.


> [!goal] Outcome
> Represent, inspect, transform, and summarise real-world data using JavaScript's core data structures.

## 3.1 Strings

- [ ] String literals and escaping.
- [ ] Template literals.
- [ ] `length`, indexing, and character access.
- [ ] Immutability of strings.
- [ ] `slice`, `includes`, `startsWith`, `endsWith`.
- [ ] `trim`, `toLowerCase`, `toUpperCase`.
- [ ] `split` and `join`.
- [ ] Basic Unicode awareness: a visible character is not always one UTF-16 code unit.
- [ ] Avoid brittle assumptions about whitespace and casing.

### Drills

- [ ] Normalise a user's name for comparison.
- [ ] Count words in a sentence (define how punctuation is treated).
- [ ] Convert a delimited string into a list and back.
- [ ] Test empty strings, leading/trailing spaces, and mixed case.

## 3.2 Arrays

- [ ] Create, read, update, and inspect arrays.
- [ ] Indexes and `length`.
- [ ] Mutating methods: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`.
- [ ] Non-mutating transformations: `slice`, `concat`, `map`, `filter`, `flatMap`.
- [ ] Aggregation: `reduce`.
- [ ] Searching: `find`, `findIndex`, `includes`, `some`, `every`.
- [ ] `for...of` versus classic `for`.
- [ ] Mutation versus creating a new array.
- [ ] Sorting numbers correctly with a comparator.
- [ ] Avoid mutating an array while iterating unless the behaviour is deliberate.

### Drills

- [ ] Filter records by status.
- [ ] Transform a list of prices into discounted prices.
- [ ] Find the first matching record and all matching records.
- [ ] Compute a sum with `reduce`, then solve it with a loop.
- [ ] Sort numeric values ascending and descending.
- [ ] Explain which methods mutate the original array.

## 3.3 Objects

- [ ] Object literals and key-value pairs.
- [ ] Dot notation and bracket notation.
- [ ] Add, update, and delete properties.
- [ ] Computed property names.
- [ ] Nested objects and arrays.
- [ ] Object destructuring.
- [ ] Spread syntax for objects and arrays.
- [ ] `Object.keys`, `Object.values`, `Object.entries`.
- [ ] Optional chaining (`?.`) and nullish coalescing (`??`).
- [ ] Reference values versus primitive values.
- [ ] Shallow copying versus shared nested references.
- [ ] Check own properties with `Object.hasOwn()`.
- [ ] Know that `in` also checks the prototype chain.

### Drills

- [ ] Build and update a product record.
- [ ] Use a variable as a property key.
- [ ] Copy an object and demonstrate a shallow-copy limitation.
- [ ] Safely read a nested optional property.
- [ ] Compare `Object.hasOwn(obj, key)` with `key in obj`.

## 3.4 Sets and Maps

- [ ] Understand why `Set` is useful for unique values.
- [ ] `add`, `has`, `delete`, and iteration on a `Set`.
- [ ] Understand `Map` as a key-value collection.
- [ ] `set`, `get`, `has`, `delete`, and iteration on a `Map`.
- [ ] Compare `Map` with a plain object for different use cases.

## Project: Inventory and Sales Analyzer

Use an in-memory array of product and sales records.

- [ ] Model products with IDs, names, prices, and stock counts.
- [ ] Find low-stock products.
- [ ] Calculate stock value.
- [ ] Apply a discount without mutating source records unintentionally.
- [ ] Summarise sales by product using a `Map` or object.
- [ ] Identify duplicate product IDs using a `Set`.
- [ ] Sort products by price and stock.
- [ ] Handle empty input, missing fields, zero stock, and duplicate records.
- [ ] Add tests or clearly documented manual test cases.
- [ ] Write a README with sample data and output.
- [ ] Commit and push.

> [!success] Self-test before marking this stage Done
> Close your notes and explain the key ideas aloud. Rebuild the project from a blank file, test normal and edge cases, and explain one bug you fixed. Set the status to **Done** only when you can do this independently.

## Done when…

- [ ] I can choose an appropriate structure for a data problem.
- [ ] I know when array methods mutate the original data.
- [ ] I can explain references and shallow copies.
- [ ] I can transform and aggregate records without making the code hard to read.

## Resources

- [MDN: Text formatting / strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
- [MDN: Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- [MDN: Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)
- [MDN: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [Arrays and objects — English YouTube search](https://www.youtube.com/results?search_query=JavaScript+arrays+objects+map+filter+reduce+English)
- [Arrays and objects — Hindi YouTube search](https://www.youtube.com/results?search_query=JavaScript+arrays+objects+map+filter+reduce+Hindi)
