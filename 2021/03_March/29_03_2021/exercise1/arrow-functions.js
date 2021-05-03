// arrow function

// 1. arrow function with return
const getInfo1 = (name) => {
  return `hello ${name}`
}

const getInfo2 = name => {  //when there is one parameter, no need for brackets
  return `hello ${name}`
}

const getInfo3 = name => `hello ${name}`  //when you have only return statement you dont need curly brackets


console.log(getInfo1('Dalibor'));
console.log(getInfo2('John'));
console.log(getInfo3('Fucker'));