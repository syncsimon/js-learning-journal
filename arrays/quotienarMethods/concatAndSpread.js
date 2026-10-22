// it concatenates/merges both the arrays

const names = ["simon" , "hitesh" , "harish"];
const surnames = ["rana", "kumar", "singh"];
const fullNames = names.concat(surnames);
console.log(fullNames);

// spread operator : used for same purpose as concat but it's syntax is very simple
// [...firstArray , ...Second array] means all the elements of both the arrays are now individual array and we combine both of them

const funnnames = [...names , ...surnames];
console.log(funnnames);