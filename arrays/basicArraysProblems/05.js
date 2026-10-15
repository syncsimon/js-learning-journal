// second element is twice than 1st element

let arr = [2, 4, 8, 16, 32];
let n = arr.length;
let flag = 1;
for(let i = 0 ; i<n-1 ; i++){
    if(arr[i+1] != arr[i]*2){
        flag = 0;
    }
}
if(flag == 1){
    console.log("yes");
}
else{
    console.log("no");
}