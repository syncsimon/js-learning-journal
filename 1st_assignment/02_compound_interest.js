// Write a program to calculate compound interest.
// Example: If P = 1000, R = 10%, T = 2 years → Compound Amount = 1210.

const principal = 1000
const rate = 10
const time = 2
const compoundInterest = principal*(1+rate/100)**time
console.log(compoundInterest)

//write in function

function calculateCompoundInterest(principal,rate,time){
    compoundInterest = principal*(1+rate/100)**time
    return compoundInterest
}
const result = calculateCompoundInterest(1000,10,2)
console.log(result)