let wrapper = document.querySelector("#wrapper")
console.log("wrapper.children list :");
console.log(wrapper.children);
Array.from(wrapper.children).forEach(element => {
  console.log("wrapper's children's children:");
  console.log(element.children);
});
console.log("children length: "+wrapper.children.length);
console.log("children length: "+wrapper.childElementCount);

function mostClasses(obj){
  let most = Array.from(wrapper.children).sort((a,b) => b.classList.length - a.classList.length)
  console.log("AAAAAND the child with most classes is:");
  console.log(most[0]);
}

mostClasses(wrapper)

