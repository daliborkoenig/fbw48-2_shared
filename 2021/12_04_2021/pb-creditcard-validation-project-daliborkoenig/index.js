
// 1 and bonus 1
function validateCreditCard(creditCardNum) {
  let ccnum = creditCardNum.split('-').join('').split('').map(x=>+x);
  let sumCheck = 0;
  let lengthCheck = ccnum.length
  let lastNum = ccnum[ccnum.length-1]
  const allEqual = arr => arr.every(val => val === arr[0]);
  for (let i = 0; i < ccnum.length; i++) {
    sumCheck += parseInt(ccnum[i])
  }
  if(lengthCheck<16 || lengthCheck>16 || isNaN(sumCheck) || lengthCheck<16 || lastNum%2!=0 || allEqual(ccnum) || sumCheck <= 16){
    return `false`
  }
  else{
    return 'true'
  }
}

/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }
console.log(validateCreditCard('7777-7777-7777-7777-7777')); //{ valid: true, number: '1211-1111-1111-1112' }


// Bonus 2
function validateCreditCard2(creditCardNum) {
  let ccnum = creditCardNum.split('-').join('').split('').map(x=>+x);
  let sumCheck = 0;
  let lengthCheck = ccnum.length
  let lastNum = ccnum[ccnum.length-1]
  const allEqual = arr => arr.every(val => val === arr[0]);
  const message = {valid: true, number: '', error: []}
  for (let i = 0; i < ccnum.length; i++) {
    sumCheck += parseInt(ccnum[i])
  }
  if(lengthCheck<16 || lengthCheck >16){
    message.valid = false
    message.number = creditCardNum
    message.error.push('wrong length')
  }    
  if(sumCheck<=16){
    message.valid = false
    message.number = creditCardNum
    message.error.push('sum of all numbers is smaller than 16')
  } 
  if (isNaN(sumCheck)){
    message.valid = false
    message.number = creditCardNum
    message.error.push('invalid characters')
  } 
  if (lastNum%2!=0){
    message.valid = false
    message.number = creditCardNum
    message.error.push('odd final number')
  } 
  if (allEqual(ccnum)){
    message.valid = false
    message.number = creditCardNum
    message.error.push('only one type of number')
  }
  if (message.valid == true){
    message.valid = true
    message.number = creditCardNum
    message.error.push('noice, card is valid as f***')
  }
  return message
}

/**** tests 2 *****/
console.log(validateCreditCard2('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard2('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard2('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard2('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard2('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }
console.log(validateCreditCard2('7777-7777-7777-7777-7777')); //{ valid: true, number: '1211-1111-1111-1112' }
console.log(validateCreditCard2('0000-0000-0000-0002-2')); //{ valid: true, number: '1211-1111-1111-1112' }

