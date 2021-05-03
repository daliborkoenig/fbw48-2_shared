/*

Assignment 3

Write a program that accepts 2 arguments.

The 1st argument will be an array. We will call this argument "words1".

The 2nd argument will be an array. We will call this argument "words2".

The program must:

1) Check that the "words1" argument is an array. If it is not an array,
it should return undefined

2) Check that the "words2" argument is an array. If it is not an array,
it should return undefined

3) The program must return a new array, which contains all the values from
"words1" and "words2", ignoring all duplicate words.

4) Duplicate words must be removed (words should not appear more than once)

Hint: You could loop through the arrays

The return should be in an array

For example:

words1 = [ "red", "green" ]
words2 = [ "orange", "blue", "red" ]

The result should be:

[ "red", "green", "orange", "blue" ]

Notice how the word "red" only appears once in our result.

When you have finished writing your program, you can test it with sampleData1, and sampleData2 below.

*/

const sampleData1 = ["charismatic", "dream", "burial", "nut", "golf", "difficult", "report" ];
const sampleData2 = ["difficult", "report", "golf", "different", "orchestra", "cross", "dream", "shell", "portion" ];

function mergeWords(words1,words2){
  let wordsMerged = []
  if (Array.isArray(words1) && Array.isArray(words2)){
    wordsMerged = [...new Set(words1.concat(words2))]
    return wordsMerged
  }
  else {
    return undefined
  }
}

console.log(mergeWords(sampleData1,sampleData2));
