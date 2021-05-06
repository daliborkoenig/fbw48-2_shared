let arr = [1,2,3]
// arr2 = arr.map(x => x+2)
function addOne(item){
  return item+1
}
arr2 = arr.map(addOne) // callback function

console.log(arr2);
console.log(arr);