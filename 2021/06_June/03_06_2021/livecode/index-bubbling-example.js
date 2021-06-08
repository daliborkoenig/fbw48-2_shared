const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")
const todos = document.querySelector("#todos")
// form.addEventListener("submit", (e)=>{
//   e.preventDefault()
//   todos.innerHTML += `<li>${input.value}</li>`
//   input.value = ""
// })

// delete todo with bubbling
ul.addEventListener("click", (e)=>{
  if(e.target.nodeName == "I"){
    e.target.parentElement.remove()
  }
})

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const li = document.createElement("li")
  const remove = document.createElement("i")
  remove.className = "fas fa-times"
  remove.style.paddingLeft = "5px"
  li.innerText = input.value
  ul.appendChild(li)
  li.appendChild(remove)
  input.value = ""

  // delete todo
  // remove.addEventListener("click", (e)=>{
  //   e.target.parentElement.remove()
  // })


})