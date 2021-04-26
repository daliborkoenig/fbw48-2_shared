// function to deep clone an object

function deepCopyFunction(srcObj){
  let outObj // the copied object
  let value; // value is the nested object
  if(typeof srcObj !== "object" || srcObj === null){
    return srcObj;
  }
  // create an array or object to save the values
  outObj = Array.isArray(srcObj) ? [] : {};
  for(let key in srcObj){
    value = srcObj[key]  //{ name: "someName" }
    
    // deep copy
    outObj[key] = deepCopyFunction(value)
  }

  return outObj
}

let originalArray = [3,55,100,{name:"someName", array: [1,{woot: "woot"},8,3]}]
// let originalArray = [3,55,100,{name:"someName", a: {woot:"woot"}}]
let deepCopyArray = deepCopyFunction(originalArray)
originalArray[3].name = "John"
deepCopyArray[3].name = "Anna"

console.log("originalArray", originalArray);
console.log("deepCopyArray", deepCopyArray);

let arr = [1,2,3,4,]
let arr2 = []
for (key in arr){
  arr2[key] = arr[key]
}
arr[0] = 6

console.log("arr = ",arr);
console.log("arr2 = ",arr2);