
// Given products = ["mouse", "keyboard", "monitor", "laptop"], check whether "monitor" and "printer" exist. Print an appropriate message for each./
const products = ["mouse" , "keyboard","monitor","laptop"];
const result = products.find(e => e === "monitor" &&  e ==="printer" );
if(result){
    console.log("found");
}
else{
    console.log("not found");
}