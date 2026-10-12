// // 1)Arithmetic operator
let a = 10
let b = 20
console.log(a+b)    //addition
console.log(b-a)    //subtraction
console.log(a*b)    //multiplication
console.log(a/b)    //division
console.log(b/a)    //division
console.log(a%b)    //modulo(remainder)
console.log(a**b)    //power
console.log(--a)    //pre decrement
console.log(a--)    //post decrement
console.log(a)     //8 (after decrement a = 9)
console.log(b++)    //post increment (b = 20)
console.log(++b)    //pre increment (b = 22)
console.log(b)    //b = 22z

// // 2)assignment operator
let a = 10
let b = 2
a**=b
a+=5
a+=b
a*=b
a%=b
console.log(a)

// 3)comaprison operator (returns boolean)
let x = 10
let y = 20
console.log(x==y)
console.log(x!=y)
console.log(x>y)
console.log(x<y)
console.log(x>=y)
console.log(x<=y)

let a = 10
let b = "10"
console.log(a===b)

// 4)logical operator
let a = 1
let b = 0
console. log(a && b)
console. log(a || b)

console.log(2>3 && 2!=3)   //false
console.log(2>3 || 2!=3)   //true

console.log(!true)   //false