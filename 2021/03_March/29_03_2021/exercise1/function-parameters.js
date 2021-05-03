// parameters

function greet(firstName, lastName){
  return `${firstName} ${lastName}, welcome to the jungle!`
}

console.log(greet('Dalibor', 'Koenig'));

function greetUser(userName = 'Dalibor'){
  return `${userName}, welcome to the jungle!`
}

console.log(greetUser('Koenig'));

function getRandom(){
  return Math.random()*10;
}
console.log(getRandom());

function getInfo(name, address){
  return [name, address]
}

console.log(getInfo('What', 'Not'));

const [name, address] = getInfo('What', 'Not');

console.log(name);
console.log(address);

// #################################

function getColors(){
  return ['red', 'blue'];
}

const [color1, color2] = getColors()

console.log('Color1 : ', color1);
console.log('Color1 : ', color2);

// function userInfo(name, email, password) {
// let 

//   if (password === undefined){
//     return{
//       userName: name, 
//       userEmail: email, 
//       password: 'No information available'
//     }
//   }
//   return {
//     userName: name, 
//     userEmail: email, 
//     password: password
//   }
// }

// console.log(userInfo('Max','max@fmail.com'));

function userInfo(name,email,job){
  let userObject = {
          userName :name,
          userEmail:email,
          userJob : job
  }
if(job === undefined){
    userObject.userJob = 'no information about job'
}     
  return userObject 
}
console.log(userInfo('Max' , 'max@gmail.com' ));

const {userName, userEmail} = userInfo('Max' , 'max@gmail.com' )

console.log(userName);

// default parameters

// function printName(name){
//   if(name == undefined){
//     name = 'user';
//   }
//   console.log(`welcome ${name}`);
// }

// printName()
// printName('Dalibor')

function printName(name, city){
  if(city == undefined){
    city = 'Hamburg';
  }
  console.log(`welcome back to ${city}, ${name}`);
}

printName()
printName('Dalibor')
printName('Dalibor', 'Berlin')

//################################################################
// function to return the numbers <=50 from given array (meaning it is taking parameters as an array)

const numbers = [22,34,77,9,51,49,50,17,99,200,322]
function extractNum(arr){
  let newArr = [];
  for(let i=0 ; i<=arr.length ; i++){
    if (arr[i] <= 50){
      newArr.push(arr[i])  //adding numbers <=50 to newArr
    }
  }

  return newArr
}

console.log(extractNum(numbers));

const filteredNumbers = extractNum
// console.log(filteredNumbers);
console.log(filteredNumbers(numbers));


