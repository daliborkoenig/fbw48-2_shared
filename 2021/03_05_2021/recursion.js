// let counter = 10
// while (counter > 0){
//   console.log(counter--);
// }

// for (let i=10;i>0;i--){
//   console.log(i);
// }

let countdown = function(value){
  if (value>0) {
    console.log(value);
    return countdown(value - 1)
  }
  else {
    return value
  }
}

countdown(10);

let factor = function(number){
  let result = 1
  let count
  for (count = number ; count > 1; count--){
    result *= count
  }
  return result
}

console.log(factor(7));

let factorial = function(number){
  if(number <= 0){
    return 1
  }
  else {
    return (number * factorial(number-1))
  }
}

console.log(factorial(6));
