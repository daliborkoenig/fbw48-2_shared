localStorage.setItem("background", "lightgreen")
console.log(localStorage);

if (localStorage) {
  document.body.style.background = localStorage.getItem("background")
}

const buttons = document.querySelectorAll("button")



const skills = ["javascript", "Github", "React", "Node.js"]
localStorage.setItem("skills", JSON.stringify(skills))
// console.log(localStorage.getItem("skills"))


buttons.forEach(element => {
  element.addEventListener("click", ()=>{
    if(element.textContent == "add skill"){
      console.log(element.previousElementSibling.value);
      if(element.previousElementSibling.value !== ""){
        console.log(storedSkills);
        const skillsArr = JSON.parse(localStorage.getItem("skills"))
        skillsArr.push(element.previousElementSibling.value)
        console.log(storedSkills);
        localStorage.setItem("skills", JSON.stringify(skillsArr))
        element.previousElementSibling.value = ""
      }
    }
      localStorage.setItem("background", element.textContent)
      document.body.style.background = localStorage.getItem("background")
  });
});

const storedSkills = JSON.parse(localStorage.getItem("skills"))

storedSkills.forEach(element => {
  const h3 = document.createElement("h3")
  h3.innerText = element
  document.body.appendChild(h3)
});