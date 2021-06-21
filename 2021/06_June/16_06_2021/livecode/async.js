// // async
// async function greet(){
//   return "hello World"
// }

// // async function greet(){
// //   return new Promise((resolve, reject)=>{
// //     resolve("Hello World")
// //     reject("Hello World")
// //   })
// // }

// console.log(greet());

// greet().then(msg=>{
//   console.log(msg);
// }).catch(msg=>{
//   console.log(msg);
// })

// //await
// async function greeting(){
//   let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve("Hello my friend"), 1000)
//   })
//   let result = await promise
//   console.log(result);
// }

// greeting()

// const users = [
//   { name: "Lara", email: "lara@gmail.com" },
//   { name: "Mike", email: "mike@gmail.com" },
// ];

// function createUser(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       users.push(user);
//       const myError = false;
//       if (myError === false) {
//         resolve(" ALl is done!!!");
//       } else {
//         reject(" there is server error");
//       }
//     }, 2000); // delay 2 sec
//   });
// }

// function getUsers() {
//   setTimeout(() => {
//     let output = "";
//     users.forEach((item) => {
//       output += `<li> ${item.name} --> ${item.email} </li>  `;
//     });
//     document.body.innerHTML = `<ul> ${output} </ul>`;
//   }, 1000);
// }

// createUser({ name: "Max", email: "max@gmail.com" })
//   .then((msg) => {
//     console.log(msg);
//     getUsers();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function start(){
//   await createUser({ name: "Max", email: "max@gmail.com" })
//   getUsers()
// }
// start()

async function hello(){
  return Promise.reject((resolve, reject)=>{
    reject("server error")
  })
}

async function getData(){
  try{
    await hello()
  }
  catch (err){
    console.log(err);
  }
}

getData()