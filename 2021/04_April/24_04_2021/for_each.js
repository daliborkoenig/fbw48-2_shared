let nums= [1,2,3,4,5,6,8,9]

nums.forEach(function(item, index, array){console.log(`item ${item} is at index position: ${index} inside of ${array}`);})  // the arguments that we can use: item (the current element), index (the current element index), array (current array)

// item 1 is at index position: 0 inside of 1,2,3,4,5,6,8

let sum = 0
nums.forEach(function(item){sum += item})  // we can use it as normal loops
console.log("the sum of the array is: ",sum);

let divisibleTwo = 0
let divisibleThree = 0
let nonTwoThree = 0
nums.forEach(
  function(item){
    if (item%2===0) {
      divisibleTwo ++
    }
    else if (item%3===0) {
      divisibleThree ++ 
    }
    else {
      nonTwoThree ++
    }
  }
  
)  // we can use it as normal loops
console.log("there is",divisibleTwo,"numbers divisible with two and", divisibleThree,"items divisible by three. That leaves",nonTwoThree,"not divisible by two or three");

let srt = "javascript";
srt.split("").forEach(function(item){console.log(item);})
srt.split("").forEach(function(item, index){if(item ==="r"){console.log("the index of", item, "is", index)}})

function findLetter(item, index){
  if(item === "a"){
    console.log("the index of", item, "is", index);
  }
}

srt.split("").forEach(findLetter)