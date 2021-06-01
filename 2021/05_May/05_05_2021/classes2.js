class Car {
  constructor(name, speed){
    this.name = name
    this.speed =  speed
  }
  move(){
    console.log(`moving the ${this.name} with speed of ${this.speed} km/h`);
  }
  stop(){
    console.log(`stop the ${this.name} with speed of ${this.speed} km/h`);
  }
  static info(){
    console.log(`this is some info about ${this.name} car`);
  }
}

let sportCar = new Car("BMW",230)

console.log(sportCar);

sportCar.move()
// sportCar.stop()
// sportCar.info()

Car.info()

console.log(sportCar);