// 1.
const student = { 
  firstName: "John", 
  lastName: "Smith", 
  class: 12 
}

function printInfo(obj){
  return `${student.firstName} ${student.lastName} is a student in class ${student.class}`
}

console.log(printInfo(student));

// 2.
const person = { 
  firstName: "John", 
  lastName: "Smith", 
  age: 40,
  job: "developer",
  city: "Frankfurt" 
}

function printInfo2(obj){
  return `${person.firstName} ${person.lastName} is a ${person.age} years old ${person.job} living in ${person.city}`
}

console.log(printInfo2(person));

function lenght(obj){
  return Object.keys(obj).length
}

console.log(lenght(person));
