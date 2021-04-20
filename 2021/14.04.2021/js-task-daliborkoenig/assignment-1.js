/*

Assignment 1

Write a program that accepts 2 arguments.

The 1st argument will be an array. We will call this argument "numbers".

The 2nd argument will be a number. We will call this argument "threshold".

The program must:

1) Check that the "numbers" argument is an array. If it is not an array,
it should return undefined

2) Check that each item in an array is a number, and return only those
numbers that are higher than the threshold.

3) The return should be in an array format

For example:

numbers = [ 23, 32, 345, 57, 65 ]
Threshold = 50

Numbers which are greater than the threshold = [ 345, 57, 65 ]

When you have finished writing your program, you can test it with the sampleData variable below.
Use a threshold value of 40, what result do you get?

*/
const sampleData = [24,0,61,60,24,27,11,47,94,22,60,72,15,65,29,78,11,59,99,30,31,13,66,31,91,98,49,0,81,8,54,19,4,88,66,56,41,78,31,58,86,60,71,74,74,31,20,9,99,29,28,5,90,14,90,73,65,51,53,14,13,87,59,16,8,14,22,20,97,41,20,71,55,3,96,90,82,72,4,76,12,18,82,67,9,81,98,9,92,39,27,8,76,13,1,17,99,82,89,84,49];

function checkArray(numbers, threshold){
  let newArr = []
  for (i=0;i<numbers.length;i++){
    if (Array.isArray(numbers) && typeof numbers[i] == "number"){
      for(i=0;i<numbers.length;i++){
        if (numbers[i]<=threshold){
          continue
        }
        newArr.push(numbers[i])
      }
      return newArr
    }
    else {
      return undefined
    }
  }
  // if (Array.isArray(numbers)){
  //   for(i=0;i<numbers.length;i++){
  //     if (numbers[i]<=threshold){
  //       continue
  //     }
  //     newArr.push(numbers[i])
  //   }
  //   return newArr
  // }
  // else {
  //   return undefined
  // }
}

console.log(checkArray(sampleData,40));


