// document.write
document.write("Whatever")

let main = document.createElement("main")
main.textContent = "Woot woot, i am created"
main.id = "main"
main.style.border = "2px solid black"
document.body.appendChild(main)

let someDiv = document.createElement("div")
someDiv.textContent = "I am also here"
someDiv.style.border = "2px dotted black"
main.appendChild(someDiv)

let innerDiV = document.createElement("div")
innerDiV.textContent = "me too me too, inception"
innerDiV.style.border = "2px dashed black"

someDiv.appendChild(innerDiV)

