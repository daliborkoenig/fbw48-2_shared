// Functions Effects
// 1) The functions Impact the Environment without return

let num = 8
console.log(`num ==> ${num}`); // num ==> 8

function impactTheEnv(){
  num = 1000
}

console.log(`num ==> ${num}`); // num ==> 8
impactTheEnv();
console.log(`num ==> ${num}`); // num ==> 1000

// 2) The functions with return Statement

function myFunction(){
  return `today is a sunny day`
}
myFunction() // shows nothing as we didn't print the result
console.log(myFunction()) // 

// 3) The functions Impact the Environment and return

let firstName = `JohnnyV`

function changeNameAndReturnOutput(){
  firstName = `Dalibor`
  return `the name was changed`
}

console.log(`person ==> ${firstName}`);
changeNameAndReturnOutput() 
console.log(`after calling the function the name has changed ==> ${firstName}`);


