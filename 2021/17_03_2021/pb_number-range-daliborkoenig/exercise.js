// version 1
let max = 15
let min = 1
let test = 100
let result

if (test >= min && test <= max){
  result = 'in the range'
}
else {
  result = 'out of the range'
}

// Version 2
console.log(result); 

function checkRange() {
  return (test >= min && test <= max ? result = 'in the range' : result = 'out of the range')
}
console.log(result)