// Q6. Modify an array twice
// Problem: Perform the following operations in order:
// 1. Remove the first element.
// 2. Add 90 to the end.
// 3. Add 5 to the beginning.

let arr = [15, 25, 35, 45];
arr.shift();
arr.push(90);
arr.unshift(5);
console.log(arr);