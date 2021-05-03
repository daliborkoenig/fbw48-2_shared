let person = {
  name: "Adam",
  age: 40,
  myFunction: () => {
    return person.name + ": " + person.age
  },
  greet: () => {return `Hello World to the ${person.myFunction()}`}
}

// console.log(person.myFunction());
// console.log(person.greet());

// examples
// console.log(typeof Math); //Math is an object containing functions
// console.log(Math.floor(Math.random() * 10));

// this keyword
let laptop = {
  brand: `Lenovo`,
  color: `Silver`,
  screenSize: `15.4`,
  info: ()=> `${laptop.brand} ${laptop.color} ${laptop.screenSize}`,
  info2: function(){
    console.log(this);
    return `${this.brand} ${this.color} ${this.screenSize}`
  }
}

// console.log(laptop.info());
// console.log(laptop.info2());

// process object in nodejs
console.log(typeof process);
console.log(typeof process.stdout.write);

// process.stdout.write('Hello World')
// process.stdout.write(' is bored')

let laptopOne = {
  brand: `Apple`,
  model: `Macbook Air`,
  price: `1000,00 euro`,
  screenSize: 13.3,
  moreInfo(){
    console.log(this);
    return `${this.brand} ${this.model} ${this.price} ${this.screenSize}`
  }
}

console.log(laptopOne.moreInfo());
console.log(laptopOne.screenSize.toString().length);

laptopOne.images = ["img1", "img2", "img3"]

laptopOne.images.forEach(item => {
  console.log("First \"forEach\" loop ==>",item)
});

for(let i=0;i<laptopOne.images.length;i++){
  console.log("First \"for\" loop ==>",laptopOne.images[i]);
}
for(let i=laptopOne.images.length-1;i>=0;i--){
  console.log("Second \"for\" loop ==>",laptopOne.images[i]);
}


