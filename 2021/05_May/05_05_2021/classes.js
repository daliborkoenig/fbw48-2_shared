let persons = []

class Person {
  constructor(name, city, job){
    this.name = name
    this.city = city
    this.job = job
    persons.push(this)
  }
  info(){
    return `${this.name} lives in ${this.city} and works as ${this.job}`
  }
  changeAddress(city){
    this.city = city
  }
  greeting(){
    console.log(`Hello and welcome ${this.name}`);
  }
}

const person = new Person("John", "Berlin", "iOs developer")
const person2 = new Person("Mark", "Hamburg", "javascript developer")

console.log(person, person2);
person.changeAddress("London")
console.log(person.info(), person2.info());
person.greeting()
console.log(persons);

// function makeC

