/*

Assignment 6

Write a program that accepts 2 arguments.

The 1st argument will be an array. We will call this argument "words".

The 2nd argument will be a number. We will call this argument "resultLength".

The program must:

1) Check that the "words" argument is an array. If it is not an array,
it should return undefined

2) Check that the "resultLength" argument is a number. If it is not a number,
it should return undefined

3) Return an array of strings. The array length should be equal to the "resultLength" value

4) The strings in the resulting array should be selected at random from the input "words" array

For example:

words = [ "cat", "dog", "rat" ];
resultLength = 10;

Result:
["dog", "rat", "rat", "dog", "cat", "cat", "dog", "rat", "cat", "dog"] // length = 10

When you have finished writing your program, you can test it with sampleWords, and sampleResultLength below.

*/

const sampleWords = ["hat", "drum", "pillow", "violin", "telescope"];
const sampleResultLength = 200;

function randomArray(words,resultLength){
  let randomArray = []
  if (Array.isArray(words) && typeof resultLength === 'number'){
    for(i=0;i<resultLength;i++){
      randomArray.push(words[Math.floor(Math.random()*words.length)])
    }
    return randomArray
  }
  else {
    return undefined
  }
}

console.log(randomArray(sampleWords,sampleResultLength));