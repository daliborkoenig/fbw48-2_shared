/*

Assignment 19

Another place where you might destructure an object, is in
the arguments for a function.

Take a look at this code:

const object = {
     type: 'music'
};

report(object);

function report({ type }) {
     console.log(type);
}

In the above example, the function "report" creates a local
variable called "type".

1. Change the function "calcMinutes" below to destructure the
     argument "trackInfo", creating the local variable "length"

2. console.log() the result of the function

*/

const trackInfo = {
     length: 687,
     name: 'The Magic Roundabout'
};

function calcMinutes(trackInfo) {
     return trackInfo.length / 60;
}

console.log();
