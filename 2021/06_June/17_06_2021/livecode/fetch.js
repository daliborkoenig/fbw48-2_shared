// fetch("./example.txt")
// .then(response=>{
//   console.log(response);
// })
// .catch(err => {
//   console.log(err);
// })
const result = document.querySelector("#result")

function getText(){
  fetch("./example.txt")
  .then(response=>{
    return response.text();
  })
  .then(data => {
    document.querySelector("#result").innerHTML = data
})
}
getText()

function getJson(){
fetch("./data.json")
  .then(response=>{
    return response.json();
  })
  .then(data=>{
    // console.log(data);
    data.forEach(element => {
      result.innerHTML += `<li>${element.firstName}</li>`
    });
  })
}

getJson()
function getAPI(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      json.forEach(element => {
        result.innerHTML += `<li>${element.name}</li>`
      });
    })
}

getAPI()
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


