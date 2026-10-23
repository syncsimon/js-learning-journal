// Given numbers = [5, 12, 18, 7, 24, 9, 30], create a new empty array. Traverse the original array and add only numbers greater than 10 to the new array. Do not use filter().
const numbers = [5, 12, 18, 7, 24, 9, 30];
let n = numbers.length;
const newArr = []
for(let i =0; i<n ; i++){
    if(numbers[i]>10){
        newArr.push(numbers[i]);
    }
}
console.log(newArr);