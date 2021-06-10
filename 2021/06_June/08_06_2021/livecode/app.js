import { greeting , Person } from "./main.js";
import car from "./main.js";
// we can change the name of functions and variables to be used. by using {original name as newname}
import {randomNumber as random} from "./main.js"
// import { Person } from "./main.js"
greeting("Dalibor")

let dalibor = new Person("Dalibor", 40, "Frankfurt", "React developer")

dalibor.personInfo()

console.log(car);
console.log(random());


//import whole file
// import * as main from "./main.js"
// main.greeting("Dalibor")

