const arr = ["c","a","b"]

console.log("A - Z",arr.sort());
console.log("Z - A",arr.reverse());

const teams = ["Real Madrid", "Manchester Utd", "Bayern Munich", "Juventus"]

console.log("A - Z",teams.sort());
console.log("Z - A",teams.reverse());

let nums = [3,23,12]

console.log("A - Z",nums.sort());
console.log("A - Z with compare function",nums.sort(function(a,b){return a-b}));  // 
console.log("Z - A with compare function",nums.sort(function(a,b){return b-a}));  // 

let products = [{id:1,name:"banana",price:500}, {id:5,name:"canteloupe",price:100}, {id:2,name:"apple",price:300}]

console.log(products.sort(function(a,b){return a.price-b.price}));