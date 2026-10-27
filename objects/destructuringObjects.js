/*
const course = {
    courseName : "Javascript",
    coursePrice : "19999" ,
    courseTeacher : "Simon"
}
console.log(course);


course.courseName = "Web development";

const {courseName : name}= course;
console.log(name);
console.log(course);
*/

// JSON API : same as object;
// api example : https://api.github.com/users/syncsimon


const developer = {
    name : "Simon",
    role : "Web developer",
    langauge : "Javacript",
    experience : "1"
};
const {name , role} = developer ;
console.log(name);
// we can also rename the objects element name 
const {name : userName , role : jobRole} = developer;
console.log(userName);