// strigns can be created in 3 ways
const firstWay = "Using double quotes";
const secondWay = 'Using Single Quotes';
const thirdWay = `Using backticks`;

// string esacping 
// const message = ' i' am simon';     // now this will give error it will think strings ends after i but ` is part to our strings so we use string escaping
const message = 'i\' am simon';
console.log(message); // we used backslash to prevent error
// \n for new line eg : simon\nrana
// if we choose quotation marks wisely then there's no need to escape strings like : "Hello i'm simon";

// template literal
//instead of +() to write expression we can use `` backticks to write expression using ${}
const name = "Simon";
const age = 19;
console.log(`My name is ${name} and age is ${age}`);

