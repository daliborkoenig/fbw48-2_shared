//////////////////
// Fetch GET
// fetch('https://api.github.com/users/daliborkoenig', {
//   method:"GET",
//   headers: {"Content-type" : "application/json"}
// })
// .then(res => {
//   console.log(res);
//   return res.json()
// })
// .then(data => {
//     console.log(data);
// })

///////////////////
// Fetch POST
const data = {
  userId: 123,
  body: "This is a new post from fetch",
  title: "new post"
}
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method:"POST",
//   headers: {"Content-type" : "application/json"},
//   body: JSON.stringify(data)
// })
// .then(res => {
//   console.log(res.status);
//   return res.json()
// })
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err)
// })

// async await

async function postData(item){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method:"POST",
    headers: {"Content-type" : "application/json"},
    body: JSON.stringify(item)
    })
    const result = await res.json()
    console.log(result);}
  catch(err){
    console.log(err);
  }
}
postData(data)