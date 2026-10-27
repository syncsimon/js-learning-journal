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

// practice destructuring

const product = {
    name : "laptop",
    price : 65000 ,
    brand : "acer"
}
const {name , price} = product;
console.log(name);
console.log(price);
const{ name : productName } = product ;
console.log(productName);
const{category = "Electronics"} = product;
console.log(category);
const sms = {
    name: "Social media",
    founder: {
        foundername: "Simon Rana",
        role: "Developer"
    }
};
const {
    founder : { foundername,role}
} = sms

console.log(foundername);
console.log(role);


// problem 2
const developer = {
    name: "Simon",
    skills: {
        primary: "JavaScript",
        secondary: "Python"
    },
    experience: undefined
};

const {name : developerName} = developer;
const {
    skills : {primary,secondary}
} = developer;
const {experience = 0} = developer;
console.log(developerName);
console.log(primary);
console.log(secondary);
console.log(experience);