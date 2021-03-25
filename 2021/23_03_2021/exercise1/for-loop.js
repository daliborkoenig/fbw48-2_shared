// for (let i = 0; i <= 10; i++) {
//   console.log(`hello, is it ${i} you're looking for?`);
// }

// for (let i = 0; i <= 10; ++i) {
//   console.log(`hello, is it ${i} you're looking for?`);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(`hello, is it ${i} you're looking for?`);
// }

// for (let i = 10; i >= 0; --i) {
//   console.log(`hello, is it ${i} you're looking for?`);
// }

// ========================= COUNTDOWN ========================

// for (let i = 10; i >= 0; --i) {
//   setTimeout(() => {
//     console.log(`World ending in ==> ${i} <== are you prepared?`);
//   },
//   1000 * (10-i));
// }

// function worldEnded(){
//   console.log(`It is done, the World has been DESTROYED!!`);
// }

// for (let i = 10; i >= 0; --i) {
//   setTimeout(() => {
//     console.log(`World ending in ==> ${i} <== are you prepared?`);
//     if(i === 0){
//       setTimeout(worldEnded, 1000);
//     }
//   },
//   1000 * (10-i));
// }

// ========================= COUNTDOWN ========================

// for (i = 10; i >= 0; --i){
//   if (i%2===0){
//   console.log(i);}
// }

// exclude 5 
// for (let i = 0; i < 10; i++) {
//   if(i === 5) {
//     continue;
//     console.log(`i == ${i}`);
//   }
//   console.log(i);
// }

// stop the loop is it encounters 5
// for (let i = 0; i < 10; i++) {
//   if(i === 5) {
//     console.log(`i == ${i}`);
//     break;
//   }
//   console.log(i);
// }

// nested for loop is it encounters
// for(let i = 0; i < 10; i++) {
//   console.log(`iiiiiiiiiiiiii = ${i}`);
//   for(let j = 0; j < 10; j++) {
//     console.log(`j = ${j}`);
//   }
// }

// let result = ''
// for(let i = 0; i < 2; i++) {  //i equals number of rows
//   for(let j = 0; j < 7; j++) { //j equals number of characters in a row
//     result += ' + '
//   }
//   result += '\n'
// }
// console.log(result);

// let str = 'abc';
// let str2 = '123'
// str += str2
// console.log(str);

// let result = ''
// for(let i = 0; i < 20; i++) {  //i equals number of rows
//   for(let j = 0; j < 7; j+=1) { //j equals number of characters in a row
//     result += ' '+j+' '
//   }
//   result += '\n' // adds a new line
// }
// console.log(result);

// for(let i = 0; i < 3; i++) {
//   for(let j = 0; j < 5; j++) {
//     document.write(' * ')
//   }
//   document.write('<br>')
// }

let result = '';
for (let i = 0; i < 10; i++) {
  for(let j = 10; j >= i; j--) {
    result += ' * '
  }
  result += '\n'  
}
console.log(result);