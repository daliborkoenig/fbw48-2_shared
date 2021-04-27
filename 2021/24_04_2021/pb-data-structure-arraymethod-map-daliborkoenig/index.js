// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
// function camelize(str) {
//  //write your code here
//   let words = str.split("-")
//   if(words[0].length == 0){
//     words.shift()
//   }
//   for (let i = 1; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase()+words[i].substr(1)
//   }
//   return words.join("")
// }

// function camelize(str) {
//   //write your code here
//   let words = str.split("-")
//   let rest = words.shift()
//   // console.log(words);
//     capiWords = words.map(function(item){
//     return item.charAt(0).toUpperCase() + item.slice(1);
//   })
//  return str.split("-")[0]+capiWords.join("")
// }

function camelize(str) {
  //write your code here
  str = str.toLowerCase()
  string = str
  for (i=0; i<str.length;i++){
    if (string[i]=="-"){
      string[i+1] = string[i+1].toUpperCase()
    } 
  }
  return str
}



console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];


let usersMapped = users.map(function(item){
  let obj = {}
  obj.fullName = item.name+" "+item.surname
  obj.id = item.id
  return obj
})

// console.log(usersMapped);
//write your code here

/*   usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ] */

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith
