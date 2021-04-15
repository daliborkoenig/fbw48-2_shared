/*

Assignment 4

Write a program that accepts 2 arguments.

The 1st argument will be an array. We will call this argument "words".

The 2nd argument will be a string. We will call this argument "suffix".

The program must:

1) Check that the "words" argument is an array. If it is not an array,
it should return undefined

2) Check that the "suffix" argument is a string. If it is not a string,
it should return undefined

The program must return an array, which contains all the string values from "words" with the value
"suffix" joined at the end, including a dash ("-") to separate the two words.

For example:

words = [ "orange", "apple" ]
suffix = "seller"

The result should be:

[ "orange-seller", "apple-seller" ]

When you have finished writing your program, you can test it with animals, and suffix below.

*/

const animals = ["cow", "orangutan", "dog", "pig", "jaguar", "lion", "cat", "shrew", "rat", "elephant",
    "sloth", "calf", "llama", "ewe", "okapi", "polar bear", "ram", "panda", "weasel", "budgerigar",
    "kangaroo", "horse", "chicken", "mule", "gorilla"];

const suffix = "doctor";

function addSuffix(words, suffix){
    let suffixArray = []
    if (Array.isArray(words) && typeof suffix === 'string'){
      for(i=0;i<words.length;i++){
          suffixArray.push(`${words[i]}-${suffix}`)
      }
      return suffixArray
    }
    else {
      return undefined
    }
}

console.log(addSuffix(animals,suffix));