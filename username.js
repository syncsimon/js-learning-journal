const usernames = ["simon", "raj", "developer", "abc", "syncsimon"];

const newUsernames = []
for(let i = 0; i<usernames.length ; i++){
    if(usernames[i].length>=5){
        newUsernames.push(usernames[i]);
    }
}
console.log(newUsernames);
