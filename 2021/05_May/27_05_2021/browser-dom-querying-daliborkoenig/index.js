// const titles = document.querySelectorAll(".food-category")
// for(item of titles){
//   // console.log(item.outerHTML)
//   if(item.outerHTML.includes("Starters")){
//     item.style.backgroundColor = "#E5C4AF"
//   }
//   else if(item.outerHTML.includes("Mains")){
//     item.style.backgroundColor = "#E8CCF1"
//   }
//   else if(item.outerHTML.includes("Desserts")){
//     item.style.backgroundColor = "#EEAFAF"
//   }
// }

document.body.style.fontFamily = "Arial"
document.body.style.width = "100vw"
document.querySelector("h1").style.textAlign = "center"
const category = document.querySelectorAll(".category").forEach(element => {
  element.style.fontSize = "1.5em"
  element.style.fontStyle = "italic"  
  element.style.textDecoration = "underline"  
});

function randomColor(){
  // return "#" + ((1<<24)*Math.random() | 0).toString(16);
  return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.random().toFixed(1)})`
}

const foodCategory = document.querySelectorAll(".food-category")
foodCategory.forEach(element => {
  element.style.width = "25%"
  element.style.background = randomColor()
});
console.log(foodCategory);

const main = document.querySelector("main")
main.style.display = "flex"
main.style.justifyContent = "space-around"

window.addEventListener('resize', function () {
  if(window.innerWidth < 768){
    main.style.flexFlow = "column wrap"
    foodCategory.forEach(element => {
      element.style.width = "90%"
      // element.style.margin = "auto"
    });
    desc.style.flexFlow = "column wrap"
  }
});
const warning = document.getElementById("warning")


const alergyInfo = document.querySelectorAll(".allergy-info")

for(let i=0 ; i<alergyInfo.length; i=i+2){
  alergyInfo[i+1].style.background = randomColor()
}
alergyInfo.forEach(element => {
  element.style.width = "300px"
  element.style.listStyle = "none"
});

const ul = document.querySelector(".allergies")
ul.style.width = "100%"
ul.style.display = "flex"
ul.style.flexFlow = "column"
ul.style.alignItems = "center"

warning.style.fontFamily = "Times new roman"
warning.style.fontSize = "2em"
warning.style.display = "flex"
warning.style.justifyContent = "center"

const description = document.querySelectorAll(".food-desc")
const desc = document.querySelector("footer")
desc.style.display = "flex"
desc.style.justifyContent = "center"
desc.style.alignItems = "center"
description.forEach(element => {
  element.style.border = "2px solid red"
  element.style.borderRadius = "50%"
  element.style.padding = "20px"
  element.style.width = "100px"
  element.style.height = "100px"
  element.style.display = "flex"
  element.style.justifyContent = "center"
  element.style.alignItems = "center"
  element.style.margin = "20px"
});