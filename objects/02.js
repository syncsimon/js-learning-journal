// Create an array of 3 product objects. Each product should contain:
// - name
// - price
// - quantity
// Calculate and print the total price of all products.

const products = [
    {name : "charger" , price : 450 , quantity : "1"},
    {name : "deo" , price : 550 , quantity : "1"},
    {name : "snacks" , price : 150 , quantity : "10"}
]

let count = 0
let total = 0
const n = products.length
for(let i = 0; i < n ; i++){

    // console.log(products["price"])
    count+=products[i].price* products[i].quantity
}
console.log(count);
