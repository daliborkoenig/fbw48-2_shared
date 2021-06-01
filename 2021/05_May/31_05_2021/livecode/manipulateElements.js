// const main = document.getElementById("main")
// main.style.color = "blue"

// const other = document.getElementsByClassName("other")
// for(item of other){
//   item.style.color = "red"
// }

// const divs = document.getElementsByTagName("div")
// divs[2].style.textDecoration = "underline"

// Array.from(divs).forEach(element => {
//   element.style.border = "2px dotted black"
// });

// const inputs = document.getElementsByName("username")
// inputs[0].placeholder = 100

const main = document.querySelector("#main")

//Manipulating classes
// to add a class : .classList.add("classname")

main.classList.add("italic")

// to remove a class : .classList.remove("classname")

main.classList.remove("italic")

// to overrite all classes : .className = "classname"
main.className = "bold"
// to add a class : .className += " classname"
main.className += " greenText"

// textContent and innerHTML
main.textContent = "hello"
main.innerText = "hello"
main.innerHTML += "<button> World</button>"
// main.textContent += " , is it me you are looking for"
main.innerHTML += " , is it me you are looking for"
// main.innerText += " , is it me you are looking for"



