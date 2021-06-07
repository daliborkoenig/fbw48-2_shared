const ul = document.querySelector("ul")
let result


// child nodes crates an array including empty spaces between elements
result =  ul.childNodes

// children creates an array containing only elements, without empty spaces
result =  ul.children

// children of children
result = ul.children[0].children[0]
result.style.color = "red"

// first child
result = ul.firstChild
result = ul.firstElementChild.firstElementChild

// last child
result =  ul.lastChild
result = ul.lastElementChild
result.textContent = "Last element child"

// count child elements
result = ul.childElementCount
// same as
result = ul.children.length

// parent node
result = ul.parentNode
result = ul. parentElement

result.style.backgroundColor = "lightgreen"

// next sibling
result = ul.firstElementChild.nextElementSibling
result.style.color = "blue"
// console.log(result);

// next sibling
result = ul.lastElementChild.previousElementSibling
result.style.color = "orange"

const text = document.createTextNode("this is a text node")
ul.firstElementChild.firstElementChild.append(text)
result = ul.firstElementChild.firstElementChild.childNodes[1]
result.previousSibling.textContent = "previous / "
// result.previousSibling.style.color = "blue"

console.log(result);
