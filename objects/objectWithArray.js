/*const users = [
    {name : "SImon" , age : 19},
    {name : "Hitesh" , age : 20}
]
console.log(users[0]); // accessing individual objects;
*/
// praactising wiht example

const users = [
    { name: "Simon", role: "Developer", age: 21 },
    { name: "Alex", role: "Designer", age: 23 },
    { name: "Riya", role: "Student", age: 20 }
];

console.log(users[1].role);
console.log(users[2].age);
users[0].role = "Full Stack developer";

users[2].country = "India";
users[3] = { name : "Neha" , role : "Frontend Developer" , age : 22};
console.log(users);