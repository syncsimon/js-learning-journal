function calculateShipping(orderAmount){
    if(orderAmount >= 2000){
        return "Free Shipping"
    }
    else if(orderAmount > 1000 || 1999 > orderAmount ){
        return "50 shipping"
    }
    else{
        return "free shipping"
    }
}
console.log(calculateShipping(400))