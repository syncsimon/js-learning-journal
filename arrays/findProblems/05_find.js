// Use find() to search for "Laptop". If found, print "Product available"; otherwise, print "Product not available".

const products = ["Mouse", "Keyboard", "Laptop", "Monitor"];

const result = products.find((product) =>{
    return product === "Laptop";
}
)
if(result === "Laptop"){
    console.log("product available");
}
else{
    console.log("product not available");
}