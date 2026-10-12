// Create a new array where: If number > 10 → add 5 Otherwise → keep it the same

const numbers = [5, 10, 15, 20]
const newNumbers = numbers.map(num=> num >10 ? num + 5 : num)
console.log(newNumbers)


