// 1.
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

let total1 = orders.reduce(function(total, item){
  return total + item.amount 
},0)

console.log(total1);

// 2. 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

let incrementedNumbers = arrayOfNumbers.map(function(item){return item+1})
console.log(incrementedNumbers);

// 3.
function filterEvens(arr){
  let arr2 = arr.filter(function(item){
    return item%2==0
  })
  console.log(arr2);
}

filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

// 4.
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterItems(array,query){
  return array.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) != -1)
}

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

// 5.
function sum(arr){
  let sum = arr.reduce(function(acc,item){return acc+=item})
  return sum
}

console.log(sum([1,2,3,4,5]));
console.log(sum([6,7,7]));

// 6.
let numbers = [2,4,6,8,9]
let sqrt = numbers.map(function(item){
  return Math.sqrt(item)
})

console.log(sqrt);