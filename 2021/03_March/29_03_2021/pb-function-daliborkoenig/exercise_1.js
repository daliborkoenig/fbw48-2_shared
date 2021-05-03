// 1.
function addUp(int){
  let sum=0
  for (let i = 1; i <= int; i++){
    sum += i
  }
  return sum
}

console.log('1==>',addUp(4))

// 2. 
function sumCubes(a,b,c){
  if (a==undefined){
    a=0
  }
  if (b==undefined){
    b=0
  }  
  if (c==undefined){
    c=0
  }
  return Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)
}

console.log('2==>',sumCubes(1,5,9))
console.log('2==>',sumCubes(2))
console.log('2==>',sumCubes())

// 3.
function isStrStartOfWord(string,word){
  if (string === word.slice(0,string.length)){
    return true
  }
  else{
    return false
  }
}

console.log('3==>',isStrStartOfWord("bu", "button"))


// 4.
function lessOrEqual(num){
  if (num <=0){
    return true
  }
  else {
    return false
  }
}

console.log('4==>',lessOrEqual(4));

// 5.
function countOccurrences(string,letter){
  test=string.split('')
  count=0
  for(let i=0; i<=test.length; i++){
    if (test[i]==letter){
      count = count+1
    }
  }
  return count;
}

console.log('5==>',countOccurrences("this is a string", "i"))

// 6. 
function calcBaseToExponent(a,b){
  return Math.pow(a,b)
}

console.log('6==>',calcBaseToExponent(3,3));

// 7. 
function dogAge(num){
  return num*7
}
console.log('7==>',dogAge(3));

// 8.
function lifetimeSupply(age,perDay){
  let amount = (100-age)*365.25*perDay
  return `8==> The snack company should provide you with ${amount} units, until you are a ripe old age of 100. Happy snacking!`
}

console.log(lifetimeSupply(25,2));
console.log(lifetimeSupply(40,3));

function lifetimeSupply2(age,perDay, maxAge){
  let amount = Math.round((maxAge-age)*365.25*perDay)
  return `8==> The snack company should provide you with ${amount} units, until you are a ripe old age of 100. Happy snacking!`
}

console.log(lifetimeSupply2(32, 0.58, 65));

// 9.
function isWaldoHere(str){
  let n = str.toLowerCase().search(`waldo`)
  console.log(`9==> ${str} ==> ${n!==-1}`);
}

isWaldoHere("is there a wal here?")
isWaldoHere("I found you Waldo!")
isWaldoHere("Wait, don't you mean Wally?")
isWaldoHere("waldo is here")

// 10.

function isEqualSlices(numOfSlices,numOfRecpients,slicePerPerson){
  console.log(`10==> ${numOfSlices >= numOfRecpients*slicePerPerson}`)
}

isEqualSlices(8, 3, 2)
isEqualSlices(8, 3, 3)
isEqualSlices(24, 12, 2)

// 11.
function isEqualNumXandO(str){
  let charlist = str.split("")
  let x = 0
  let o = 0
  for(i = 0; i < charlist.length; i++){
    if (charlist[i].toLowerCase() == `x`){
      x += 1
    }
    else if (charlist[i].toLowerCase() == `o`){
      o += 1
    }
  }
  console.log(`11==> ${x==o}`);
}

isEqualNumXandO("ooxx")
isEqualNumXandO("xooxx")
isEqualNumXandO("ooxXm")
isEqualNumXandO("zpzpzpp")
isEqualNumXandO("zzoo")

// 12.
function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
console.log(`12==> ${isPrime(7)}`)
console.log(`12==> ${isPrime(9)}`)
console.log(`12==> ${isPrime(10)}`)

// 13.
function checkEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase())
}

console.log(checkEmail('j@example.com'))
console.log(checkEmail('john.smith@com'))
console.log(checkEmail('john.smith@email.com'))
console.log(checkEmail('john..smith@email.com'))
console.log(checkEmail('john.@email.com'))