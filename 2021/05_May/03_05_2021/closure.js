// global scope

// let msg = "Hello" // global scope
// function showMsg(){
//   let msg = "Hi"  // local scope
//   console.log(msg);
// }
// showMsg()
// console.log(msg);

function outerFunction(){
  let outerVariable = 1 //global scope for innerFunction
  let outerVariable2 = 2
  function innerFunction(){
    console.log("innerFunction ==>",outerVariable);
    function innerFunction2(){
      console.log("innerFunction2 ==>",outerVariable2);
    }
    return innerFunction2
  }
  return innerFunction
}

// another way
outerFunction()() //second () is calling the innerFunction
outerFunction()()() // third one is calling innerFunction2


// #############################################################

function counterFun(){
  let counter = 0
  function increaseCounter(){
    return counter += 1
  }
  return increaseCounter
}

let count = counterFun()

console.log(count()); // calling the outside function and changing the counter
console.log(count());
console.log(count());

console.log(counterFun()()); //only calling the inside function

// ####################################################################
function makeAdder(x){
  function add(y){
    return y+x
  }
  return add
}

let plusOne = makeAdder(1)
console.log(plusOne(4));
let plusTen = makeAdder(10)
console.log(plusTen(5));

console.log(makeAdder(1)(2)); // (x) from outer function (y) from inner function

// ######################################################################
function init(){
  let name = "Mozzilla"
  function displayName(){
    console.log(name);
    function displayVersion(){
      let version = "88.0"
      console.log("version",version);
    }
    return displayVersion
  }
  return displayName
}

init()()()

// #######################################################################

function makeTitler(x){
  function title(y){
    return `${x} ${y}`
  }
  return title
}

let MrTitle = makeTitler("Mr.")
let msTitle = makeTitler("Ms.")

console.log(msTitle("Lara"))
console.log(MrTitle("John"))
