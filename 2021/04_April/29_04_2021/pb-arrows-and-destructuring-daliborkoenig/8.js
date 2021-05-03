/*

Assignment 8

ES6 provides us with a few more shortcuts when writing code. Destructuring is
one of these shortcuts.

We can use destructuring in different ways. One of these ways is to place
values from an array into new variables - directly.

1. Change the code by destructuring the array "trackInfo" into the variables
    "artist" and "title"

(English)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

(Deutsch)
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung

*/

const trackInfo = [ 'Penguin Cafe Orchestra', 'Telephone and Rubber Band' ];

const artist = trackInfo[0];
const title = trackInfo[1];

console.log(artist, title);
