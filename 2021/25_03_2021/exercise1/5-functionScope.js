// Global/Script Scope VS local Scope

let num = 66 // global scope, variable is global

console.log(`num ==> ${num}`);

function greeting(){
  let name = `Dalibor` // local scope. it exists only in this function
  return `Good morning ${name}`
}

console.log(greeting());


