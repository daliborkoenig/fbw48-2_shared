// 1.
let [fruit , vegetable , ...food] = ["banana","cucumber","bread", "cakes", "pizza"]

console.log("1 ==>",fruit, vegetable,food);
 
// 2.
let object = {};
[object.name, object.costume] = `fran: "witch"`.split(" ")

console.log("2 ==>",object);

// 3.
let musician = {};
[musician.name, musician.nationality, musician.work, musician.genre, musician.greatestHit] = ["Regina Spektor", "American-Russian", "singer/songwriter and pianist", "indie-pop", "Us"]

function musicianFun(obj){
  return `${musician.name} is an ${musician.nationality} ${musician.nationality}. The musician sings ${musician.genre} and their greatest hit is ${musician.greatestHit}`
}
console.log(musicianFun(musician));