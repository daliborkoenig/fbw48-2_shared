// spread
// to clone an object or array

// clone array
let colors = ["red","green","blue"]

let myColors = [...colors]

myColors.push("yellow")
console.log("colors: ",colors);
console.log("myColors: ",myColors);

let newColors = ["magenta","sparkling red"]

// myColors = [...newColors] ==> replaces thevalues
myColors.push(...newColors) // ==> pushes ...arr inside the destination array
myColors = ([...colors,...newColors]) // combines colors and newColors 
console.log("myColors: ",myColors);

// clone an object

let user = {
  name: "SomeName",
  address: "SomeAddress"
}

//let cloneUser = user
let cloneUser = {...user}
cloneUser.age = 30

console.log("user: ",user);
console.log("cloneUser: ",cloneUser);

let data = {
  job: "someJob",
  city: "someCity",
  company: "someCompany"
}

cloneUser = {...user,...data, someKey:"someKey"}
console.log("cloneUser: ",cloneUser);

//############################################
// Shallow cloning, works only for simple objects

let recipe = {
  mainDish: "Pizza",
  sideDish: "Fries",
  fruits: ["apple","banana","pineapple"]
}


let newRecipe = {...recipe}
newRecipe.mainDish = "Pasta"
newRecipe.fruits.push("orange")

console.log("recipe: ",recipe);
console.log("newRecipe: ",newRecipe);

// deep cloning for objects, works for nested objects
// 1 JSON
// 2 RECURSION function

let deepClone = JSON.parse(JSON.stringify(recipe))
deepClone.fruits.push("avocado")

console.log("deepClone: ",deepClone);
