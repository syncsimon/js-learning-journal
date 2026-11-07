const users = [
    "simon123",
    "john",
    "alex_45",
    "ab",
    "developer99"
];

// Requirements:
// - Create a new array containing usernames with at least 5 characters.
// - Display the valid usernames.
// - Count how many usernames are invalid.

const validUsername = [];
for(let i = 0; i< users.length;i++){
    if(users[i].length >= 5){
        validUsername.push(users[i]);
    }
}
console.log(validUsername);
const validusernameTotal = validUsername.length
const invalidUsername = users.length - validusernameTotal
console.log(invalidUsername);

