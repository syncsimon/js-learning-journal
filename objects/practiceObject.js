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


/*
const linkupInfo = new Object();
linkupInfo.name = "Simon";
linkupInfo.founder = "Syncsimon";
linkupInfo.technology = "React js";
linkupInfo.technology = "React js and tailwind css";
console.log(linkupInfo);

// ammendmemts
console.log(linkupInfo["name"]);
console.log(linkupInfo["technology"]);
linkupInfo.status = "In development";
console.log(linkupInfo);
*/

// dealing with nested objects
const linkupInfo = new Object();
linkupInfo.name = "LinkUp";
linkupInfo.type = "Social media platform";
linkupInfo.founder = {
    founderName  : " Simon Rana",
    role : "developer",
    age : "21"

}
console.log(linkupInfo["name"]);
console.log(linkupInfo.founder.founderName);
console.log(linkupInfo.founder.role);
linkupInfo.founder.age = 22 ;
linkupInfo.founder.country = "India";
console.log(linkupInfo);

