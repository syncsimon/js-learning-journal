const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "USB Cable", price: 300 }
];
const newArr = []
for(let i = 0; i<products.length; i++){
    if(products[i].price >= 1000){
        newArr.push(products[i])
    }
}
console.log(newArr);
// console.log(newArr.length);
let count = 0;
for(let i = 0; i<newArr.length ; i++){
    count += 1
}
console.log(count);
