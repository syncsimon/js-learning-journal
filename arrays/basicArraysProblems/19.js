function calculateSum(){
    let sum = 0;
    for(let i = 0; i<n ; i++){
        sum += arr[i];
    }
    return sum;
    
}

let arr = [10, 20, 5, 15];
let n = arr.length;
let result = calculateSum();
console.log(result);