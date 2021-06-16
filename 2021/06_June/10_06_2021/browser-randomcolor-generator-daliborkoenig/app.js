const title = document.createElement("h1")
title.textContent = "Random Color Generator"
title.style.paddingLeft = "30px"
title.style.paddingRight = "30px"

const wrapper = document.createElement("div")
wrapper.style.display = "grid"
wrapper.style.gridTemplateColumns = "1fr 1fr 1fr"
wrapper.style.gridGap = "30px"
wrapper.style.marginBottom = "30px"
wrapper.style.paddingLeft = "30px"
wrapper.style.paddingRight = "30px"

const container = document.createElement("div")
container.style.paddingLeft = "30px"
container.style.paddingRight = "30px"
const input = document.createElement("input")
input.type = "number"
input.value = "3"
const button = document.createElement("button")
button.textContent = "Add colors"
button.style.marginLeft = "30px"

document.body.append(title, wrapper, container)
container.append(input, button)

button.addEventListener("click", ()=>{
  for (let i = 0; i < input.value; i++) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = document.createElement("div")
    let del = document.createElement("button")
    del.textContent = "x"
    del.style.backgroundColor = "grey"
    del.style.borderRadius = "2px"
    del.style.position = `absolute`
    del.style.top = "10px"
    del.style.right = "10px"

    color.textContent = `#${randomColor}`
    color.style.backgroundColor = `#${randomColor}`
    color.style.height = `200px`
    color.style.fontWeight = `bold`
    color.style.borderRadius = `2px`
    color.style.display = `flex`
    color.style.justifyContent = `center`
    color.style.alignItems = `center`
    color.style.position = `relative`
    wrapper.appendChild(color)    
    color.appendChild(del)  
    
    del.addEventListener("click", (e)=>{
      e.target.parentElement.remove()
    })
  }

})

