// Destructuring assignment

// Array
let colors = ["red","darkOrange"];
// let color1 = colors[0];
// let color2 = colors[1];

// let [color1,color2, color3] = colors

// console.log(color1, color2, color3);

let numbers = [33,4,5,6];
let [num1,,num2] = numbers;

// 
// String
let str = "javascript is great"
let [c1,c2,c3] = str

// console.log(c1,c2,c3);

let countries = ["Germany","Spain"]
let cities = ["Berlin","Barcelona"]

let array = [...countries,...cities]

// 
// OBJECTS
let obj = {};
[obj.name , obj.lastName] = "john smith".split(" ")

console.log(obj);

let user = {name: "someName", lastName: "someLastName", city: "somecity", age: 35}

let {name, lastName, city, age} = user;
console.log(name, age, city, lastName);

///////////////////////////////////////////
let k,l,m;
({k,l,m} = {k : 10 , l : 44 , m : 33})

// let {k,l,m} = {k : 10 , l : 44 , m : 33}

// let nums = {k : 10 , l : 44 , m : 33}
// let {k,l,m} = nums
console.log(k,l,m);

let job = "React developer"
let myObject = {job : job}

console.log(myObject);





// let variables = {}
// for (let i = 0 ; i < numbers.length ; i++){
//   variables[i] = (`num${i+1}`)
// }
// console.log(variables);


let person = {
  id:33,
  name2:"someName",
  age2:102
}

let { id,name2:firstName,age2} = person

console.log(id, firstName, age2);

let prices = [
  {
    id:3,
  price: "100"
},
{
  id:4,
  price:"200"
},
{
  id:5,
  price: "300"
}
]

let[val2,val1,val3] = prices
console.log(val1.price);
