function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();


// 3.
function createBase(x) {
  return function(y) {
    return x + y;
  }
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
