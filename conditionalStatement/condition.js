//if statement

let ages = 9;
if (ages>= 18) {
    console.log("You can Vote")
}

//2 if-else 
let aged = 9;
if (aged>= 18) {
    console.log("You can Vote")
}
else {
    console.log("You can't vote")
}

//3 nested if 
let age = 19
let nationality = "USA"
 if (age>=18){
    if (nationality == "Indian"){
        console.log("You can vote")
    }
    else{
        console.log("Age is perfect but nationality doesn't match")
    }
}
else{
    console.log("You can't vote")
}

//4 else-if

// check which is greater a , b

let a = 20
let b = 20
if(a>b){
    console.log("a is greater")
}
else if (b> a){
    console.log("b is greater")
}
else{
    console.log("both are equal")
}

//assign grade based on marks
const mark = 40
if (marks >= 90){
    console.log("A grade")
}
else if (marks >= 80 & marks < 90){
    console.log("b grade")
}
else if (marks >= 70 & marks < 80){
    console.log("c grade")
}
else if (marks >= 60 & marks < 70){
    console.log("d grade")
}
else{
    console.log("Need practice")
}
const marks = 10
if (marks>= 90){
    console.log("a grade")
}
else if (marks >= 80){
    console.log("b grade")
}
else if (marks >= 65){
    console.log("C grade")
}
else if(marks >= 33){
    console.log('c grade')
}
else{
    console.log("Fail!")
}

const login_post = "admin"
if (login_post == "admin"){
    console.log("You can login as Admin")
}
else{
    console.log("You can login as user!")
}

let userLoggedIn = false;
let isAdmin = true;
if (userLoggedIn){
    if (isAdmin){
        console.log("you are admin")
    }
    else{
        console.log("you are user")
    }
}
else{
    console.log("Please login first")
}

//ternary operator
//ordaniry way
const number = 1;
if (number% 2== 0){
    console.log("even")
}
else{
    console.log("odd")
}
//using ternary epression
let num = 10
let result = (num% 2 == 0 ) ? "Even" :"odd"
console.log(result)

//switch
let day = 30;
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    default:
        console.log("Wrong Input!")
}


const isLoggedIn = true;
const hasSubscription