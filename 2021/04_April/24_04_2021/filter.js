// filter returns a new array with items that pass the test provided by the callback function
let ages = [18,19,13,40,35]

let isAllowed = ages.filter(function(item,index) {
  // if (item >= 18){
  //   return item
  // }
  return item >=18  //condition for filter function
})

console.log(ages);
console.log(isAllowed);

let words = ["javascript", "java", "go", "php", "visual basic", "fortrun"]

let newWords = words.filter(item => item.length >= 6)

console.log(newWords);

//########################################################################
// filter array of items according to search word

let fruits = ["avocado", "banana", "apple", "pear"]
let search = "p"

let result = fruits.filter(item => item.toLowerCase().indexOf(search.toLowerCase()) != -1)

function searchFood(arr,word){
  return arr.filter(item => item.toLowerCase().indexOf(word.toLowerCase()) != -1)
}

console.log(result);
console.log(searchFood(fruits,search));