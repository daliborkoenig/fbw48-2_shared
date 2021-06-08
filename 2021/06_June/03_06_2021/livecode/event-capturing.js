const h4 =  document.querySelector("h4")
const div =  document.querySelector("div")
const form =  document.querySelector("form")

// bubbling moves from element outwards to last parent
h4.addEventListener("click", (e)=>{
  console.log("bubbling h4 clicked");
})

div.addEventListener("click", (e)=>{
  console.log("bubbling div clicked");
})

form.addEventListener("click", (e)=>{
  console.log("bubbling form clicked");
})

// capturing moves from farthest parent inwards
h4.addEventListener("click", (e)=>{
  console.log("capturing h4 clicked");
}, true)

div.addEventListener("click", (e)=>{
  console.log("capturing div clicked");
}, true)

form.addEventListener("click", (e)=>{
  console.log("capturing form clicked");
}, true)