// Create an array of 3 grocery objects. Each object should contain:
// - item
// - price
// - quantity
// Calculate the total shopping bill.

const groceries = [
    {item : "Besan" , price : 50 , quantity : 2},
    {item : "Milk" , price : 50 , quantity : 4},
    {item : "Bread" , price : 30 , quantity : 2}
]
let n = groceries.length;
let totalValue = 0;
for(let i = 0 ; i < n ; i++){
    totalValue += groceries[i].price * groceries[i].quantity;
}
console.log(totalValue)