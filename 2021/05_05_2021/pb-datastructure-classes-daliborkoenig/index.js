// 1.
class Person {
  constructor (name, age){
    this.name = name
    this.age = age
  }
  describe(){
    return `${this.name}, ${this.age} years old`
  }
}
let person = new Person("John", 19)
console.log(person.describe());

// 2.
class Cylinder{
  constructor(r,h){
    this.radius = r
    this.height = h
    this.vol = (Math.PI*r*h).toFixed(4)
  }
  volume(){
    return this.vol
  }
}

let cyl = new Cylinder (10,5)
console.log(`The volume of the cylinder is ${cyl.volume()} something something`);

// 3.
// class Clock{
//   constructor(obj){
//     this.template = obj.template.split(":")
//     this.time
//   }
//   render() {
//     let time = []
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     time = this.template
//     for (let i=0 ; i<=time.length ; i++){
//       if (time[i] == "h"){
//         time[i] = hours
//       }
//       if (time[i] == "m"){
//         time[i] = mins
//       }
//       if (time[i] == "s"){
//         time[i] = secs
//       }
//     }
 
//     console.log("time is:"+time[0]+":"+time[1]+":"+time[2]);
//     // console.log("time is:"+hours+":"+mins+":"+secs);
//   }

//   stop() {
//     clearInterval(this.timer);
//   };

//   start() {
//     this.render();
//     function output(){
//       this.render()
//     }
//     this.timer = setInterval(output, 1000);
//   };

// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();
// clock.stop()
// clock.start();

class Clock{
  constructor(obj){
    this.template = obj.template
    this.timer
  }
  render() {
    let time = []
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
     console.log(this.template);
  //    time = this.template
  //    for (let i=0 ; i<=time.length ; i++){
  //      if (time[i] == "h"){
  //        time[i] = hours
  //      }
  //      if (time[i] == "m"){
  //        time[i] = mins
  //      }
  //      if (time[i] == "s"){
  //        time[i] = secs
  //      }
  //    }
  //    console.log("time is:"+time[0]+":"+time[1]+":"+time[2]);
  let output = this.template
    .replace("h", hours)
    .replace("m", mins)
    .replace("s", secs)
    .replace("h", hours)
    .replace("m", mins)
    .replace("s", secs)
    .replace("h", hours)
    .replace("m", mins)
    .replace("s", secs);
  console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  };
  start() {
    this.render();
    const again = () =>{
        this.render()
    }
    this.timer = setInterval(again, 1000);
  };
}
let clock = new Clock({template: 'h:m:s'});
clock.start();
clock.stop()
// clock.start();


// 4.
class TV{
  constructor(brand, channel=1, volume=50){
    this.brand = brand
    this.channel = channel
    this.volume = volume
  }
  increaseVolume(num){
    if (num === undefined){
      console.log(`${this.brand} says: You need to let me know by how much dummy!`)
    }
    if (this.volume + num > 100){
      this.volume = 100
      console.log(`${this.brand} says: You can't increase volume past 100, so I did it for you. The volume is ${this.volume}.`);
      }
    if(this.volume + num <= 100){
      this.volume += num
      console.log(`${this.brand} says: The volume is increased by ${num} and it is ${this.volume} now.`)
    }
  }
  decreaseVolume(num){
    if (num === undefined ){
      console.log(`${this.brand} says: You need to let me know by how much dummy!`)
    }
    if (typeof num == "string"){
      console.log(`${this.brand} says: Not sure if you know whyt a number is, but this is not it, dummy!`)
    }
    if (this.volume - num < 0){
      this.volume = 0
      console.log(`${this.brand} says: You can't decrease volume past 0, so I did it for you. The volume is ${this.volume}.`);
      }
    if(this.volume - num >= 0){
      this.volume -= num
      console.log(`${this.brand} says: The volume is decreased by ${num} and it is ${this.volume} now.`)
    }
  }
  setChannel(num){
    if (num === undefined){
      this.channel = Math.floor(Math.random()*50)
      console.log(`${this.brand} says: Can't decide, huh? No problem, I will choose for you. The new channel is ${this.channel}`);
    }
    else {
      this.channel = num
      console.log(`${this.brand} says: The new channel is ${this.channel}.`);
    }
  }
}

let tv = new TV("Toshiba")
tv.increaseVolume(10)

tv.decreaseVolume(100)

tv.setChannel(10)

