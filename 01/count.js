const numbers = [10, -5, 20, -3, 0, 15, -8];
//count positiver
let count = 0
for(let i = 0; i< numbers.length ; i++){
    if(numbers[i] > 0){
        count +=1 ;
    }
}
console.log(count);
