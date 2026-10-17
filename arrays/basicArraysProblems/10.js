// Problem: Perform the following operations in order:
// 1. Add 40 to the end.
// 2. Add 5 to the beginning.
// 3. Remove the last element.
// 4. Remove the first element.

let arr = [10,20,30];
arr.push(40);
console.log(arr);  //to track the results
arr.unshift(5);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);