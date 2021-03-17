// Expressions:
// comparison operators (===, ==, !==, !=, >=, <=, >, >)
// returns as true or false

// Using assignement ('=')

console.log('=============================');
// === will check value and data type
// == will check only value

console.log('  === will check value and data type');
console.log('  == will check only value');
console.log(' 5 === 5 ', 5 === 5); // true
console.log(' 5 == 5 ', 5 == 5); // true

console.log(' 5 === "5" ', 5 === "5"); // false
console.log(' 5 == "5" ', 5 == "5"); // true

console.log('=============================');
// !== is opposite of ===
// != is opposite of ==

console.log('  !== is opposite of ===');
console.log('  != is opposite of ==');

console.log(' 5 !== 5 ', 5 !== 5); // false
console.log(' 5 != 5 ', 5 != 5); // false

console.log(' 5 !== "5" ', 5 !== "5"); // true
console.log(' 5 != "5" ', 5 != "5"); // false

console.log('=============================');
//>=, <=, >, >
console.log('  >=, <=, >, >');
console.log(' 5 >= "3" is bigger OR equal than gives', 5 >= "3"); // true
console.log(' 5 <= "3" smaller OR equal than gives', 5 <= "3"); // false
console.log(' 5 > "3" bigger gives', 5 > "3"); // true
console.log(' 5 < "3" smaller gives', 5 < "3"); // false


console.log('=============================');
// && (and) || (or)
console.log('  && (and) || (or)');

console.log('1 == 1 && 1=="1" - true AND true gives',1 == 1 && 1=="1");
console.log('1 === 1 && 1==="1" - true AND false gives',1 === 1 && 1==="1");
console.log('1 === 1 || 1==="1" - true OR false gives',1 === 1 || 1==="1");

// && will pick up the first falsy case
// || will pick up the first truthy case
console.log(1 && 'Hello' && undefined && false);
console.log(1 && null && undefined && false);
console.log(1 || 'Hello' || undefined || false);

console.log(0 || null);





//example usage
let userName = 'Dalibor'
let userEmail = 'dalibor@gmail.com'
let userPassword = '12345'
let confirmPassword = '12345'

if (userPassword == confirmPassword){
  if (userName.trim() && userEmail.trim() && userPassword.trim()) {
    console.log('the user sign up!');
  }
  else {
    console.log('there is something missing');
  }
}
else {
  console.log('The passwords are not equal');
}

