//1 slice : doesnot includes the range and prints the portion which we want

const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = arr.slice(1,3);
// console.log(newArr);
// console.log(arr);

//2 splice : it maniplulates the array and delete that portion form original array which we want and put that into new array , it also includes the range
const arr2 = [10,20,30,40,50,60];
const newArr2 = arr2.splice(0,3);
// console.log(arr2);
console.log(newArr2);