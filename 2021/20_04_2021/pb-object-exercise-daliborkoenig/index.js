//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here
const recipe = {
  title: "Mole",
  serves: 2,
  ingredients: ["cinnamon","cumin","cocoa"]
}

console.log(recipe.title);
console.log(Object.keys(recipe)[1]+": "+recipe.serves);
console.log(Object.keys(recipe)[2]+": ");
console.log(Object.values(recipe)[2][0]);
console.log(Object.values(recipe)[2][1]);
console.log(Object.values(recipe)[2][2]);



//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.




//write your code here

let books = [
  {
    title: "someTitle One",
    author: "someAuthor One",
    alreadyRead: true
  },
  {
    title: "someTitle Two",
    author: "someAuthor Two",
    alreadyRead: false
  },
  {
    title: "someTitle Three",
    author: "someAuthor Three",
    alreadyRead: true
  },
  {
    title: "someTitle Four",
    author: "someAuthor Four",
    alreadyRead: false
  }
]

for (let book of books) {
  // console.log(`${book.title} by ${book.author}`);
  if (book.alreadyRead == true){
    console.log(`You already read "${book.title}" by ${book.author}`); 
  }
  else {
    console.log(`You still neeed to read "${book.title}" by ${book.author}`)
  }
}
