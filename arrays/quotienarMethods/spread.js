// Combine both arrays into a new array called allTasks. Keep the original arrays unchanged.
const morningTasks = ["Study", "Exercise"];
const eveningTasks = ["Coding", "Reading"];

const allTasks = [...morningTasks , ...eveningTasks];
console.log(allTasks);