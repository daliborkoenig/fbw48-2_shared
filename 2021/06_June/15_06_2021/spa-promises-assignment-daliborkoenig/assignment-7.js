/*

Assignment 7 - Creating an error

In this exercise, you will be creating an Error object

1. Instantiate the "Error" constructor object using the "new" keyword. Use the message "No graphic was provided" in the Error.

> Hint: Error is a constructor, just like a class or a Promise, or Date

2. Test your code to see what happens

*/
function loadGraphic(options) {
  return new Promise((resolve, reject) => {
    if(!options) {
      reject(new Error('Unable to load graphics'));
      return;
    }
    setTimeout(() => {
      resolve(graphicOptions);
    }, 4000);
  });
}
const graphicOptions = {
  type: 'PNG'
};

const graphic = loadGraphic(graphicOptions);

graphic.then((options) => {
  console.log('Graphic was loaded', options);
}).catch((msg)=>{
  console.log(msg);
})