// Add answers here 
// Conditional Algorithms 
// 1.
function nameOfCity(str){
  if (str.toLowerCase().startsWith('los')|| str.toLowerCase().startsWith('new')){
    return str
  }
  else {
    return 'The city name does not begin with Los or New'
  }
}

console.log(`CondAlg 1 ==> ${nameOfCity('New York')}`)
console.log(`CondAlg 1 ==> ${nameOfCity('newark')}`)
console.log(`CondAlg 1 ==> ${nameOfCity('London')}`)

// 2.
function isDivisible(num){
  return num%100 == 0
}

console.log(`CondAlg 2 ==> ${isDivisible(1)}`)
console.log(`CondAlg 2 ==> ${isDivisible(1000)}`)
console.log(`CondAlg 2 ==> ${isDivisible(100)}`)

// 3.
function missingAngle(a,b){
  let c = 180 - a - b;
  if (c<90 && c>0){
    return 'acute'
  }
  else if (c==90 && c<180){
    return 'right angle'
  }
  else if (c>90 && c<180){
    return 'obtuse'
  }
  else {
    return `not a triangle, noob`
  }
}

console.log(`CondAlg 3 ==> ${missingAngle(11,20)}`);
console.log(`CondAlg 3 ==> ${missingAngle(27,59)}`);
console.log(`CondAlg 3 ==> ${missingAngle(135,11)}`);
console.log(`CondAlg 3 ==> ${missingAngle(45,45)}`);
console.log(`CondAlg 3 ==> ${missingAngle(145,45)}`);

// 4.
function isRaining(cond){
  return (cond == true) ? 'wet day - you need an umbrella' : 'dry day - leave your umbrella at home'
}

console.log(`CondAlg 4 ==> ${isRaining(true)}`);
console.log(`CondAlg 4 ==> ${isRaining(false)}`);

// Loops
// 1.
function geometricSequence(){
  let a = ""
  for(let i = 1; i <= 256; i *= 2) {
    a += i + " ";
  }
  return a
}

console.log(`Loops 1 ==> ${geometricSequence()}`);

// 2.
function multiplesOfThree(){
  let a = ""
  for(let i = 1; i <= 15; i++ ) {
    if (i%3 == 0){
      a += i + " ";
    }
  }
  return a
}

console.log(`Loops 2 ==> ${multiplesOfThree()}`);

// Math
// 1.
function powerOf(int){
  return Math.pow(int,int)
}

console.log(`Math 1 ==> ${powerOf(3)}`);
console.log(`Math 1 ==> ${powerOf(4)}`);

// Problem solving
// 1.
function vowelCount(str){
  let chars = str.split("")
  let vowel = 0
  for(i = 0 ; i < chars.length ; i++){
    if (chars[i].toLowerCase() == `a` || chars[i].toLowerCase() == `e` || chars[i].toLowerCase() == `i` || chars[i].toLowerCase() == `o` || chars[i].toLowerCase() == `u`){
      vowel++
    }
  }
  return vowel
}

console.log(`ProbSolv 1 ==> ${vowelCount('hello')}`);
console.log(`ProbSolv 1 ==> ${vowelCount('test')}`);
console.log(`ProbSolv 1 ==> ${vowelCount('fbw')}`);


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

