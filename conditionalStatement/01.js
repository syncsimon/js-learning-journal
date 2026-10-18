// Write a function checkNumber(n) that prints "Positive", "Negative", or "Zero".


// let num = -1;
// if(num>0){
//     console.log("positive");
// }
// else if(num<0){
//     console.log("negative");
// }
// else{
//     console.log("zero");
// }

function checkNumber(num){
    if(num>0){
        return "positive" ;
    }
    else if(num<0){
        return "negative" ;

    }
    else{
        return "zero";
    }

}

let result = checkNumber(-8);
console.log(result);