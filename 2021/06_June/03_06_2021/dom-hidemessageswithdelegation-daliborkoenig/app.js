const container = document.querySelector("#container")
console.log(container);
// const textNodes = getAllTextNodes(container);

// function getAllTextNodes(element) {
//   return Array.from(element.childNodes)
//     .filter(node => node.nodeType === 3 && node.textContent.trim().length > 1);
// }

// console.log(textNodes);


container.addEventListener("click", (e)=>{
  if(e.target.nodeName === "BUTTON"){
    e.target.parentElement.remove()
  }
})