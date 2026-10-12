// Return numbers that are: greater than 20 AND divisible by 5
const values = [10, 25, 30, 45, 60, 75]
const newValues = values.filter(num=> num>20 && num%5==0)
console.log(newValues)