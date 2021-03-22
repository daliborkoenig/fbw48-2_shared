// let colorString = `0123456789ABCDEF`;
// function randomColor() {
//   colorString = colorString.split('');
//   let r1 = Math.floor(Math.random() * colorString.length);
//   let r2 = Math.floor(Math.random() * colorString.length);
//   let r3 = Math.floor(Math.random() * colorString.length);
//   let r4 = Math.floor(Math.random() * colorString.length);
//   let r5 = Math.floor(Math.random() * colorString.length);
//   let r6 = Math.floor(Math.random() * colorString.length);  
//   let color = `#${colorString[r1]}${colorString[r2]}${colorString[r3]}${colorString[r4]}${colorString[r5]}${colorString[r6]}`;
//   console.log(color);
// }
// randomColor(); 

// let colorString = `0123456789ABCDEF`;
// colorString = colorString.split('');

// let r1 = Math.floor(Math.random() * colorString.length);
// let r2 = Math.floor(Math.random() * colorString.length);
// let r3 = Math.floor(Math.random() * colorString.length);
// let r4 = Math.floor(Math.random() * colorString.length);
// let r5 = Math.floor(Math.random() * colorString.length);
// let r6 = Math.floor(Math.random() * colorString.length);  
// let randomColor = `#${colorString[r1]}${colorString[r2]}${colorString[r3]}${colorString[r4]}${colorString[r5]}${colorString[r6]}`;

// console.log(randomColor);

// function myFunction() {
//   document.body.style.background = randomColor;
// }


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function randomize() {
  document.body.style.background = getRandomColor();
};


