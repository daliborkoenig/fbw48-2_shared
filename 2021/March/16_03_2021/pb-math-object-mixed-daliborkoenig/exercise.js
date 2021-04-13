// 1
// let countries = 'Germany Spain Italy USA';
// countries = countries.split(" ");
// let random = Math.floor(Math.random() * countries.length);
// console.log(countries[random]);

let countries = 'Germany Spain Italy USA';
function pickCountry() {
  countries = countries.split(' ');
  let i = Math.floor(Math.random() * countries.length);
  console.log(countries[i]);
}
pickCountry(); 

// 2
// let names = 'Alex Max Tommy';
// names = names.split(" ");
// let random2 = Math.floor(Math.random() * names.length);
// console.log(`Hello ${names[random2]}`);

let names = 'Alex Max Tommy';
function pickName() {
  names = names.split(' ');
  let i = Math.floor(Math.random() * names.length);
  console.log(`Hello ${names[i]}`);
}
pickName(); 
console.log(names[1]);

// 3
// let numbers = '-1 7 -33 -8 9';
// numbers = numbers.split(" ")
// let random3 = Math.floor(Math.random() * numbers.length);
// console.log(Math.abs(numbers[random3]));

let numbers = '-1 7 -33 -8 9'
function pickNumber() {
  numbers = numbers.split(' ');
  let i = Math.floor(Math.random() * numbers.length);
  console.log(Math.abs(numbers[i]));
}
pickNumber(); 

