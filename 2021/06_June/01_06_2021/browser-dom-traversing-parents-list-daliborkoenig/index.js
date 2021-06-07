// finding children

let html = document.firstElementChild.tagName
let body = document.firstElementChild.lastElementChild.tagName
let main = document.firstElementChild.lastElementChild.firstElementChild.tagName
let section =  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.tagName
let blockQuote = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.tagName
let footer = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.tagName
let cite = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.tagName
console.log(`${html} > ${body} > ${main} > ${section} > ${blockQuote} > ${footer} > ${cite}`);

// finding parents
let cite2 = document.querySelector("cite")
let footer2 = cite2.parentElement
let blockQuote2 = footer2.parentElement
let section2 =  blockQuote2.parentElement
let main2 = section2.parentElement
let body2 = main2.parentElement
let html2 = body2.parentElement

console.log(`${html2.tagName} > ${body2.tagName} > ${main2.tagName} > ${section2.tagName} > ${blockQuote2.tagName} > ${footer2.tagName} > ${cite2.tagName}`);
