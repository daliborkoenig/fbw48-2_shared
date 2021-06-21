// \/ All of your javascript should go here \/
const formElement = document.querySelector("form")
let data = {}

formElement.addEventListener("submit", async (e)=>{
  e.preventDefault()
  localStorage.setItem('name', document.querySelector("#name").value);
  localStorage.setItem('email', document.querySelector("#email").value);
  localStorage.setItem('password', document.querySelector("#password").value);
  localStorage.setItem('message', document.querySelector("#message").value);
  localStorage.setItem('checkbox', document.querySelector("#checkbox").checked);
  let name = localStorage.getItem('name')
  let email = localStorage.getItem('email')
  let password = localStorage.getItem('password')
  let message = localStorage.getItem('message')
  let checkbox = localStorage.getItem('checkbox')
  data = {
    name: name,
    email: email,
    password: password,
    message: message,
    checkbox: checkbox
  }
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
  await postData(data)
  alert("Thank you for submitiong your details")
})


