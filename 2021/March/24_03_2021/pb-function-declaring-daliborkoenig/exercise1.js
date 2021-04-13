// 1
function multiplyOne(a,b){
  return a*b
}

// 2

const multiplyTwo = function (a,b){
  return a*b
}

// 3
const multiplyThree = (a,b) => a*b

console.log(multiplyOne(2,5));
console.log(multiplyTwo(2,5));
console.log(multiplyThree(2,5));

// 4
function remainderOne(a,b){
  return a%b
}

const remainderTwo = function(a,b){
  return a%b
}

const remainderThree = (a,b) => a%b

console.log(remainderOne(2,5));
console.log(remainderTwo(2,5));
console.log(remainderThree(2,5));
