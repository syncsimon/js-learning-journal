// check if price is valid;
// Scenario: A seller wants to list a product on your website. Before accepting it, your application must validate its price.

// Your task:
// - Write a function that accepts a product price.
// - Return true if the price is a valid positive number.
// - Return false otherwise.


// console.log(typeof(product.price));

function priceValidator (product){
    if(typeof product.price === "number"){
        if(product.price > 0){
            return true
        }
        else{
                return false
        }
    }
    else {
        return false
    }
}
const product ={
    name : "mouse",
    price: "null"
}
console.log(priceValidator(product));
