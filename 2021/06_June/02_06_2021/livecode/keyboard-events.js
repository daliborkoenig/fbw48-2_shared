const form = document.querySelector("#form")
const input = document.querySelector('input')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log("Form submited");
  console.log(input.value);
  input.value = ""
})

// keydown
input.addEventListener('keydown', (e)=>{
  console.log(e.key);
})
// which button was pressed

