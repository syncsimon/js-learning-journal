
// Q6. Electricity Bill
// Create an array of 3 household appliance objects. Each object should contain:
// - name
// - unitsConsumed
// - pricePerUnit
// Calculate the electricity cost of each appliance and the total bill.
const appliances = [
    { name: "AC", unitsConsumed: 120, pricePerUnit: 8 },
    { name: "Refrigerator", unitsConsumed: 90, pricePerUnit: 6 },
    { name: "Washing Machine", unitsConsumed: 40, pricePerUnit: 5 }
];
let n = appliances.length;
let totalBill = 0;
for(let i = 0; i< n ; i++){
    totalBill += appliances[i].unitsConsumed * appliances[i].pricePerUnit;
    console.log(`${appliances[i].name} : ${appliances[i].pricePerUnit * appliances[i].unitsConsumed}`);
}
console.log(totalBill);
