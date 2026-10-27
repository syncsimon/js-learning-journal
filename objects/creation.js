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

//changing the values of objects
userInfo.name = "Simon Rana";
console.log(userInfo["name"]);

//freezing the object so that noone can change the values of keys further
Object.freeze(userInfo);
console.log(userInfo);

// constructor method , singleton method

const linkupInfo = new Object(); // linkup = referal name for any app that stroes data;
linkupInfo.name = "Simon jii";
linkupInfo.age = 21;
linkupInfo.location = "Dubai";

console.log(linkupInfo["name"]);

// methods of objects
console.log( Object.keys(linkupInfo));
console.log(Object.values(linkupInfo));
console.log(Object.entries(linkupInfo));
