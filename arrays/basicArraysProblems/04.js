// print elements at even indexes

let arr = [11, 22, 33, 44, 55, 66];
let n = arr.length;
for(let i = 0; i<n ; i++){
    if(i%2==0){
        console.log(arr[i]);
    }
}
