const form = document.querySelector("form")
const div = document.querySelector("div")
const h4 = document.querySelector("h4")


form.addEventListener("click", ()=>{
  console.log("form clicked")
})

div.addEventListener("click", ()=>{
  console.log("div clicked")
})

h4.addEventListener("click", (e)=>{
  e.stopPropagation()
  console.log("h4 clicked")
})

// document.addEventListener("click", (e)=>{
//   console.log(e.target.innerText);
// })

const newH4 = document.createElement("h4")
newH4.innerText = "this is new H4"
div.appendChild(newH4)

// with event bubbling
div.addEventListener("click", (e)=>{
  if(e.target.nodeName == "H4"){
    // e.target.remove();
    e.stopPropagation()
    console.log("H4 clicked");
  }
})

const myH4 = document.createElement("h4")
myH4.innerText = "this is another new H4"
div.appendChild(myH4)

const btn = document.querySelector("button")
btn.addEventListener("click", (e)=>{
  e.stopPropagation()
  console.log("button clicked");
  // e.preventDefault()
  // e.stopPropagation()
})