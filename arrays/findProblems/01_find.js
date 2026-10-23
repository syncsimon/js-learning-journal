// Given the array, use find() to return the first number greater than 50.


const numbers = [12,35,60,75,90];
const result = numbers.find((num) => {
    return num>50;
});
console.log(result);