// advanced parameters
function printMessage(msg){
  console.log(msg);
}

printMessage(`Hello World!`)

// ###########################

function printMessage2(msg = `Good Morning`){
  console.log(msg);
}

printMessage2()
printMessage2(`Hello World!`)

// rest parameters
function sum(...args){
  console.log(args);
  let result = 0;
  for(let i=0 ; i < args.length ; i++){
    result += args[i]
  }
  console.log(result);
}

sum(1,2,3,4,5,6,8)

function greet(firstName, lastName, ...titles){
  console.log(`Hello ${firstName} ${lastName} ${titles[0]} ${titles[1]}`);
}

greet(`Dalibor`, `Koenig`, `student`, `Web developer`, `Android developer` )

// #############################################

// arguments objects

function showName(){
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
}

showName(`Sara`, `Adam`, `Dalibor`)

// #################################
function sumNum(){
  let sum = 0
  for (let i = 0 ; i<arguments.length ; i++){
    sum += arguments[i]
  }
  return sum
}

console.log(sumNum(1,2,3,4,5))