// A return statement determines the value the function returns.
// A return keyword without an expression after it will cause the function to return undefined.
// Functions that don’t have a return statement at all return undefined.

function greeting(){
  console.log('Nope');
}

console.log(greeting());

function greetingWithReturn(){
  return `What up motherfuckers`
}

console.log(greetingWithReturn());