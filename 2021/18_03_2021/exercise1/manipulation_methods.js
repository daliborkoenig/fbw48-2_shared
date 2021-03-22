//array1.concat(array2) combines two arrays
const array_1 = ['A', 'B', 'C', 'D']
const array_2 = [1, 2, 3, 4]

const concatArrays = array_1.concat(array_2)
console.log(concatArrays);

// array.slice(begin,end) this method copies a section of array and returns a new array

const names = ['John', 'Max', 33, 99, true]

const sliceOfNames = names.slice(1,3)
console.log(sliceOfNames); //new array containing items on 1st and 2nd index
console.log(names); // nothing changes

// array.splice(index(or start), howmany, [element1][, ..., ElementN])

const numbers = [22,55,7,100,99,8,10,4,5,44]

console.log(numbers.splice(3,2)); // items that are going to be deleted
numbers.splice(3,2) // delete the items, start at index 3 and take out 2 items
console.log(numbers);

const chrs = ['a','b','c','Hallo', true, 'Welcome to array', 'Alex', 99]

chrs.splice(4,3)
console.log(chrs);