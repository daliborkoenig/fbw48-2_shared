// 1
let a1 = 50
let b1 = 99

if ((a1>=50 && a1<=99) || (b1>=50 && b1<=99)){
  console.log(true);
}

// 2
let a2= 50
let b2 = 99
let c2 = 150

if ((a2>=50 && a2<=99) || (b2>=50 && b2<=99) || (c2>=50 && c2<=99)){
  console.log(true);
}

// 3
let a3 = 50
let b3 = 1000
let c3 = 150

if (a3 > b3 && a3 > c3){
  console.log(a3);
}

else if (b3 > a3 && b3 > c3){
  console.log(b3);
}

else if (c3 > b3 && c3 > a3){
  console.log(c3);
}

// 4
function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return "Py"+str1;
}

console.log(string_check("Python"));
console.log(string_check("thon"));

// 5
let a5 = 30
let b5 = 35

if ((a5 + b5) >= 50 && (a5 + b5) <= 80){
  console.log(65);
}
else {
  console.log(80);
}

// 6
let a6 = 23
let b6 = 15
if (a6+b6 == 8 || Math.abs(a6-b6 == 8)){
  console.log(true);
}
else{
  console.log(false);
}

// 7
let a7 = 1
let b7 = 14

if ((a7 == 15 || b7 == 15) || (a7+b7==15)){
  console.log(true);
}
else {
  console.log(false);
}

// 8
let a8 = 1
let b8 = 1
console.log(Number.isInteger(a8/7) || Number.isInteger(a8/11) || Number.isInteger(b8/7) || Number.isInteger(b8/11));

// 9
let a9 = 1
let b9 = 1

if (a9 != b9) {
  console.log(a9 + b9);
}
else {
  console.log(3*(a9+b9));
}

// 10
let a10 = 18
console.log('woot woot');
if (a10 - 19 > 0){
  console.log(2*(a10-19));
}
else{
  console.log(a10-19);
}

// 11
let firstName = 'Dalibor'
let age = 40

if (age < 13) {
  console.log(`${firstName} is a child`);
}
else if (age >= 13 && age <20) {
  console.log(`${firstName} is a teenager`);
}
else if (age >= 20 && age <30) {
  console.log(`${firstName} is a young adult`);
}
else {
  console.log(`${firstName} is an adult`);
}
