// 1
let mark = {
  name: 'Mark',
  mass: 72.5,
  height: 1.65
}

let john = {
  name: 'John',
  mass: 82.5,
  height: 1.85
}

// 2
markBMI = mark.mass / (mark.height**2)
johnBMI = john.mass / (john.height**2)

// 3
bool = markBMI > johnBMI

// 4
if (bool === true){
  console.log(`Is ${mark.name}'s BMI higher than ${john.name}'s? Why yes, it's ${bool}, it is`);
}
else {
  console.log(`Is ${mark.name}'s BMI higher than ${john.name}'s? Why no, it's ${bool}, it is not`);
}

// 5
if (bool === true){
  console.log(`${mark.name}'s BMI is ${markBMI}`);
}
else {
  console.log(`${john.name}'s BMI is ${johnBMI}`);
}

