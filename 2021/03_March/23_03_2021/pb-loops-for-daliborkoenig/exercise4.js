// 1
for (var i = 1; i <= 20; ++i){
  console.log(i);
}

// 2
for (var i = 1; i <= 5; ++i){
  switch(i){
    case 1:
      console.log(`There is one bottle of beer on the wall`);
    break;
    case 2:
      console.log(`There are two bottle of beer on the wall`);
    break;
    case 3:
      console.log(`There are three bottle of beer on the wall`);
    break;
    case 4:
      console.log(`There are four bottle of beer on the wall`);
    break;
    case 5:
      console.log(`There are five bottle of beer on the wall`);
    break;
  }
}

// 3
for (var i = 1; i <= 20; ++i){
  if (i%2 === 0){
    console.log(`${i} is an even number`);
  }
  else {
    console.log(`${i} is an odd number`);
  }
}


// 4
for (var i = 0; i <= 10; ++i){
  console.log(`${i} * 9 = ${i*9}`);
}

// 5
for (var i = 1; i <= 100; ++i){
  if (i%3 === 0 && i%5 === 0){
    console.log(`FizzBuzz`);
  }
  else if (i%3 === 0){
    console.log(`Fizz`);
  }
  else if (i%5 === 0){
    console.log(`Fizz`);
  }
  else {
    console.log(`${i}`);
  }
}

// 6
let sum = 0
for (let i = 0; i < 1000; i++) {
  if(i%3 === 0 || i%5 ===0){
      sum = sum + i
  }
}
console.log(sum);

// 7
let a = "";
for(let i = 100; i <= 1000; i += 100) {
  a += i + " ";
}
console.log(a);

let b = ""
for(let i = 0; i <= 10; i += 2) {
  b += i + " ";
}
console.log(b);

let c = ""
for(let i = 3; i <= 15; i += 3) {
  c += i + " ";
}
console.log(c);

let d = ""
for(let i = 9; i >= 0; i -= 1) {
  d += i + " ";
}
console.log(d);

let e = ""
for(let i = 1; i <= 4; i=i+1) {
  e += `${i} ${i} ${i} `;
}
console.log(e);

let f = ""
for ( var i = 0; i < 3; i++) {
  for (p = 0; p <= 4; p++)
  f += p + " "
}
console.log(f);

// 8 
function palindrome(string){
    let split = string.split('')
    let halfLength = Math.floor(split.length / 2)
    if (split.slice(0,halfLength).join() === split.reverse().slice(0,halfLength).join()){
        console.log(`${string} is a palindrome`);
    }
    else {
        console.log(`${string} is NOT a palindrome`);
    }
}

palindrome("tarrattarrat")


