// window.console.log("check");
// window.alert("check");
// const input = window.prompt("Hello World")
// alert(input)
// console.log(input);
// const mood = confirm("Are you happy")

// console.log(mood);

// console.log(window.innerWidth);
// console.log(window.outerWidth);

// console.log(document.body.style.backgroundColor = "green");

const h1 = document.querySelector("h1")
console.log(h1, typeof h1);

const div = document.querySelector("div")
console.log(div, typeof div);

const p = document.querySelector("p")
console.log(p);

p.style.color = "green"
p.innerHTML = "not a paragraph anymore"

const article = document.querySelectorAll(".article")
console.log(article);
for(let item of article){
  if(item.outerHTML.includes("article2")){
    item.innerHTML += "this one has more classes"
  }
  else{
    item.style.backgroundColor = "yellow"
  }
}
article[1].style.color = "blue"

const allP = document.querySelectorAll("p")
// const allP = document.getElementsByClassName("p")
allP.forEach(element => {
  element.innerHTML += " this is cool"
});
console.log(allP);