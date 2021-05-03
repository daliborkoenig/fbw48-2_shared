// We can pass arbitrary data to functions using parameters (also called function arguments) .
// Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.

// Functions are reusable components (parameters and arguments)

function greeting(name){
  return `Hello ${name}`
}


// arguments
console.log(greeting('Tommy'));
console.log(greeting('Pilar'));
console.log(greeting('Dalibor'));
console.log(greeting('Mo'));
console.log(greeting('Daniel'));

function evenOrOdd(a){
  if(a%2==0){
    return `${a} is even`
  }
  else{
    return `${a} is odd`
  }
}
console.log(evenOrOdd(4));

// ternary with return
function evenOrOdd2(a){
  return (a%2==0 ? `${a} is even` : `${a} is odd`)
}

console.log(evenOrOdd2(5));

const info = (firstName, lastName, email) => `
firstName: ${firstName}, 
lastName: ${lastName},
email: ${email}
`

console.log(info('Dalibor', 'Koenig', 'dalibor@email.com'));

/** Task **
 * 
 * INPUT                      OUTPUT
 arrayToNumber([2,4,5])       ==> 11
 arrayToNumber([1,2,1,1,1])   ==> 6
 arrayToNumber([2,0])         ==> 2
 arrayToNumber([2,'ABC',2,1]) ==> 5
 */

function arrayToNumber(anyArray) {    
  let sum = 0;
  for (let i = 0; i < anyArray.length; i++) {
    if (typeof anyArray[i] == 'number'){
    sum += anyArray[i];
    }
  }    
  return sum;
}

console.log(arrayToNumber([2,4,5]))
console.log(arrayToNumber([1,2,1,1,1]))  
console.log(arrayToNumber([2,0]))
console.log(arrayToNumber([2,'ABC',2,1]))
