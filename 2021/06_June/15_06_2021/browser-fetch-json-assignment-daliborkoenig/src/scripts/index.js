import {myRecipes} from "./data.js"
 
// Import any additional modules you want to include below \/
// console.log(JSON.parse(myRecipes).bread);

const cakesArr = JSON.parse(myRecipes).cakes
const cakes = document.querySelector("#cakes")
const biscuitsArr = JSON.parse(myRecipes).biscuits
const biscuits = document.querySelector("#biscuits")
const breadArr = JSON.parse(myRecipes).bread
const bread = document.querySelector("#bread")

cakesArr.forEach(element => {
  console.log(element);
  cakes.innerHTML += `
  <div class="card mb-3" style="width: 20rem; height: 30rem;">
    <img src="${element.image}" class="card-img-top mb-4" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.author}</p>
      <hr/>
      <p class="card-text">Ingredients: ${element.ingredients}</p>
      </div>
  </div>
  `
});
biscuitsArr.forEach(element => {
  console.log(element);
  biscuits.innerHTML += `
  <div class="card mb-3" style="width: 20rem; height: 30rem;">
    <img src="${element.image}" class="card-img-top mb-4" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.author}</p>
      <hr/>
      <p class="card-text">Ingredients: ${element.ingredients}</p>
      </div>
  </div>
  `
});
breadArr.forEach(element => {
  console.log(element);
  bread.innerHTML += `
  <div class="card mb-3" style="width: 20rem; height: 30rem;">
    <img src="${element.image}" class="card-img-top mb-4" alt="...">
    <div class="card-body">
      <h5 class="card-title h-25">${element.title}</h5>
      <p class="card-text">${element.author}</p>
      <hr/>
      <p class="card-text">Ingredients: ${element.ingredients}</p>
      </div>
  </div>
  `
});
// \/ All of your javascript should go here \/

// <div class="card" style="width: 18rem;">
//   <img src="" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//   </ul>
// </div>