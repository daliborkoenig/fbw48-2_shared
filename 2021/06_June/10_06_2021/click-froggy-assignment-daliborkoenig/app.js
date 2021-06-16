const froggy = document.querySelector(".froggy-sprite")
const speak = document.querySelector(".froggy-speak")
const froggyDiv = document.querySelector(".froggy")
const context = document.querySelector(".froggy-contextmenu")

froggy.onclick = ()=>{
  speak.style.visibility = "visible"
  setTimeout(() => {
    speak.style.visibility = "hidden"
  }, 200);
}

froggy.ondblclick = ()=>{
  froggyJump()
}

froggy.oncontextmenu = (e) =>{
  e.preventDefault()
  context.style.display = "block"
  setTimeout(() => {
    context.style.display = "none"
  }, 1000);
}

function froggyJump(){
  froggyDiv.style.top = Math.random()*(document.body.clientHeight-80) + "px"
  froggyDiv.style.left = Math.random()*(document.body.clientWidth-100) + "px"
}

window.onresize = () =>{
  froggyJump()
}