/*

Assignment 15

We can also use the rest pattern (...) in a different context.

We can use the rest pattern as a parameter for a function
argument. This will split the array into a multiple parts.

A good example where we might use this is using the Math.max and
Math.min methods, where the inputs we expect are single values.

For example, the following line of code will return the highest
number (200)

Math.max(200, 12, 34); // 200

We might have an array of numbers, but using an array will not
work

Math.max([200, 12, 34]); // NaN

So we must first destructure the array

Math.max(...[200, 12, 34]); // 200

We can also represent it like this

const array = [200, 12, 34];

Math.max(...array); // 200

1. Combine the use of destructuring concept explained above
    and use of Math.max to find the highest number in the array
    "values"

2. console.log() your result

*/

const values = [ 8293178489, 8293178490, 8223178490, 8223178490, 8323178490, 8373178490, 8373178491, 8373178496 ];

console.log();
