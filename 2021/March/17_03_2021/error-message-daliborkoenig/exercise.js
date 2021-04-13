// version 1
console.log('========== VERSION 1 ==========');

let error;
error = (Math.random() *6).toFixed(0)

console.log(error);

function errorMessage() {
  return error == 1 ? console.log('"Unexpected token"')
       : error == 2 ? console.log('"missing ) after condition"')
       : error == 3 ? console.log('"More arguments needed"')
       : error == 4 ? console.log('"invalid arguments"')
       : error == 5 ? console.log('"malformed URI sequence"')
       : error == 6 ? console.log('"x"is not a function')
       : console.log("`unknown error`");
}
errorMessage()

// version 2
console.log('========== VERSION 2 ==========');

let error2;
error2 = (Math.random() *6).toFixed(0)
console.log(error2);

error2 == 1 ? console.log('"Unexpected token"') : error2 == 2 ? console.log('"missing ) after condition"') : error2 == 3 ? console.log('"More arguments needed"') : error2 == 4 ? console.log('"invalid arguments"') : error2 == 5 ? console.log('"malformed URI sequence"')
 : error2 == 6 ? console.log('"x"is not a function') : console.log("`unknown error`");

// didnt use .ceil to leave 0 showing so it can print out the for any other value message

// version 3
console.log('========== VERSION 3 ==========');
let error3 = 100

error3 == 1 ? console.log('"Unexpected token"') : error3 == 2 ? console.log('"missing ) after condition"') : error3 == 3 ? console.log('"More arguments needed"') : error3 == 4 ? console.log('"invalid arguments"') : error3 == 5 ? console.log('"malformed URI sequence"')
 : error3 == 6 ? console.log('"x"is not a function') : console.log("`unknown error`");