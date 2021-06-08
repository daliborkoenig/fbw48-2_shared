const tree = document.querySelector(".tree")
// console.log(tree);
const list = document.querySelectorAll("li")
for (li of list){
  let span = document.createElement("span")
  console.log(li);
  li.prepend(span);
  span.append(span.nextSibling)
}
// console.log(li);


// Array.from(tree.children).forEach(element => {
//   Array.from(element.children).forEach(element => {
//     Array.from(element.children).forEach(element => {
//       Array.from(element.children).forEach(element => {
//         Array.from(element.children).forEach(element => {
//           element.innerHTML = `<span>${element.innerHTML}</span>`
//         })
//       });
//     });
//   })
// });

const all = tree.getElementsByTagName("*");
tree.addEventListener("click", (e)=>{
  if(typeof e.target.children[0] === "undefined"){
  }
  else if(e.target.children[0].style.display == "none"){
    e.target.children[0].style.display = "block"
  }
  else if(e.target.children.length == 1){
    e.target.children[0].style.display = "none"
  }
  else{
    console.log("nothing");
  }
})

// tree.addEventListener("mouseover", (e)=>{
//   e.target.style.fontWeight = "bold"
//   e.target.style.cursor = "pointer"
// })

// tree.addEventListener("mouseout", (e)=>{
//   e.target.style.fontWeight = "normal"
// })
