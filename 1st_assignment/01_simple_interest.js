// Write a program to calculate simple interest.
// Example: If P = 1000, R = 5%, T = 2 years → Simple Interest = 100..

const principal = 1000
const rate = 5
const time = 2
const simple_interest = principal*rate*time/100
console.log(simple_interest)

//function

function calculateSimpleInterest(principal,rate,time){
    simple_interest = principal*rate*time/100
    return simple_interest
}
const result = calculateSimpleInterest(1000,5,2)
console.log(result)