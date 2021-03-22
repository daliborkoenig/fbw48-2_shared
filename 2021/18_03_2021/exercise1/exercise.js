// INPUT ['welcome','to','arrays'] ===> OUTPUT 'welcome to arrays'

let test = ['welcome','to','arrays']

console.log(`'${test[0]} ${test[1]} ${test[2]}'`);

// ARRAYS
// let vs const
// let allows for reassign and modify
// const allows just modify

const arr = [1,2,3]

const copyArr = arr // this is just a reference, not a clone

const colors = ['red','blue','green'] // create an array with 3 strings
console.log(colors);
console.log(colors.length);

const array_1 = [] // create an empty array
console.log(array_1.length);

// Indexing in to array
const names = ['Alex','Tony','Pilar']
console.log(names[2]);
console.log(names);

//change element to array
names[1] = 'Jo'
console.log(names);

names[100] = 'Dalibor'
console.log(names);
console.log(names.length);

//Array length

const mixArray = ['A', 33, true, null, undefined, 'test', 'Alex']
console.log(mixArray.length);
console.log(mixArray[5]);
console.log(mixArray[mixArray.length-1]); //[number of items - 1], a way to target the last item

// POP AND PUSH
//push() method accepts any number of arguments and adds to the end of an array
//pop() method removes the last item in the array, decrements arrays length and returns that item

const array_2 = []
console.log(array_2);

//PUSH
array_2.push('Dalibr','Nedalibor')
console.log(array_2);

array_2.push('John')
console.log(array_2);

//POP

const array_3 = ['ABC', 100, 'Max']
console.log(array_3);

array_3.pop() //removes last item
console.log(array_3);
