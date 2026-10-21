let arr = [-2, 0, 5, -7, 8, 0, 3];
let countPositive = 0;
let countNegative = 0;
let countZero = 0;
let n = arr.length;
for(let i = 0; i < n ; i ++){
    if(arr[i] > 0){
        countPositive+=1;
    }
    else if(arr[i]<0){
        countNegative += 1;
    }
    else{
        countZero +=1 ;
    }
}

console.log(`Positive : ${countPositive} , Negative : ${countNegative} , Zero : ${countZero}`);