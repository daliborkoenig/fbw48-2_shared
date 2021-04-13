/////////////////////
// local variables //
/////////////////////
// variables declared inside a block of code, they are available only inside that function

// function showMsg(){
//   let msg = 'Hello World'; //only available inside function
//   console.log(msg);
// }

// showMsg()
// // console.log(msg); gives error as it is not defined outside of the function

/////////////////////
// outer variables //
/////////////////////

// let msg = 'Hello World!';
// function showMsg(){
//   console.log(msg);
//   msg = 'Greeting World!';
// }

// showMsg()
// console.log(msg);

let msg = 'Hello World!';
function showMsg(){
  let msg = 'Hello there, how you doin?'
  console.log(msg);
}

showMsg()
console.log(msg);
