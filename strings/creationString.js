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

//length
console.log(name.length); //5

//string indeing : they are also 0 indexed
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
// console.log(name[5]);

//accessing last letter
console.log(name[name.length-1]);  //n
 //(at(-1)) : it calculates from the last index -1 = last index -2 = second last index
//problem statement
const word = "JavaScript"
console.log(word.length); //print total length
console.log(word[0]);  //print 1st word
console.log(word[word.length-1]);  //print the last letter
for(let i = 0; i< word.length ; i++){   //print every letter in new line
    console.log(word[i]);
}
for(let i = word.length-1 ; i>=0 ; i--){   //print the string inreverse order
    console.log(word[i]);
    
}

 