// literal method to create objects :

const symbolDataType = Symbol("symbol data type"); // symbol is unique data type of js
const userInfo = {
    name : "Simon",
    age : 19 ,
    [symbolDataType] : "value of symbol", // we use [] to access symbol as the key
    location : "New Delhi" ,
    email : "simonrana@mail.com" ,
    isLoggedIn : false 
}
// console.log(userInfo);

// accessing individual elements of objects

console.log(userInfo["age"]); // we have putted "" commas because in the backend it has considered everything as sting , so whenever we access anything we have to put "" commmas;
console.log(userInfo[symbolDataType]);
