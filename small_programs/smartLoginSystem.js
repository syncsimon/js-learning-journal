const userName = "simon"
const storedUsername = "sion"
const password = "hellosimon"
const userPassword = "hellosimon"
if (userName != storedUsername){
    console.log("incorrect username")
}
else if (password != userPassword){
        console.log("username correct but password incorrect")
}
else{
    console.log("Successfully login!")
}


//writing in function
function loginSystem(userName,password,storedUsername , userPassword){
    if (userName != storedUsername){
    console.log("incorrect username")
    }
    else if (password != userPassword){
        console.log("username correct but password incorrect")
    }
    else{
    console.log("Successfully login!")
    }
}
console.log(loginSystem("Simon","hellosimon","Simon","hellosimon"))


// !==