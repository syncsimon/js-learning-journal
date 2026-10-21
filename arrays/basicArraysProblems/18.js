// let arr = [3, 8, 11, 14, 20, 7];
// let n = arr.length;
// for(let i = 0; i<n ; i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }
function findEven(){
    let evenArr = [];
    for(let i = 0; i<n; i++){
        if(arr[i]%2==0){
            evenArr.push(arr[i]);
            
        }
    }
    return evenArr;
}

let arr = [3, 8, 11, 14, 20, 7];
let n = arr.length;
let result = findEven();
console.log(result);