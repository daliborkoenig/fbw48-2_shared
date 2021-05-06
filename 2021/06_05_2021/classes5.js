// parent class
class Book{
  constructor(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}
// child class
class BookList{
  list = []
  constructor(list){
    this.list = Array(list)
  }
  addBook(book){
    this.list.push(book)
  }
  deleteBook(isbn){
    for (book in this.list){
      if (book.isbn == isbn){
        this.list.splice(this.list.indexOf(book),1)
      }
    }
  }
}

let bookList = new BookList()
console.log(bookList);