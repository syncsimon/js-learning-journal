// withdrawMoney(balance, amount, pinCorrect)
function withdrawMoney(balance , amount , pinCorrect){
    if (!pinCorrect){
        return;
    }
    if (amount<=0){
        console.log("Invalid Amount")
        return;
    }
    else if (amount>balance){
        console.log("Insufficient balance")
    }
    else if (amount>20000){
        console.log("You can maximum withdraw upto 20,000")
    }
    else if (amount % 500 !== 0 ){
        console.log("you can't withdraw withdraw")
    }
    else{
        balance -= amount
        console.log("withdrawl successful")
        return balance;
        }
balance -= amount
balance>= 

}
let result = withdrawMoney(25000, 5000, true)
let get_message_by = 
console.log(result)
console.log(`hence monet withdrawl is ${result}`)
console.log("g")


