// shift() removes the first item in the array
const colors = ['blue', 'red', 'green']
console.log(colors);

colors.shift()
console.log(colors);

//unshift() adds any number of items to the front of array

colors.unshift('brown','white') //adds brown and white to the front of array
console.log(colors);

const array_1 = ['A', 'B', 'C', 'D']
const array_2 = [1, 2, 3, 4]

const concatArrays = array_1.concat(array_2)
console.log(concatArrays);