// function objectToArray(object) {
//   let arr = [];
//   // console.log(Object.keys(object), Object.values(object));
//   for (let x in object) {
//     console.log(object[Object.keys(x)]);
//     console.log(object[Object.values(x)]);
//       arr.push([object[Object.keys(x)], object[Object.values(x)]]);
//       // }
//       // return Object.entries(object);
//   }
//   return arr
// }
// console.log(objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }))

function objectToArray(object) {
  let arr = [];
  for (let keys in object) {
      arr.push([keys, object[keys]]);
  }
  return arr
}
console.log(objectToArray({
  A: 1,
  B: 2,
  C: 3
}))

console.log(objectToArray({
  cats: 1,
  dogs: 2,
  turtles: 4
})); 