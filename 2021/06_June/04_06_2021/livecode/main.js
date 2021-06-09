export function greeting(name){
  console.log("hello "+name)
}

export function randomNumber(){
  return Math.random()
}

export class Person {
  constructor(name, age, address, job){
    this.name = name
    this.age = age
    this.address = address
    this.job = job
  }
  personInfo(){
    console.log(`${this.name} is ${this.age} years old and works as ${this.job} and lives at ${this.address}`)
  }
}

// export default (only one time) - used for main module
let car = {
  brand: "BMW",
  model: "X1",
  color: "red"
}
export default car