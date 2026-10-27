const laptop = {
    brand : "Acer",
    price : 75000 ,
    RAM : "256 GB",
    isAvailable : true 
}
console.log(laptop);

//acceessing
console.log(laptop.brand);
console.log(laptop.RAM);

//updating value 
laptop.price = 65000;
laptop.processor = "Intel i9";
console.log(laptop);

const propertyValue = "brand";
console.log(laptop["brand"]);

delete laptop.isAvailable; // delete the property of object
console.log(Object.keys(laptop));