// Write a program to print all even numbers in a given range.
// Example: Range 1 to 10 → Output: 2, 4, 6, 8, 10.

for(let num = 2 ; num <= 50 ; num += 2){
    console.log(num)
}
function printEvenNumbers(){
    for(let num = 2 ; num <= 50 ; num += 2){
        return num
    }
}
const result = printEvenNumbers
