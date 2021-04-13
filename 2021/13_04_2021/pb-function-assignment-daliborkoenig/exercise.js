// 1.
function concat(a,b){
  arr = a.concat(b)
  return arr
}

console.log(`1 ==> ${concat([4, 8, 9], [2, 6, 8])}`)

// 2.
function getLast(a){
  last = a[a.length-1]
  return last
}

console.log(`2 ==> ${getLast([1, 2, 3])}`)
console.log(`2 ==> ${getLast(["cat", "rabbit", "penguin"])}`)

// 3.
function findIndex(a,b){
  index = a.indexOf(b)
  return index
}

console.log(`3 ==> ${findIndex(["Hi", "FBw-48-2", "WEB", "DEVELOPERS"], "FBw-48-2")}`)

// 4.
function skipSugarDrinks(arr){
  const sugarOne = `Cola`
  const sugarTwo = `Fanta`
  const nonSugar = arr.filter(nonSugar => nonSugar !== sugarOne.toLowerCase() && nonSugar !== sugarTwo.toLowerCase())
  return nonSugar
}

console.log(`4 ==> ${skipSugarDrinks(["fanta", "cola", "water", "Lemonade"])}`)

// 5.
function formatPhoneNumber(arr){
  // let one = arr.slice(0,3)
  // one.unshift('(')
  // one.push(') ')
  // one = one.join('')
  // let two = arr.slice(3,6)
  // two = two.join('')
  // let three = arr.slice(6,10)
  // three.unshift('-')
  // three = three.join('')
  // return one+two+three
  arr.splice(0,0,'(');arr.splice(4,0,') '); arr.splice(8,0,'-');arr = arr.join('')
  return arr
}

console.log(`5 ==> ${formatPhoneNumber([0, 1, 5, 7, 5, 5, 4, 4, 6, 8])}`)

// 6.
function numOfUsers(arr){
  if (arr == undefined){
    return `no one online`
  }
  else if (arr.length == 2){
    return `${arr[0]} and ${arr[1]} are online`
  }
  else if (arr.length > 2){
    return `${arr[0]}, ${arr[1]} and ${arr.length-2} more online`
  }
  else {
    return `${arr} is online`
  }
}

console.log(`6 ==> ${numOfUsers()}`)
console.log(`6 ==> ${numOfUsers(['User-1'])}`)
console.log(`6 ==> ${numOfUsers(['User-1','User-2'])}`)
console.log(`6 ==> ${numOfUsers(['User-1','User-2',`User-3`])}`)
console.log(`6 ==> ${numOfUsers(['User-1','User-2',`User-3`,`User-4`])}`)

// 7.
function capMe(arr){
  let lowerCased = arr.map(name => name.toLowerCase())
  for(let i = 0 ; i < lowerCased.length ; i++){
    lowerCased[i] = lowerCased[i].charAt(0).toUpperCase() + lowerCased[i].substr(1);
  } 
  return lowerCased
}

console.log(`7 ==> ${capMe(["adam", "franco", "daniel", "sara"])}`)
console.log(`7 ==> ${capMe(["lana", "KOSTAS", "mara", "steven"])}`)

// 8. 
function keyFinder(obj, str){
  if (str in obj){
    return true
  }
  else {
    return false
  }
}

console.log(`8 ==> ${keyFinder({ name: 'Rania', age: 37, id: 101 }, "address")}`)
console.log(`8 ==> ${keyFinder({ isProgrammer: true, city: 'Paris', hasKids: true }, "city")}`)

// 9.
function objectToArray(obj){
  arr = Object.entries(obj)
  return arr
}

console.log(`9 ==> ${objectToArray({
  D: 1,
  B: 2,
  C: 3
})}`)

// 10.
function getBudgets(obj){
  let sum = 0;
  for (let i = 0 ; i < obj.length ; i++){
    sum += obj[i].budget
  }
  return sum
}

console.log(`10 ==> ${getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
])}`)

console.log(`10 ==> ${getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
])}`)

