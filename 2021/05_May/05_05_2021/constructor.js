let obj = new Object({name:"john", id:123})
let arr = new Array(1,2,3,4)
let str = new String("one")
let num = new Number(123)

console.log(typeof obj, typeof arr, typeof str, typeof num);
console.log(obj, arr, str, num);

function User(){
  this.name = "Max"
  this.age = 100
  this.job = "nope"
}
let user = new User
console.log(user);

function Person(name){
  this.name = name
  this.age = 40
}

let person = new Person("Mike")
console.log(person);

function NewUser(name, age, job, city){
  if (name !== undefined){
    this.name = name
  }
  if (age !== undefined){
    this.age = age
  }
  if (job !== undefined){
    this.job = job
  }
  if (city !== undefined){
    this.city = city
  }
}

let newUser = new NewUser("John", 40, "ios developer", undefined)

console.log(newUser);