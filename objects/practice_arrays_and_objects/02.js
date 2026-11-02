// Q2. Student Result
// Create an array of 4 student objects. Each object should contain:
// - name
// - marks
// Use a loop to print each student's name and whether they passed or failed.

// Passing marks: 40.

const studentRecords = [
    {name : "Mohan" , marks : 0},
    {name : "Simon" , marks : 90},
    {name : "Hitesh" , marks : 89},
    {name : "Sahil" , marks : 10}
]
let result = 0;
let n = studentRecords.length;
for(let i = 0 ; i<n ; i++){
    if(studentRecords[i].marks >= 40){
        result = "Pass";
    }
    else{
        result = "Fail";
    }
    console.log(`${studentRecords[i].name} : ${result}`);
}
// console.log(`Name of student ${studentRecords[i].name} and result : ${result}`);