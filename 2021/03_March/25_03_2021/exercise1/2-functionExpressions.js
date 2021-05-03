// there is another syntax to creating a function called function Expressions
// 1. create function with a function keyword
// 2. create a function with let/const/var keyword


// 1.
sumNumbers() // we can call the function before it is written

function sumNumbers(){
  console.log(6+11);
}

sumNumbers()


// function sumNumbers2(a,b){
//   console.log(a+b);
// }

// sumNumbers2(100,100)

// 2. if we create a function with const/let/var we dont have access to function from anywhere but only after it is declared

// saySomething() will not work here

const saySomething = function(){
  console.log('What up motherfuckers!');
}

saySomething()
