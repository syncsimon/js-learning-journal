// Create an object representing a student with:
// - name
// - age
// - marks
// - city
// Print all the properties and values. Then write a function that checks whether the student has passed (passing marks: 40).

// const studentDetails = {
//     name : "Simon",
//     age : 20,
//     marks : 90,
//     city : "Delhi"
// }
// console.log(studentDetails)
function checkMarks() {
   if(studentDetails["marks"] >= 40){
    return "Pass"
   }
   else{
    return "fail"
   }
} 

const studentDetails = {
    name : "Simon",
    age : 20,
    marks : 90,
    city : "Delhi"
}
console.log(studentDetails)
console.log(checkMarks(studentDetails["marks"]));
