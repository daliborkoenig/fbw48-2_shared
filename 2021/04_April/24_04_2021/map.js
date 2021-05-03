let arr1 = [1,2,3]
let arr2 = arr1.map(function(item){return item*2})

console.log(arr1,arr2);

let numbers = [5,6,7,8]
let result = numbers.map(function(item){return item+1})

console.log(result);

let tasks = ["learn advance array methods", "go jogging", "learn react"]
// let myTasks = tasks.map(function(item){
//   return `<li>${item}</li>`
// })

let myTasks = tasks.map(item => `<li>${item}</li>`)

// console.log(myTasks);

// using map with an array of objects

let arr = [
  {key:1,value:100},
  {key:3,value:205},
  {key:6,value:400}
]
// expected result : [{"1":100},{3:205},{6:400}
// let newArr = arr.map(function(item){
//   let obj = {}
//   obj[item.key] = item.value  // obj[1] = 100  ==> {"1":100}
//   return obj
// })

let newArr = arr.map((item) => {let obj = {};obj[item.key] = item.value;return obj})

console.log(newArr);

// ####################################################
//reformat a string using map

let str = "L 2 S 3 M 4 S 7"
// expected result : "L 4 S 6 M 8 S 14"
// steps: 
// 1. convert to array using split
// 2. use map to check if the value is a number and then multiply with 2, else return item

let newStr = str.split(" ").map(function(item){
  if (isNaN(item)){
    return item
  }
  else return item*2
})

console.log(str);
console.log(newStr.join(" "));