import React, {useState} from 'react'
import BookList from './BookList'
import BookFilter from './BookFilter'

function Books(props) { 

  return (
    <section id="books">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Books</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <BookFilter tabItems={props.tabItems}/>
          <BookList books={props.books}/>
        </div>
      </section>
  )
}

export default Books
