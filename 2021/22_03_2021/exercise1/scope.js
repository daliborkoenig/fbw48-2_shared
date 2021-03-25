// Global scope

let name = 'Max'; // global
let age = 35;

// Block scope everything inside { }
if (age = 35){
  let job = 'frontend developer';
  var address = 'Berlin';
  let name = 'Dalibor'
  console.log(job);
  console.log(name); //output is Dalibor as log is inside { } and new name is declared inside the block { }
}

console.log(name); //output is Max as it is global

// console.log(job); only accessible inside {} if using let inside {}
console.log(address); // accessible from anywhere if using var inside {}

