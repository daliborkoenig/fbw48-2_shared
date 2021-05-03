// 1.
function isPlainObject(arg){
  if (Array.isArray(arg) || arg == null || typeof arg != "object")
  return false
  else{
    return true
  }
}

let data1_1 = { a: 1 };
let data1_2 = [1, 2, 3]
let data1_3 = null

console.log("1 ==> ",isPlainObject(data1_1))
console.log("1 ==> ",isPlainObject(data1_2))
console.log("1 ==> ",isPlainObject(data1_3))

// 2.
const data4 = { a: 1, b: 2 };

function makePairs(obj){
  return Object.entries(obj)
}

console.log("2 ==> ",makePairs(data4))

// 3.
const data3_1 = { a: 1, b: 2 , c: 3};

function without(obj,prop){
  for (let key in obj){
    // console.log(key==prop)
    if (key==prop) {
      delete obj[key]
    }
  }
  return obj  
}

console.log("3 ==> ",without(data3_1, 'b')); // { a: 1 }
console.log("3 ==> ",without({ a: 1, b: 2 , c: 3}, 'b')); // { a: 1 }

// 4.
const data4_1 = { a: 1, b: undefined };
const data4_2 = { a:undefined };
const data4_3 = { a: undefined, b: undefined, c: undefined };


function isEmpty(obj){
  let count = 0
  for (let key in obj){
   if (obj[key] == undefined) {
     count += 1
   };
  }
  if (Object.entries(obj).length == count){
    return true
  }
  else {
    return false; 
  }
}

console.log("4 ==> ",isEmpty(data4_1)); // false
console.log("4 ==> ",isEmpty(data4_2)); // true 
console.log("4 ==> ",isEmpty(data4_3))

// 5.
const data5_1 = { a: 1, b: 1 };  
const data5_2 = { a: 1, b: 1 };  
const data5_3 = { a: 1, b: 2 };

function isEqual(obj1,obj2){
  // let arr1 = Object.values(obj1)
  // let arr2 = Object.values(obj2)
  // let count = 0
  // for (i=0;i<arr1.length;i++){
  //   if(arr1[i] == arr2[i]){
  //     count++
  //   }
  // }
  // return count == arr1.length
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}
console.log("5 ==> ",isEqual(data5_1,data5_2))
console.log("5 ==> ",isEqual(data5_1,data5_3))
console.log("5 ==> ",isEqual(data5_2,data5_3))

// 6.
const data6 = { a: { b: [1, 2, 3] } }

function invoke(arr,path,method,param){
  let command = `arr.${path}.${method}(${param})`
  return eval(command)
}

console.log("6 ==> ",invoke(data6, 'a.b', 'splice', [1, 2])); // [2, 3]

// 7.
const data7 = { a: { b: undefined } }

function isEmptyDeep(obj){
  let count = 0
  for (let key in obj){
    if (obj[key] == undefined) {
      count += 1
    };
    if (obj[key][key] == undefined) {
      count += 1
    };
  }
  if (Object.entries(obj).length == count){
    return true
  }
  else {
    return false; 
  }
}
console.log("7 ==> ",isEmptyDeep(data7))

// 8.

const data8_1 = { a: 1, b: { c: 1 } };  
const data8_2 = { a: 1, b: { c: 1 } };  
const data8_3 = { a: 1, b: { c: 2 } };

function isEqualDeep(obj1,obj2){
  return JSON.stringify(obj1) === JSON.stringify(obj2) 
}

console.log("8 ==> ",isEqualDeep(data8_1, data8_2));// true  
console.log("8 ==> ",isEqualDeep(data8_1, data8_3)); // false   

// 9. 
const data = { a: 1, b: 2 };  
const data2 = { c: 1, b: 2 };

function intersection(firstObj,secondObj){
    const firstObjKeys = Object.keys(firstObj);

  return firstObjKeys.reduce((acc = {}, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {...acc,[key]: firstObj[key],
      };
    }

    return acc;
  }, {});
};

console.log("9 ==> ",intersection(data, data2)); // { b: 2 }


