// 1
function tellFortune(numOfChild,partnersName,geoLoc,jobTitle){
  return `You will be a ${jobTitle} in ${geoLoc}, and you will be married to ${partnersName} with ${numOfChild} kids.`
}

console.log(tellFortune(1,'John','Berlin','waiter'));
console.log(tellFortune(2,'Jane','Frankfurt','director of the universe'));
console.log(tellFortune(3,'Notjohn','Munich','slave'));
console.log(tellFortune(4,'Notjane','Hamburg','teller'));

// 2
function calculateDogAge(a){
  a = a*7
  return `Your doggie is ${a} years old in dog years!`
}

console.log(calculateDogAge(5));
console.log(calculateDogAge(10));
console.log(calculateDogAge(2));

// 3
function calculateSupply(age,amount){
  const maxAge = 100
  let need = ((maxAge - age)*365)*amount
  return `You will need ${need} to last you until the ripe old age of ${maxAge}`
}

console.log(calculateSupply(35,123));

// 4
function calcCircumfrence(r){
  circ = 2 * Math.PI * r;
  return `The circumference is ${circ.toFixed(2)}`;
}

function calcArea(r){
  area = Math.PI*r**2 
  return `The area is ${area.toFixed(2)}`;
}

function circle(r){
  return `${calcCircumfrence(r)} and ${calcArea(r)}`
}

console.log(calcCircumfrence(5));
console.log(calcArea(5));
console.log(circle(5));

// 5

function celsiusToFahrenheit(tc){
  tf = (tc/5*9)+32
  return `${tc}°C is ${tf}°F.`
}
// Divide by 5, then multiply by 9, then add 32

function fahrenheitToCelsius(tf){
  tc = (tf-32)*5/9
  return `${tf}°F is ${tc}°C.`
}

// Deduct 32, then multiply by 5, then divide by 9

console.log(celsiusToFahrenheit(35));
console.log(fahrenheitToCelsius(95));
