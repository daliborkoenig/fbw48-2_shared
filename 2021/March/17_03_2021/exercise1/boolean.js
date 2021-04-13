// HEX
var randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log(`#${randomColor}`);

// RGBA
let r = () => Math.random() * 256 >> 0;
let a = () => Math.random().toFixed(1);
let color = `rgba(${r()}, ${r()}, ${r()}, ${a()})`;
console.log(color);

// Falsy values
let falsyValue_1 = false;
console.log("falsyValue_1 ==> ", !!falsyValue_1);

let falsyValue_2 = undefined;
console.log("falsyValue_2 ==> ", !!falsyValue_2);

let falsyValue_3 = null;
console.log("falsyValue_3 ==> ", !!falsyValue_3);

let falsyValue_4 = 0;
console.log("falsyValue_4 ==> ", !!falsyValue_4);

let falsyValue_5 = "";
console.log("falsyValue_5 ==> ", !!falsyValue_5);

let falsyValue_6 = NaN;
console.log("falsyValue_6 ==> ", !!falsyValue_6);

// #####################
console.log("==================================");
// #####################

// Truthy values
let age = 1;
console.log("age ==> ", !!age);

let str = " ";
console.log("str ==> ", !!str);

// #####################
console.log("==================================");
// #####################

console.log("NaN ==> ", "A" * "Z"); //NaN


car = 'mercedes'

console.log(car === 1); 