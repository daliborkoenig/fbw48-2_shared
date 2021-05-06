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
    this.volume = (Math.PI*r*h).toFixed(4)
  }
}

let cyl = new Cylinder (10,5)
console.log(cyl);

// 3.
class Clock{
  constructor(obj){
    this.template = obj.template
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    this.time = this.template.split(":")
    for (let i=0 ; i<=this.time.length ; i++){
      if (this.time[i] == "h"){
        this.time[i] = hours
      }
      if (this.time[i] == "m"){
        this.time[i] = mins
      }
      if (this.time[i] == "s"){
        this.time[i] = secs
      }
    }
 
    console.log("time is:"+this.time[0]+":"+this.time[1]+":"+this.time[2]);
  }

  stop = function() {
    clearInterval(this.timer);
  };

  start = function() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();
clock.stop()

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
    if (num === undefined){
      console.log(`${this.brand} says: You need to let me know by how much dummy!`)
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

