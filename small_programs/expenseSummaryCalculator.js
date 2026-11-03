const expenses = [
    {amount : 15000 , category : "Groceries"},
    {amount : 12000 , category : "Clothing"},
    {amount : 30000 , category : "Trip"},
    {amount : 5000 , category : "Shopping"},
    {amount : 2000 , category : "Subscriptions"},
    {amount : 35000 , category : "Investments"}

]
const n = expenses.length;
let totalExpenses = 0;
//total spendings

function calculateSpending(expenses){
    for(let i = 0; i<n ; i++){
        totalExpenses += expenses[i].amount;
    }
    return totalExpenses;
}

const result = calculateSpending(expenses);
console.log(`Total Spendings are : ${result}`);

