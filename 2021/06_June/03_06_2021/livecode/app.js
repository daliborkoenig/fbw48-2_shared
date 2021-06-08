const div = document.querySelector("div")
div.addEventListener("click", ()=>{
  alert("click event")
})

const link = document.querySelector("a")
link.addEventListener("click", (event)=>{
  event.preventDefault()
})

link.addEventListener("click", (event)=>{
  event.target.remove()
})
