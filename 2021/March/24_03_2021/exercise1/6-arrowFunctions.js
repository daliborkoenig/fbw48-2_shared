// Arrow Functions shows with ES6.Arrow Functions very convenient for simple one-line actions, when we’re just too lazy to write many words.

// is is called arrow function because it looks like this () =>
// () => Arrow functions need const/let/var

function greetingOne(){
  return `Good morning Dalibor`
}

console.log(`greetingOne() ==> ${greetingOne()}`); //greetingOne() ==> Good morning Dalibor

const greetingTwo = function(){
  return `Good morning Mo`
}
console.log(`greetingTwo() ==> ${greetingTwo()}`); //greetingTwo() ==> Good morning Mo

//ARROW

const greetingThree =() => {
  return `Good morning Jo`
}

console.log(`greetingThree() ==> ${greetingThree()}`); //greetingThree() ==> Good morning Jo


const greetingFour =() => `Good morning Vietnam` //for one line of code we don't need {}

console.log(`greetingFour() ==> ${greetingFour()}`); //greetingFour() ==> Good morning Vietnam


