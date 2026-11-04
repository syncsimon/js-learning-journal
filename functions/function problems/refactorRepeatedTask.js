// Create reusable functions to calculate:
// 1. Individual product totals (price × quantity).
// 2. Total cart value.
// 3. Total number of items.
// 4. Average product price.





// //average of price 
// let averagePrice = totalValue/countItems
// console.log(`The average price is ${averagePrice}`);


const cart = [
    { name: "Keyboard", price: 1500, quantity: 2 },
    { name: "Mouse", price: 500, quantity: 3 },
    { name: "Monitor", price: 12000, quantity: 1 },
    { name: "Headphones", price: 2000, quantity: 2 }
];

//create funciton 
function individualProductTotal (cart){
    let n = cart.length
    for(let i = 0 ; i < n ; i++){
        console.log(`${cart[i].name} : price ${cart[i].price * cart[i].quantity}`);
    }
}

const result = individualProductTotal(cart);
console.log(result);

//total cart value
function countTotalCartValue (cart){
    let totalValue = 0;
    for(let i = 0 ; i < cart.length ; i++){   
        totalValue += cart[i].price*cart[i].quantity
    }
    return (`Total price of cart is ${totalValue}`)
}
console.log(countTotalCartValue(cart));

function countTotalItems (cart){
    let countItems = 0
    for(let i = 0 ; i < cart.length ; i++){
        countItems+=cart[i].quantity
    }
    return (`Total number of items are ${countItems}`);
}

console.log(countTotalItems(cart));

function averagePrice(cart){
    let countItems = 8
    let totalValue = 20500
    let averagePrice = totalValue/countItems
    return (`The average price is ${averagePrice}`);
}
console.log(averagePrice(cart));
