const arr = [2,3,4,5,6,7];
let n = arr.length;
for(let i = 0; i< n; i++){
    if(arr[i]%2==0){
        console.log(`${arr[i]} : Even`);
    }
    else{
        console.log(`${arr[i] } : odd`);
        
    }
}