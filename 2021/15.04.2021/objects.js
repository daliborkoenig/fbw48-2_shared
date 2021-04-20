// let a = 50
// let b = a
// a = 40

// console.log('a = ',a);
// console.log('b = ',b);

// let a = {value: 50}
// let b = a
// a.value = 40
// a = 40
// a = [30,40]
// a = {id: 30}

// console.log('a = ',a);
// console.log('b = ',b);

// let a = ['a','b']
// let b = a
// a.push('c')

// console.log('a = ',a);
// console.log('b = ',b);

// let fruit = 'kiwi';
// let fruit2 = 'Apple'
// let fruitBasket = { 
//   [fruit]: '5'        //computed property
// }

// let food = {
//   [fruit+'Banana'+fruit2] : 6
// }


// console.log(fruitBasket);
// console.log(food);

// let colors = {
//   0 : 'green',
//   1 : 'red',
//   3 : 'yellow'
// }

// console.log(colors[0]);
 let personA = {
   name : {
     firstName : 'John',
     lastName : 'Doe'
   },
   age : 35,
   address : {
     city : 'Berlin',
     street : 'volkanStr',
     country : 'Germany'
   },
   companiesWorkedWith : {
     name : 'Google',
     duration : '3 years',
     job : 'frontend developer'
   },
   experience : [
     {
       company : 'google',
       duration : '3 years',
       job : 'frontend developer'
     },
     {
       company : 'facebook',
       duration : '2 years',
       job : 'frontend developer'
     },
     {
       company : 'amazon',
       duration : '2.5 years',
       job : 'backend developer'
     }
   ]
 }

 console.log(personA.name.firstName);
 console.log(personA.experience[2].job);

 let arr = personA.experience
 for(i=0;i<arr.length;i++){
   console.log(arr[i].company, arr[i].duration, arr[i].job);
 }

 let personB = {
   age : 35
 }

 console.log(personA.age === personB.age);
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// write a function to generate an object

function createUser(firstName, lastName){
  return{
    firstName, lastName
  }
}

console.log(createUser('Jax','Doe'));

let name = 'Dalibor'
let age = 40
let personC = {name, age}
personC.info = function () {return personC.name + ': ' + personC.age;}

// add new property to the object: info
console.log(personC);
console.log(personC.info());

console.log(personC.address === undefined);

// Object.keys ==> array from keys
console.log(Object.keys(personA));

console.log(Object.keys(personA).length);

//access the nested object keys of address
console.log(Object.keys(personA.address));

// object.values ==> values of my object
console.log(Object.values(personA.address));

console.log(Object.keys(personA.experience[0]));
console.log(Object.values(personA.experience[0]));
console.log('#####################');

console.log(["age"] in personA); // is there a key called age inside object called personA

console.log(Object.entries(personA));


//###############################################

function spaceWeights(planetA, weight, planetB) {
	const gravForce = {
  Mercury: 3.7,
  Venus: 8.87,
  Earth: 9.81,
  Mars: 3.711,
  Jupiter: 24.79,
  Saturn: 10.44,
  Uranus: 8.69,
  Neptune: 11.15
	}
  weight = weight / gravForce[planetA] * gravForce[planetB]
	return parseFloat(weight.toFixed(2))
}

console.log(spaceWeights('Earth',1,'Mars'));

const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	if (name in GUEST_LIST){
		return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
	}
  else {
    return "Hi! I'm a guest."
  }
}

console.log(greeting("dandy"));

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  arr.shift();
  return item;
  // Only change code above this line
  

}
var testArr = [1,2,3,4,5];

// Setup
console.log(nextInLine([], 5));
console.log(nextInLine([], 1));
console.log(nextInLine([2], 1));
console.log(nextInLine([5,6,7,8,9], 1));
console.log(nextInLine(testArr, 10));