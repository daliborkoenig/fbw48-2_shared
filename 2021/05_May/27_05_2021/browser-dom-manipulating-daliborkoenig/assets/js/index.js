const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];


books.sort((a, b) => a.author.localeCompare(b.author));

const bookList = document.querySelector(".book-list")
bookList.className += " row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4"
books.forEach(element => {
  element.author = element.author.split(" ")
  element.author[0] = [element.author[1],element.author[1]=element.author[0]][0]
  if(element.alreadyRead){
    bookList.innerHTML += 
    `<div class="col">
      <div class="card h-75">
        <img src="${element.img}" class="images card-img-top border border-dark border-3" alt="..." height=60%>
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.author}</p>
        </div>
        <div class="card-footer d-flex justify-content-end align-items-center">
          <a href="#" class="btn btn-success rounded-pill h-75 d-flex align-items-center">Read</a>
        </div>
      </div>
    </div>`
  }
  else{
    bookList.innerHTML += 
    `<div class="col">
      <div class="card h-75">
        <img src="${element.img}" class="images card-img-top border border-dark border-3" alt="..." height=60%>
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.author}</p>
        </div>
        <div class="card-footer d-flex justify-content-end align-items-center">
          <a href="#" class="btn btn-secondary rounded-pill h-75 d-flex align-items-center">To read</a>
        </div>
      </div>
    </div>`
  }
})

const images = document.querySelectorAll(".images")
images.forEach(element => {
  element.style.objectFit = "cover"
});
console.log(images);

