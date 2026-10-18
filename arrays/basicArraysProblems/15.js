// count largest in arrl

let arr = [14, 6, 29, 11, 22];
let largest = arr[0];
let n = arr.length;

for(let i = 0; i<n ; i++){
    if (largest<arr[i]){
        largest = arr[i];
    }
}

console.log(largest);