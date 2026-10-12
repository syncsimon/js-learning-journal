//if
// let age = 25
// if (age>=18){
//     console.log("you can visit")
// }


// //if else
// let age = 25
// if (age>=18){
//     console.log("you can visit")
// }
// else{
//     console.log("you can't visit")
// }

// let name = "simon"
// let age = 25

// if (age >= 18 && name ==="simon"){
//     console.log("you can visit")
// }


//admin panel
let userLoggedIn = true;
let isAdmin = true;
// let isUser = false;
if(userLoggedIn){
if (isAdmin) {
    console.log("You can visit as admin")
}
else {
    console.log("You can visit as user")
}
}
else {
    console.log("Please login")
}

if(10%5==0){
    console.log("it is divisible by 5")
}

const num = 10%2==0 ? true : false
console.log(num)


//switch
let days = 3;
switch (days){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday")
        break;
    
    default:
        console.log(" no value found")
}
