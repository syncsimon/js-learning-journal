let students = ['simon','hitesh','muskan']
console.log(students)
console.log(students[0])   //simon
console.log(students[3])   //undefined
students[3] = "harish"   //modifying an array
console.log(students)
//methods of array
students.push("meenu")   //adding elements in the array at last
console.log(students)

students.pop("harish")  //removes the last element of array
console.log(students)

students.unshift("hitesh") //add the element at the 0th index
console.log(students)

students.shift()   //removes the element of 0th index
console.log(students)

console.log(students.indexOf("harish"))
console.log(students.includes("james"))

console.log(students.slice(0,2))
console.log(students.splice(1,1,"james","david"))  //changes actual array
console.log(students)

console.log(students.reverse())

//map method
let numbers = [1,2,3,4,5]
let double_numbers = numbers.map(num => num*2) //modify the array and store result in new array
console.log(double_numbers)

let even_numbers = numbers.filter(nums => nums%2===0) //filter the wanter elements in array itself nand store result in new array
console.log(even_numbers)
//map is method that can modify our actual array and give new array as per we apply function


let reduced_number = numbers.reduce((value,numb)=> value+numb,0)
console.log(reduced_number)

let firstEvenNumber = numbers.find(nump => nump%2===0)
console.log(firstEvenNumber)

let find_index = numbers.findIndex(numv => numv%2===0)
console.log(find_index)
let allEven = numbers.every(nms => nms%2==0)
console.log(allEven)

let allEvens = numbers.some(nmes => nmes%2==0)
console.log(allEvens)

let fruits = ["mango","apple","grapes","orange","watermelon"]
fruits.sort()
console.log(fruits)
numbers.sort((a,b)=> a-b)
console.log(numbers)

let words = ["hello","simon"]
let sentence = words.join(" ")
console.log(sentence)

let vegetables 