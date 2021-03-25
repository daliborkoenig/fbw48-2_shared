// 1
function exponential(a,b){
  if (typeof a == 'number' && typeof b == 'number'){
    let exp = '';
    for (let i = 1; i <= b; i++) {
      exp += i + " ";
    }
    console.log(exp);
  }
  else {
    console.log(`not a number, try again`)
  }
}

exponential(2,8)

// 2
let fruit = 'Peach'
function printFavoriteFruit(){
  fruit = `_x_`;
  return `my favorite fruit is ${fruit}`
}

console.log(printFavoriteFruit());

// 3
function exponent(a,b){
  result = Math.pow(a,b);
  return result
}
console.log(exponent(2,3));

console.log(typeof(5));