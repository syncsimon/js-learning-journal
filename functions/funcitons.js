
//ordinary function
function addition(a,b){
    return a+b
}
console.log(addition(10,20))

//function expression

const additions = function(x,y){
    return x+y
}
console.log(additions(10,10))


// arrow function:
const addition = (a,b) => a+b
console.log(addition(10,20))


//immediately invoke funiton

(function(a,b){
    return a+b
}
)()

//higher order function
function calculate(operation,num1,num2){
    return operation(num1,num2)
}
const add = (a,b) => a+b
const sub = (x,z) => x-z

console.log(calculate(add,20,30))