// const h1 = document.querySelectorAll("h1")
const h1 = document.querySelector("h1")
const header = h1.closest("header")
header.style.border = "5px solid grey"

const info = document.querySelector(".info")
const infoPackage = document.querySelectorAll(".info-package")
if (info.contains(document.querySelector(".info-package"))) {
  infoPackage.forEach(element => {
    element.querySelector(".package-title").previousElementSibling.style.border = "2px solid black";
    if(element.querySelector("label").className == "mild"){
      element.querySelector("label").style.borderBottom = "2px solid yellow"
    }
    else if(element.querySelector("label").className == "intense"){
      element.querySelector("label").style.borderBottom = "2px solid orange"
    }
    else{
      element.querySelector("label").style.borderBottom = "2px solid red"
    }
  });
}

let children = document.querySelector(".nav-list").children;

Array.from(children).forEach(element => {
  document.querySelector("footer").firstElementChild.append(element)
});

footerchild = document.querySelector("footer").firstElementChild




