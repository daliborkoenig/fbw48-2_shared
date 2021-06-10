const container = document.createElement("div")
container.id = "container"

document.body.appendChild(container)

function generateTree(className,x,y){
  const tree = document.createElement("div")
  if(className == "tree-1"){
    tree.setAttribute("class", "tree-1")
    tree.style.left = `${x}px`
    tree.style.top = `${y}px`
  }
  else if(className == "tree-2"){
    tree.setAttribute("class", "tree-2")
    tree.style.left = `${x}px`
    tree.style.top = `${y}px`
  }
  else if(className == "tree-3"){
    tree.setAttribute("class", "tree-3")
    tree.style.left = `${x}px`
    tree.style.top = `${y}px`
  }
  container.appendChild(tree)
}
function generateInsect(x,y){
  const insect = document.createElement("div")
  insect.setAttribute("class", "insect")
  insect.style.left = `${x}px`
  insect.style.top = `${y}px`
  insect.style.animation = `insect${Math.ceil(Math.random()*3)} 2s ease-in-out infinite`
  container.appendChild(insect)
}

function randomX(){
  return Math.ceil(Math.random()*(container.clientWidth-200))
}
function randomY(){
  return Math.ceil(Math.random()*(container.clientHeight-200))
}
function randomTree(){
  const trees = ["tree-1","tree-2","tree-3"]
  let randomTree = trees[Math.floor(Math.random()*3)] 
  return randomTree
}

function generateForrest(num){
  for (let index = 1; index <= num; index++) {
    generateTree(randomTree(), randomX(), randomY())
  }
  for (let index = 1; index < Math.ceil(Math.random()*num); index++) {
    generateInsect(randomX(), randomY())    
  }
}
generateForrest(30)
