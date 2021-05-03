// 1
let person_one = {
  name: "Dalibor",
  age: "40",
  cool: false
}

for(key in person_one){
  console.log(`1 ==> ${key}, ${person_one[key]}`);
}

// 2
function getObjectValues(obj){
  console.log(`2 ==> ${Object.values(obj)}`);
}

getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})

// 3
let personTwo = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",
  method(){
    console.log(`${personTwo.firstName} ${personTwo.lastName} is a ${personTwo.age} year old ${personTwo.job} in ${personTwo.city}.`);
  }
}

personTwo.method();

// Bonus 1
function objectToArray(obj){
  return Object.entries(obj)
}

console.log(`B1 ==> ${objectToArray({
  A: 1,
  B: 2,
  C: 3
})}`);
console.log(`B1 ==> ${objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) }`);

// Bonus 2
let student = {
  name: "Mike", 
  class: "4A",
  course: "English"
}

function properties(obj){
  console.log(`B2 ==> ${Object.keys(obj)}`);
}

properties(student)

//Bonus 3
let first = {firstName: "John"}
let last = {lastName: "Smith"}

function merge(obj1, obj2){
  return {...obj1, ...obj2} 
}

console.log(merge(first, last));
// last object overwrites the first

// Bonus 4
let personFour = {
  name: "John", 
  job: "teacher"
}

function swap(obj){
  let swap = {};
  for(let key in obj){
    swap[obj[key]] = key;
  }
  return swap;
}

console.log(swap(personFour));

// Bonus 5
function keysAndValues(obj){
  combo = [Object.keys(obj),Object.values(obj)]
  return combo
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
console.log(keysAndValues({key: true}))


var count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');