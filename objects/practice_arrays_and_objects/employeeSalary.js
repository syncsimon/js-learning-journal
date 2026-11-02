// Q4. Employee Salary
// Create an array of 4 employee objects. Each object should contain:
// - name
// - salary
// Print the names of employees whose salary is greater than ₹25,000.

const employeeData = [
    {name : "Simon" , salary : 100000},
    {name : "Hitesh" , salary : 200000},
    {name : "Geeta" , salary : 5000},
    {name : "Sohan" , salary : 60000}
]
const users = employeeData.filter((user) => user.salary >= 25000);
console.log(users)

