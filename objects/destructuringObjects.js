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


// JSON API : same as object;
// api example : https://api.github.com/users/syncsimon


