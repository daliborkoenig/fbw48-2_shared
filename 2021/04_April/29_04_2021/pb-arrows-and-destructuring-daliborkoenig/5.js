/*

Assignment 5

1. Convert the anonymous function present inside the following callback to
use an arrow function

*/

const foobar = [ 'foo', 'bar' ];

const result = foobar.filter(function(item) {
    return typeof item === 'string';
});
