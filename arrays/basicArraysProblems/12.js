// Q7. Track the array after each operation
// Problem: Print the array after each of the following operations, in order:
// 1. Add 50 to the end.
// 2. Remove the first element.
// 3. Add 10 to the beginning.
// 4. Remove the last element.


let arr = [20, 30, 40];
console.log(arr); 
arr.push(50);
console.log(arr); //tracking the array
arr.shift();
console.log(arr); 
arr.unshift(10);
console.log(arr); 
arr.pop();
console.log(arr); 