// Q1. Mobile Store
// Create an array of 3 mobile objects. Each object should contain:
// - name
// - price
// - quantity
// Calculate the total value of all mobiles in stock.

const mobileObjects = [
    {name : "Vivo" , price : 20000 , quantity : 1},
    {name : "Oppo" , price : 17000 , quantity : 2},
    {name : "Samsung" , price : 44000 , quantity : 1}
]
let totalValue = 0;
const n = mobileObjects.length;
for(let i = 0; i< n ; i++){
    // console.log(mobileObjects[i].quantity);
    totalValue += mobileObjects[i].price * mobileObjects[i].quantity;
}
console.log(totalValue);