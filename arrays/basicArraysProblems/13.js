// Q8. Array transformation challenge
// Problem: Perform the following operations in order:
// 1. Remove the last element.
// 2. Remove the first element.
// 3. Add 100 to the end.
// 4. Add 1 to the beginning.
// 5. Add 200 to the end.

let arr =[10, 20, 30, 40, 50];
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.push(100);
console.log(arr);
arr.unshift(1);
console.log(arr);
arr.push(200);
console.log(arr);
