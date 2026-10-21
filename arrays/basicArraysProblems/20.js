let arr = [12, 45, 7, 89, 34];
let n = arr.length;
let largest = arr[0];
for(let i = 0; i<n;i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}
console.log(largest);


