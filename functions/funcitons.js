//function to add 2 numbers
// function addition(a,b){
//     return a+b;
// }
// const result = addition(10,20);
// console.log(result);


function loginUserMessage(username){
    return `${username} just logged in`
}
// const username = prompt("enter uesrname  : ");
const result = loginUserMessage("simon");
console.log(result);

//function with object
function calculateCartPrice(...num1){   // rest operator : add multiple values
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user = {
    username : "simon",
    price : 200
}
function objectshandling(myObject){
    return `username is ${user.username} and my prrice is ${user.price}`
}

console.log(objectshandling(user));
// function with arrays

const numbrs = [200,400,600,800];
function arrayFunction (arrays){
    return arrays[1];
}
console.log(arrayFunction(numbrs));
