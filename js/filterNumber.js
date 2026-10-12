let numbers = [12, 7, 24, 9, 30, 15, 4];
// let greaterNums = numbers.filter(num => num>10)
// console.log(greaterNums)
let total = 0;
for (let i = 0; i < numbers.length ; i++){
    if(numbers[i] > 10){
        total+=1
    }
}
console.log(total)