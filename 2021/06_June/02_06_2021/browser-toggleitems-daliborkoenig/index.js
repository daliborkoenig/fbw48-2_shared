// colors
// explain - #CEE4FE
// list - #0D7FF7

const body = document.querySelector("body")
body.style = `
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
font-family: Arial;
font-size: 1.2em;
margin: 0;
padding: 0;
`

const main = document.createElement("main")
main.id = "main"
main.style.width = "90%"
main.style.marginLeft = "5%"

const title = document.createElement("h1")
title.id = "title"
title.textContent = "My Favourite Destinations"
title.style.textAlign = "center"
title.style.marginLeft = "10%"


const explain = document.createElement("p")
explain.id = "explain"
explain.textContent = "Toggle the list of my favourite destinations"
explain.style.color = "#0D7FF7"
explain.style.backgroundColor = "#CEE4FE"
explain.style.padding = "25px"
explain.style.borderRadius = "5px"

const list = document.createElement("ul")
list.id = "list"
list.style.listStyle = "none"
list.style.paddingLeft = "0px"
list.style.borderRadius = "5px"
list.style.border = "1px solid grey"
list.style.display = "none"

const selection = document.createElement("p")
selection.id = "selection"
selection.textContent = "You selected "
selection.style.padding = "25px"
selection.style.borderRadius = "5px" 
selection.style.color = "green"
selection.style.backgroundColor = "lightgreen"
selection.style.fontSize = "1.1em"
selection.style.display = "none"

const button = document.createElement("button")
button.id = "button"
button.textContent = "Show Destinations"
button.style.width = "15%"
button.style.marginLeft = "85%"
button.style.padding = "25px"
button.style.borderRadius = "5px" 
button.style.color = "white"
button.style.backgroundColor = "#0D7FF7"
button.style.borderColor = "#CEE4FE"
button.style.fontSize = "1.1em"


body.append(main);
main.append(title,explain,list,selection,button);

const favourite = ["Rome", "Athens",
"Bangkok", "Amsterdam", "Cala Gonone"]

for (let i = 0; i < 5; i++) {
  let listItem = document.createElement("li")
  listItem.textContent = favourite[i]
  listItem.style.padding = "25px"
  listItem.style.borderBottom = "1px solid grey" 
  list.appendChild(listItem)
}

const listItems = document.querySelectorAll("li")
listItems.forEach(element => {
  element.addEventListener('mouseover',()=>{
    element.style.backgroundColor = "#0D7FF7"
    element.style.color = "white"
  })
  element.addEventListener('mouseout',()=>{
    element.style.backgroundColor = "white"
    element.style.color = "black"
  })
  element.addEventListener('click',(e)=>{
    selection.style.display = "block"
    console.log(e.target.textContent);
    selection.textContent = `You have selected ${e.target.textContent}`
  })
});

function buttonFunction(e){
  if(e.srcElement.textContent == "Show Destinations"){
    list.style.display = "block"
    button.textContent = "Hide Destinations"
  }
  else{
    list.style.display = "none"
    button.textContent = "Show Destinations"
  }
}

button.addEventListener('click', buttonFunction)






