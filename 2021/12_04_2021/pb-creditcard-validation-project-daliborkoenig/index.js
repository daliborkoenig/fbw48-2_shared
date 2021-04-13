
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
  if(lengthCheck<16 || isNaN(sumCheck) || lengthCheck<16 || lastNum%2!=0 || allEqual(ccnum) || sumCheck < 16){
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

// Bonus 2
function validateCreditCard2(creditCardNum) {
  let ccnum = creditCardNum.split('-').join('').split('').map(x=>+x);
  let sumCheck = 0;
  let lengthCheck = ccnum.length
  let lastNum = ccnum[ccnum.length-1]
  const allEqual = arr => arr.every(val => val === arr[0]);
  const message = {valid:'', number: ''}
  for (let i = 0; i < ccnum.length; i++) {
    sumCheck += parseInt(ccnum[i])
  }
  if(lengthCheck<16){
    message.valid = false
    message.number = creditCardNum
    message.error = 'wrong length'
  }    
  else if (isNaN(sumCheck)){
    message.valid = false
    message.number = creditCardNum
    message.error = 'invalid characters'
  } 
  else if (lastNum%2!=0){
    message.valid = false
    message.number = creditCardNum
    message.error = 'odd final number'
  } 
  else if (allEqual(ccnum)){
    message.valid = false
    message.number = creditCardNum
    message.error = 'only one type of number'
  }
  else{
    message.valid = true
    message.number = creditCardNum
    message.error = 'noice, card is valid as f***'
  }
  return message
}

/**** tests 2 *****/
console.log(validateCreditCard2('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard2('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard2('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard2('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard2('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }