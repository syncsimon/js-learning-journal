// Search for "Aman". Print "Name found" if it exists; otherwise print "Name not found".
const names = ["Rahul", "Priya", "Aman", "Neha"];
const result = names.find((name) => name === "Aman");
if(result === "Aman"){
    console.log("NAME FOUND");
}
else{
    console.log("not found");
}