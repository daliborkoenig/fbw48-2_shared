document.addEventListener('click', () => {
  console.log("click event");
})

document.body.style.position = "relative"
const main = document.querySelector("#main")
main.style.width = "300px"
main.style.height = "300px"
main.style.border = "2px solid black"
main.style.position = "absolute"

main.addEventListener('click', () =>{
  console.log("main div click event");
  main.style.borderColor = "red"
})
main.addEventListener('dblclick', () =>{
  console.log("main div double click event");
  main.style.borderColor = "black"
})

const newDiv = document.createElement("div")

main.addEventListener('mouseover', () =>{
  main.style.backgroundColor = "lightgreen"
  main.appendChild(newDiv)
  newDiv.textContent = "I am a new div"
})
main.addEventListener('mouseout', () =>{
  main.style.backgroundColor = "white"
})

function mouseOutHandler(){
  main.style.backgroundColor = "white"
}
main.addEventListener('mouseout', mouseOutHandler)

document.addEventListener('click', (event) => {
  event.preventDefault() // preventing default behaviour
  console.log(event);
})

// mousedown and mouseup (clicked and unclicked)

main.addEventListener('mousedown', () =>{
  document.body.style.backgroundColor = "coral"
})

main.addEventListener('mouseup', () =>{
  document.body.style.backgroundColor = "white"
})

// mouseenter and mouseleave

// mousemove

main.addEventListener('mousemove', (e) =>{
  console.log(e)
})
