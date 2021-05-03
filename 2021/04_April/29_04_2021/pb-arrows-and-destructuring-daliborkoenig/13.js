/*

Assignment 13

We can also destructure whole arrays using the rest pattern
(...).

Using the rest pattern (...) we can split the array into smaller
parts.

In the following exercise, we will use the rest operator to
destructure part of the array into a variable. Consider using
this as an alternative to using the splice() method.

1. Ignore the first item in the following array (index 0) and
    use the rest pattern (...) to destructure the remaining
    items (indexes 1 - 3) into a variable called "track"

2. console.log() the variable "track"

*/

const trackInfo = [ 131293184891347, 'Max Richter', '24 postcards in full colour', 'From 553 Elm Street' ];

const [ id ] = trackInfo;

console.log();
