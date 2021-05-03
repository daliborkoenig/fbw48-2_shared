let personName = 'Max'
let personAge = 25

// console.log(personName);
// console.log(personAge > 20);
// console.log(personAge === 24); // check value and type
// console.log(personAge === '24'); // check value and type, it matters if the number is a string or number

// console.log(personAge == 24); // check only value
// console.log(personAge == '24'); // check only value, doesn't matter if the number is a string or number
// console.log(typeof(personAge));

// if (personAge == 24) return console.log('Bingo!!!')
// else if (personAge > 24) return console.log('Bigger')
// else if (personAge < 24) return console.log('Smaller')

//Arithmetic expressions
console.log(personAge + 5);

// more logical operators

//or operator
console.log(true || true); // result true
console.log(personAge > 20 || personAge < 30); //bigger than 20 or less than 30

console.log(true || false); //result true
console.log(personAge > 20 || personAge < 25); //bigger than 20 or less than 25
//                true               false        =true    ---if one of the operators is true it will give true

//and operator
console.log(true && true); // result true
console.log(personAge > 20 && personAge < 30); //bigger than 20 or less than 30
console.log(true && false); //result true
console.log(personAge > 20 && personAge < 25); //bigger than 20 or less than 25
//                true               false        =false   ---if one of the operators is false it will give false



