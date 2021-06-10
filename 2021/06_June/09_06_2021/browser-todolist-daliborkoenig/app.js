const containerOne = document.createElement("div")
containerOne.style.width = "200px"
containerOne.style.height = "100px"
containerOne.style.display = "flex"
containerOne.style.flexDirection = "column"
containerOne.style.justifyContent = "space-around"

const containerTwo = document.createElement("div")
const taskInput = document.createElement("input")
const create = document.createElement("button")
create.textContent = "Create Task"
create.style.width = "100px"
create.style.height = "50px"

const task = document.createElement("h1")
task.style.backgroundColor = "red"
task.style.color = "white"
task.textContent = "task"



document.body.append(containerOne,containerTwo)
containerOne.append(taskInput, create)

create.addEventListener("click", ()=>{
  if(taskInput.value.length > 0){
    const deleteTask = document.createElement("span")
    deleteTask.textContent = "X"
    deleteTask.style.float = "right"
    deleteTask.style.paddingRight = "20px"
    deleteTask.style.cursor = "pointer"

    const task = document.createElement("h1")
    task.style.backgroundColor = "red"
    task.style.color = "white"
    task.style.paddingLeft = "20px"
    task.textContent = taskInput.value
    taskInput.value = ""

    containerTwo.appendChild(task)
    task.appendChild(deleteTask)
    deleteTask.addEventListener("click", (e)=>{
      containerTwo.removeChild(e.target.parentElement);
    })
  };

})