console.log("Variables")
// var is not good practice because , if we have already declared a variable with same name it doesn't care...it will stillll declare new variable with same name
var name = "simon"
var age = 18
var contact = 9868950702
console.log(name)
console.log(age)
var name = "hitesh"
console.log(name)
// let is good practice because we can't decalre 2 variables with same name, yes, we can change value later whenever we need
let name = "simons"
name = "hitesh"
// let name = "hitesh"
console.log(name)
// const is also a good practice but just one drawback we later can't change vale so we will just declare those values that would be constatant i.e pie
const name = "simon"
const name = "hitesh"
console.log(name)