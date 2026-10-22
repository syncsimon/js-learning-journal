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

// Given items = ["pen", "pencil", "eraser", "scale", "marker"], remove "eraser" and "scale" using splice(). Print the removed elements and the updated array.

const items = ["pen", "pencil", "eraser", "scale", "marker"]
const unnecessaryItems = items.splice(2,2);
console.log(items);
console.log(unnecessaryItems);


// Given colors = ["red", "blue", "green", "yellow"], replace "blue" with "black" and "white" using splice(). Print the updated array.

const colors = ["red","blue","green","yellow"];
const newColors = colors.splice(1,1,"black","white");
console.log(colors)

// Given values = [5, 10, 15, 20, 25, 30], extract [15, 20, 25] using slice(). Then use splice() on the original array to remove those same three values. Print the extracted array and the original array after removal.
const values = [5,10,15,20,25,30];
const temporaryRemove = values.slice(2,5);
console.log(temporaryRemove);
const permanentRemove = values.splice(2,3);
console.log(permanentRemove);
console.log(values);

