/*

Assignment 7

Write a program that accepts 2 arguments.

The 1st argument will be an array. We will call this argument "words1".

The 2nd argument will be an array. We will call this argument "words2".

The program must:

1) Check that the "words1" argument is an array. If it is not an array,
it should return undefined

2) Check that the "words2" argument is an array. If it is not an array,
it should return undefined

3) The program must return a new array, which contains all strings which appear in
both arrays "words1" and "words2".

4) Only duplicate words must be returned

Hint: You could loop through the arrays

The return should be in an array

For example:

words1 = [ "red", "green" ]
words2 = [ "orange", "blue", "red" ]

The result should be:

[ "red" ]

When you have finished writing your program, you can test it with sampleData1, and sampleData2 below.

*/

const sampleData1 = ["pool", "car", "burial", "nut", "golf", "difficult", "report", "seashell", "draft", "helicopter", "toilet", "trumpet", "foil", "gas" ];
const sampleData2 = ["symbol", "fright", "space", "ice", "orchestra", "cross", "dream", "shell", "portion", "helicopter", "grass", "game", "fold", "tree" ];

// function onlyDuplicates(words1,words2){
//   let wordsMerged = []
//   if (Array.isArray(words1) && Array.isArray(words2)){
//     for (word1 of words1){
//       for (word2 of words2){
//         if(word2===word1){
//           wordsMerged.push(word2)
//         }
//       }
//     }
//   }
//   else {
//     return undefined
//   }
//   return wordsMerged

// }

function getDuplicateWords(words1, words2) {
  let duplicateWords = []
  if (Array.isArray(words1) && Array.isArray(words2)) {
    for (word1 of words1) {
      for (word2 of words2) {
        if (word2 === word1) {
        duplicateWords.push(word2)
        }
      }
    }
  } 
  else {
    return undefined
  }
  return duplicateWords
} 

console.log(getDuplicateWords(sampleData1,sampleData2));