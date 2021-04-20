// for in loop, it works with objects

let oldCar = {
  brand: "Toyota",
  model: "Tercel",
  year: 1996
}
// for(key in object){something}
for (let item in oldCar){
  console.log(item , oldCar[item]);
}
console.log("brand" in oldCar); //true

let user = {
  fName: "Dalibor",
  lName: "Koenig",
  age: "40"
}

for (let x in user){
  console.log(x, ": ", user[x]);
}

let str = "i like javascript"
for (let index in str){
  console.log(`the index of ${str[index]} is : ${index}`);
}

for (let i=0; i < str.length; i++){
  console.log(`the index of ${str[i]} is : ${i}`);
}
