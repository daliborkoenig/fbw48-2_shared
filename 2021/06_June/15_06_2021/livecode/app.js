// import json from API
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

  // JSON format
  let person = {
    "name": "Max",
    "email": "max@gmail.com",
    "age": 3
  }

  // not JSON format
  let person2 = {
    name: "Max",
    email: "max@gmail.com",
    age: 30
  }

  // convert to JSON
  let person3 = JSON.stringify(person2)

  // JSON:parse convert from string to object
  // console.log(JSON.parse(person3));

  // import JSON data
  import {jsonData} from "./data.js"

  console.log(typeof jsonData);
  const myData = JSON.parse(jsonData)
  console.log(typeof myData);

  const user = {id:1, name:"John"} // object
  const jsonUser = {"id":1, "name":"John"} // object valid as json
  const jsonUserStr = '{"id:1, "name":"John"}' // json as string


  try {
    console.log(JSON.parse(jsonUserStr));
  } catch (error) {
    console.log(error);
  }
console.log("sxf");

// render json data to browser
// myData (already parsed data from json file)
// console.log(myData.posts[0])
const ul = document.createElement("ul")
document.body.append(ul)
myData.posts.forEach(element => {
  const li = document.createElement("li")
  li.textContent = element.firstName+" "+element.lastName
  ul.appendChild(li)
});