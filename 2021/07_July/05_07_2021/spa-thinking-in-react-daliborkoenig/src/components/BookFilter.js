import React from 'react'

function BookFilter(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="nav nav-pills text-center">{props.tabItems}</ul>
      </div>
    </div>
  )
}

export default BookFilter
