const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = Object.assign({} , obj1 , obj2); // merging 2 objects into 1
// adding {} as a paraamter is an error catching mechanism which handles the situation if any eorror occurs

// more convinient way to merge 2 objes : spread operator

const obj4 = {...obj1 , ...obj2};
console.log(obj4);
console.log(obj3);