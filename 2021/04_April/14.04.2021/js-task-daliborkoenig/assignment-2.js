/*

Assignment 2

Write a program that accepts 2 arguments.

The 1st argument will be an array. We will call this argument "names".

The 2nd argument will be a string. We will call this argument "searchValue".

The program must:

1) Check that the "names" argument is an array. If it is not an array,
it should return undefined

2) Check that each item in an array is a string, and return only those
strings that match the value "searchValue"

The return should be in a single number, which is a count of the number of matches

For example:

names = [ "book", "plane", "book", "orange" ]
searchValue = "book"

Number of times the value "book" is found is 2

When you have finished writing your program, you can test it with the sampleData variable below.
Use a threshold searchValue of "jupiter", what result do you get?

*/

const sampleData = ["venus","saturn","uranus","jupiter","earth","uranus","saturn","saturn","earth","venus","earth","saturn","uranus","mercury","jupiter","mercury","mars","jupiter","neptune","uranus","earth","neptune","uranus","mercury","uranus","earth","saturn","mercury","mars","venus","jupiter","saturn","uranus","jupiter","earth","mars","saturn","jupiter","jupiter","jupiter","venus","mars","venus","saturn","mercury","uranus","mercury","neptune","neptune","mars","jupiter","mars","venus","mars","mercury","neptune","saturn","venus","saturn","mars","saturn","mars","mars","mercury","uranus","mars","uranus","neptune","saturn","earth","jupiter","jupiter","neptune","uranus","mercury","earth","venus","uranus","uranus","uranus","mars","uranus","uranus","venus","mercury","mercury","neptune","uranus","jupiter","mars","earth","earth","uranus","jupiter","earth","earth","jupiter","jupiter","jupiter","mars"];

function checkNames(names,searchValue){
  let count = 0
  if (Array.isArray(names)){
    for(i=0;i<names.length;i++){
      if (names[i]!==searchValue){
        continue
      }
      count++
    }
    return `Number of times the value ${searchValue} is found is ${count}`
  }
  else {
    return undefined
  }
}

console.log(checkNames(sampleData, 'jupiter'));
