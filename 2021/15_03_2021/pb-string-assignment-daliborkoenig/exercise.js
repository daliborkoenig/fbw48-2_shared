// 1
let str = ' teXt valUe '
console.log(typeof str);
if (typeof str == 'string') {
  console.log(str.trim().toLowerCase());
}
else {
  console.log('undefined');
}

// 2
let text = 'I am baby pork belly gochujang duis flannel summer poutine.'
if (text.includes('summer')) {
  console.log('I love summer');
}

// 3
let hipsum1 = 'I am baby pork belly gochujang duis flannel yuccie poutine.'
let hipsum2 = 'Thundercats magna eiusmod woke, ramps celiac hoodie enamel pin VHS +1 microdosing chicharrones neutra.'
console.log(hipsum1.length == hipsum2.length);

// 4
let hipsum3 = 'I am baby pork belly gochujang duis flannel yuccie poutine.'
console.log(hipsum3.substring(1));

let newone = null

if (typeof newone == 'string') {
  console.log('string string');
}
else if (typeof newone == 'number') {
  console.log('number number');
}
else if (typeof newone == 'undefined') {
  console.log('undefined undefined');
}
else {
  console.log('null null');
}

