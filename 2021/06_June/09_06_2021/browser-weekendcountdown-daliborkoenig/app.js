const title = document.createElement("h1")
title.textContent = "Welcome to Weekend Countdown!"

const subtitle = document.createElement("h2")
subtitle.textContent = "Please enter your name"

const container = document.createElement("div")
container.id = "container"
container.style.display = "flex"

const yourName = document.createElement("input")
const submit = document.createElement("button")
submit.textContent = "GO"
submit.type = "submit"

document.body.append(title, subtitle, container)
container.append(yourName,submit)

let today = new Date()
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log(today.getDay());

submit.addEventListener("click", ()=>{
  if(today.getDay() <= 5){
    subtitle.textContent = `Hello ${yourName.value}. Today is ${days[today.getDay()-1]}. Only ${5-today.getDay()} days left until the weekend.`
  }
  else {
  subtitle.textContent = `Hello ${yourName.value}. Today is ${days[today.getDay()-1]}. It is the weekend.`
  }
})
