//function to calculate tax;

function calculateTax(taxRate , amount){
    let taxAmount = (amount*taxRate)/100;
    let finalAmount = taxAmount+amount;
    return finalAmount;
}
const result = calculateTax(18 , 15000);
console.log(result);
