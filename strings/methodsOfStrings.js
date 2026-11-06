//slice : extract the portion of string into new string , doesnot modify the original string
let str = "Javascript";
console.log(str.slice(0,4));

let word = "programming"
console.log(word.slice(3)); // start from 3 till end of string

console.log(str.slice(-6,-3));


 //practice probelm
//  Practical challenge
// Write a small program using:
// let email = "simonrana@gmail.com";
// // Requirements:
// 1. Extract the username (simonrana).
// 2. Extract the domain (gmail.com).
// 3. Extract the first five characters.
// 4. Extract the last five characters.
// 5. Print the original email to demonstrate that it remains unchang

const username = "simonrana@gmail.com";
console.log(username.slice(0,9));
console.log(username.slice(10));
console.log(username.slice(0,5));
console.log(username.slice(-5));
console.log(username);

// includes : check if string contains any value  , return boolean , case sensitive
let sentence = "My name is simon rana";
console.log(sentence.includes("simon"));
  
let words = "JavaScript";
console.log(words.includes("Script",4));

let words2 = "programmming"
console.log(words2.includes("gram",3));

// startsWith( )
console.log(words2.startsWith("pr"));

console.log(words.startsWith("Java"));

console.log(str.startsWith("Script", 4));

console.log(str.endsWith("Java", 4));
