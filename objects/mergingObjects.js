const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = Object.assign(obj1 , obj2); // merging 2 objects into 1
console.log(obj3);