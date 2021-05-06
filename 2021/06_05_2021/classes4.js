// inheritance in js classes#
// parent class
// child class
// parent ==> child

// class Person{ // parent class
// }

// class Student extends Person { // child class

// }

// EXAMPLE

class Animal {
  name = "lulu"
  sayHi(){
    console.log(`Hi ${this.name}`);
  }
}

class Cat extends Animal {
  voice = ""
}

let cat = new Cat
// console.log(cat);
// cat.sayHi()

class Person{
  constructor(name, email, address){
    this.name = name
    this.email = email
    this.address = address
  }
  greet(){
    console.log(`Hi, ${this.name}`);
  }
  static age(){
    console.log("the age is");
  }
}

class Student extends Person{
  constructor(name, email, address, semester, university, studentID){
    super(name, email, address) // command to inherit from parent
    this.semester = semester
    this.university = university
    this.studentID = studentID
    delete this.address // in case you dont want to inherit some properties from parent
  }
}

let student = new Student("John", "john@some.com", "someAddress 54", 4, "Berlin", "q7123")
console.log(student);
student.greet()
Student.age() //static is inherited, but only to the child class, not instances

