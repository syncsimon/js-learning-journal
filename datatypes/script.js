console.log("Data Types")
// 1) strings

let message = `hello`
let another_message = "simon!"
console.log(typeof(message))
console.log(message ,  another_message)
console.group("Message 1 is " ,message, "message 2 is ", another_message)

// efficient way

console.log(`message 1 is ${message} , message2 is ${another_message}`)

// 2) numbers
let num = 12
console.log(typeof(num))
let num2 = 1/0
console.log(typeof(num2))

// 3) boolean 
let bool = true
console.log(typeof(bool))

//4)undefined
let car;
console.log(typeof(car))

// 5)null

let carss = null
console.log(typeof(carss))  
//it is an issue in js that type of null is always come as object
console.log(typeof(null))