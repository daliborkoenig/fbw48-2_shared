// map
const arr =  [1,2,3,4,5,6]
const mapped = arr.map((item)=>item+30)
console.log(mapped);

// filter
const arr2 =  [1,2,3,4,5,6]
const filtered = arr.filter((item)=>item=== 2 || item === 4)
console.log(filtered);

// sort
const arr3 =  [1,2,3,4,5,6]
const alphabet = ["f","a","c","v","z"]

const sort = arr3.sort((a,b)=>a>b ? -1 : 1)
const sort2 = alphabet.sort((a,b)=>b>a ? -1 : 1)
console.log(sort);
console.log(sort2);