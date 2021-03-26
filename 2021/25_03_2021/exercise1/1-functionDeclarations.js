// functions are main building blocks of the program. they allow the code to be called many times without repetitions
// to create a function we can use a function declaration to
// syntax: function
// functionName(){
// body of the function
// }

function firstFunction(){
  console.log(`welcome to functions!`);
}
firstFunction()

let num = 4;
if(num % 2 == 0){
  console.log(`${num} is even`);
  }
else{
  console.log(`${num} is odd`);
  }


function oddOrEven(num){
  if(num % 2 == 0){
    console.log(`${num} is even`);
  }
  else{
    console.log(`${num} is odd`);
  }
}

oddOrEven(5)