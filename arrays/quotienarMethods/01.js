//1 includes : check where the array contains this given value
let arr = [1,2,3,4,5];
console.log(arr.includes(0));


//2 indexof() : return the index of elements
console.log(arr.indexOf(10));
console.log(arr.indexOf(3));

// 3 join:
const newArr = arr.join();
console.log(arr);
console.log(newArr);
console.log(typeof(arr));
console.log(typeof(newArr));

//4 slice

const arr3 = [1,2,3,4,5];
const arr4 = arr3.slice(0,2);
console.log(arr4);

// 5 splice 
const arr5 = arr3.splice(0,3);
console.log(arr5);
console.log(arr3);

//6 concat : merge 2 arrays
const names = ["simon" , "hitesh" , "harish"];
const surnames = ["rana", "kumar", "singh"];
const fullNames = names.concat(surnames);
console.log(fullNames);