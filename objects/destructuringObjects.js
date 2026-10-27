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