//count how many even numbmers are there

let arr = [12, 7, 4, 9, 16, 3, 8];
let n = arr.length;
let count = 0;
for(let i=0;i<n;i++){
    if(arr[i] % 2 == 0){
        count+=1;
    }
}
console.log(`the total even numebmrs are : ${count}`);