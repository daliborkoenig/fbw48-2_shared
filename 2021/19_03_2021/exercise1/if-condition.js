// if condition
// input as weather : Sun, Rain, Snow
// if weather is sun then take your sunglasses
// if weather is rain then take your umbrella
// if weather is snow then wear a snow jacket

let weather = 'Sun';
// if(weather === 'Sun'){
//   console.log('Take your sunglasses');
// }
// else if(weather === 'Rain'){
//   console.log('Take your umbrella');
// }
// else if(weather === 'Snow'){
//   console.log('Wear a snow jacket');
// }
// else{
//   console.log('No idea');
// }

weather === 'Sun' ? console.log('Take your sunglasses') 
: weather === 'Rain' ? console.log('Take your umbrella') 
: weather === 'Snow' ? console.log('Wear a snow jacket') 
: console.log('No idea');

let personAge = 20

if (personAge > 17){
  console.log('You can drive');
}
else{
  console.log('You are too young to drive');
}

personAge > 17 ? console.log('You can drive') : console.log('You are too young to drive')

let AlowedToDrive = true
allowedToDrive = personAge > 17 ? true : false
console.log(allowedToDrive);
 