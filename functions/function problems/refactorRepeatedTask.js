// Create reusable functions to calculate:
// 1. Individual product totals (price × quantity).
// 2. Total cart value.
// 3. Total number of items.
// 4. Average product price.


const cart = [
    { name: "Keyboard", price: 1500, quantity: 2 },
    { name: "Mouse", price: 500, quantity: 3 },
    { name: "Monitor", price: 12000, quantity: 1 },
    { name: "Headphones", price: 2000, quantity: 2 }
];
//individual product total
for(let i = 0 ; i < cart.length ; i++){
    console.log(`${cart[i].name} : price ${cart[i].price * cart[i].quantity}`);
}
//total cart value
let totalValue = 0;
for(let i = 0 ; i < cart.length ; i++){   
    totalValue += cart[i].price*cart[i].quantity
}
console.log(`Total price of cart is ${totalValue}`);
//total number of items
let countItems = 0
for(let i = 0 ; i < cart.length ; i++){
    countItems+=cart[i].quantity
}
console.log(`Total number of items are ${countItems}`);
//average of price 
let averagePrice = totalValue/countItems
console.log(`The average price is ${averagePrice}`);

