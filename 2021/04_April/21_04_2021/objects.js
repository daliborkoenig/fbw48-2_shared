let name = "Mo"
let newName = name
newName = "NotMo"

// console.log(name);
// console.log(newName);

// objects and arrays copy by reference

let arr1 = [1,2,3]
let arr2 = arr1
arr2.push(5)

// console.log(arr1);
// console.log(arr2);

let arr3 = []
let arr4 = []

// console.log(arr3 === arr4);

//how to copy without reference
let user = {
  name: "somename",
  email: "some@remail.com",
  address : "some address 56"
}

let copy = {}
// for(let key in user){
//   copy[key] = user[key]
// }
// console.log(copy);


// reversing vale and key
for(let key in user){
  copy[user[key]] = key
}

// console.log(copy);

//###########################################

// Object.assign Object.assign(obj,obj1)
//                     destination, source

let carOne = {
  name: "BMW",
  model: "X5"
}


let car = {}
Object.assign(car, carOne)

console.log(car);

// Object.assign Object.assign(obj,obj1,obj2,obj3)
//                     destination, source


let destination = {not: "yes"}

let source1 = {name: "john"}
let source2 = {age: "34"}
let source3 = {address : "Hamburg"}

Object.assign(destination, source1, source2, source3)
console.log(destination);

// clone array