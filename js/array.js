// // let firstArray = [1,2,3,4,5,6]
// let countings = [1,2,3,4,5,6,7,8,9]
// // console.log(countings[0]);
// countings[0] = 0
// console.log(countings)

// countings.push(100);
// console.log(countings)

// countings.pop(2)
// // console.log(countings)
// countings.unshift(0)
// console.log(countings)

// console.log(countings[0])
// console.log(countings.indexOf(8))


// console.log(countings.slice(3,5))
// // console.log(countings.spli.ce(3,5))

// console.log(countings.reverse())

//map method

let countings = [1,2,3,4,5]
let doubled = countings.map(count => count*2)
console.log(doubled)

let values = [2,4,6,8,10]
let squareValues = values.map(num => num**2)
console.log(squareValues)

// filter method

let numbers = [1,2,3,4,5,6,6,7]
let evenNumbers = numbers.filter(num =>num%2===0)
console.log(evenNumbers)

//reduce method

let nums = [1,2,3,4,5,6]
let sum = nums.reduce((acc,num) => acc+num,0)
console.log(sum)