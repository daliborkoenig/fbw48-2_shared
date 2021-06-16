// example 1

// const users = [
//   { name: "Lara" , email : "lara@gmail.com"},
//   { name: "Mike" , email : "mike@gmail.com"}
// ]

// function createUser(user){
//   return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//       users.push(user)
//       const myError = false
//       if(!myError){
//         resolve(" All is done!!!")
//       }
//       else{
//         reject(" there is a server error")
//       }
//     }, 2000);
//   })
// }

// createUser({ name: "John" , email : "john@gmail.com"})
// .then((msg)=>{
//   console.log(msg);
//   getUsers()
// })
// .catch((msg)=>{
//   console.log(msg);
// })

// // console.log(users);

// function getUsers(){
//   setTimeout(() => {
//     let output = ""
//     users.forEach(element => {
//       output += `<li>${element.name} --> ${element.email}</li>`
//     });
//     document.body.innerHTML = `<ul>${output}</ul>`
//   }, 1000);
// }

// example 2

const blackFriday = true
const amazonPromise = new Promise((resolve, reject) => {
  if(blackFriday){
    reject("We apologize, but we are not able to shit the the product in time.")
  }
  else{
    resolve("Your product has been shipped.")
  }
})

amazonPromise
.then((msg)=>{
  console.log(msg);
})
.catch((msg)=>{
  console.log(msg);
})

// Promise.all

const max = new Promise((resolve, reject)=>{
  resolve("max@gmail.com")
})

const lara = new Promise((resolve, reject)=>{
  resolve("lara@gmail.com")
})

const john = new Promise((resolve, reject)=>{
  resolve("john@gmail.com")
})

Promise.all([max, lara, john]).then(data=>{
  console.log(data);
})