// 1.
function checkRange(num,obj){
  return num >= obj.min && num <= obj.max
}

console.log(`1 ==> ${checkRange(4, { min: 0, max: 5 })}`);
console.log(`1 ==> ${checkRange(4, { min: 4, max: 5 })}`);
console.log(`1 ==> ${checkRange(4, { min: 6, max: 10 })}`);
console.log(`1 ==> ${checkRange(5, { min: 5, max: 5 })}`);

// 2.
function scrabble(arr){
  let score = 0
  for (i=0;i<arr.length;i++){
    score += arr[i].score
  }
  return score
}

console.log(`2 ==> ${scrabble([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
  ])}`);

// 3.
function emptyOrNot(obj){
  return Object.entries(obj).length === 0
  console.log(Object.entries(obj).length);
}

console.log(`3 ==> ${emptyOrNot({})}`);
console.log(`3 ==> ${emptyOrNot({a: 1})}`);

// 4.
function countLetters(string) {
  let obj = {};
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = {};
    for (let j = 0; j < arr[i].length; j++) {
     if (!obj[arr[i]][arr[i][j]]) {
      obj[arr[i]][arr[i][j]] = 1;
     } else {
      obj[arr[i]][arr[i][j]]++;
    }
  }
  } return obj;
}

console.log(countLetters("tree"))

// 5.
function freeShipping(obj){
  let price = 0
  for (let key in obj){
    price += obj[key]
  }
  return price > 50
}

console.log(`5 ==> ${freeShipping({ "Sponge": 3.50, "Soap": 5.99 })}`);
console.log(`5 ==> ${freeShipping({ "Surround Sound Equipment": 499.99 })}`);
console.log(`5 ==> ${freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })}`);

// 6.
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go")
programming.difficulty = 7
delete programming.jokes
programming.isFun = true
console.log("6 ==> ",programming);
for (i=0;i<programming.languages.length;i++){
  console.log("6 ==> ",programming.languages[i]);
}
for(key in programming){
  console.log("6 ==> ",key);
}
for(key in programming){
  console.log("6 ==> ",programming[key]);
}


programming.message = function() {
  if (programming.isChallenging && programming.isRewarding){
  return "6 ==> ",`Learning the programming languages: "${this.languages}" is rewarding and challenging`;
  }
}

console.log(programming.message());
