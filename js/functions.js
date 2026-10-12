console.log("functions")
//funciton to print

function letsPrint (){
    console.log("hello simon")
}

letsPrint()

//funciton to add 2 number
function addition (a,b,c){
    c = a+b
    console.log(c)
}
addition(10,20)

//function expression
const add = function(){
    console.log(1+2)
}
add()

get()add.contact

const add = (a,b) => a+b
const 
console.log(add(10,20))

function greet (){
    return "HelloSimon" ;
}
console.log(greet());

function greetUser (name = "Sim"){
    return `Hello ${name}`
}

console.log(greetUser())



function addition(a,b){
    return a+b
}
console.log(addition(30,20))

const addi = (a,b) => a+b
console.log(addi(10,20))


function square (num){
    return num*num
}
console.log(square(4))

const square = (num) => num*num
console.log(square(4))




function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);

console.log(result);

function nameOfFuntion (){
    //block of code
}

const nameOfVariable = (a,n) => a+n

function subtract (a,b) {
    return a-b
}
console.log(subtract(20,8))

const subtract = (a,b) => a-b
console.log(subtract(20,8))

function isEven(n) {
    if (n%2==0){
        return true
    }
    else{
        return false
    }
}
console.log(isEven(3))

const isEven = (a) => a%2==0 ? true : false
console.log(isEven(2))

// function square(num){
//     return num*num
// }
// console.log(square(4))

const square = (num) => num*num
console.log(square(6))

// function multiply(a,b){
//     return a*b
// }

// console.log(multiply(30,10))

const multiply = (a,b) => a*b
console.log(multiply(7,3))


const greet = (name) => {
    return "Hello " + name;
};

let message = greet("Simon");

console.log(message);