const fruits = ["apple" , "banana" , "orange"];
const vegetables = ["potato" , "tomato"];
const shoppingList = fruits.concat(vegetables);
console.log(shoppingList);

// Given numbers = [10, 20, 30, 40], create a separate copy using the spread operator. Change the first element of the copied array to 99. Print both arrays.
//learn spread operator properly
// let arr = [10,20,30,40]
// let arr2 = [...arr , ...99];
// console.lo(arr2);

// Given scores = [45, 67, 89, 34, 76, 91], create a new array containing only [67, 89, 34]. Use slice() and print both arrays.
const scores = [45,67,89,34,76,91];
const new_Arr = scores.slice(1,4);
console.log(new_Arr);
console.log(scores);

