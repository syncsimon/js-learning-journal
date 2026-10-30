const arr = [
    {name : "simon" , age : 18},
    {name : "hitesh" , age : 38},
    {name : "vivish" , age :14},
    {name : "geeta" , age :19}
]


// const result = 0;
// for(let i = 0; i<n ; i++){
const result = arr.filter((names) => {
    return arr.age >= 18
});
console.log(result)
// }
// const filterArray = [];

// const result = arr.filter(arr.age => {
//     if(arr.age<=18){
//         filterArray.push(arr.age);
//     }
// })
// console.log(filterArray)