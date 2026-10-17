//remove last element from the array

// let arr = [11, 22, 33, 44, 55];
// arr.shift();
// console.log(arr);

function removeElement (){
    arr.shift();
    return arr;
}

let arr = [11,22,33,44,55];
let result = removeElement();
console.log(result);