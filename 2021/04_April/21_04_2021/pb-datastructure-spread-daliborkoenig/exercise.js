// 1.
let euroCountries = ["france","england","italy"]
let asianCountries = ["china","thailand","japan"]

euroCountries.push(...asianCountries)

console.log("1 ==>",euroCountries);

let newCountries = [...euroCountries,...asianCountries]
console.log("1 ==>",newCountries);

// 2.
let arr = [1,2,3,]
let arr2 = [...arr]

console.log("2 ==>",arr2);

// 3.
let arr3 = [1,2,3,4]

function largestNum(arr){
  return Math.max(...arr)
}

console.log(largestNum(arr3));

// 4.
let arr4 = [1,2,3,4]
function smallestNum(arr){
  return Math.min(...arr)
}

console.log(smallestNum(arr4));

// 5.
const person = {name: "John"}
const job = {role: "Teacher"}

let newVar = {...person}
console.log(newVar);

let employee = {...person, ...job}
employee.job = "NotATeacher"
console.log(employee);

// 6.
function isWhole(a,b,c,d){
  let average = (a+b+c+d)/4
  return Number.isInteger(average)
}

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole([2, 2, 2, 2]));
