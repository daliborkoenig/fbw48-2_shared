import React, {useState} from 'react'

function Search(props) {
  const [search, setSearch] = useState(null)

  const handleChoice = (e) => {
    props.search(e.target.id, e.target.checked)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  const handleClick = (e) => {
    props.search(e.target.id, search)
  }

  return (
    <div className="Search">
      <div className="search">
        <input type="text" name="" id="" onChange={handleChange}/>
        <button onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <form className="Checkboxes">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="Breakfast" onChange={handleChoice}/>
          <label className="form-check-label" htmlFor="Breakfast">
            Breakfast
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="Lunch" onChange={handleChoice}/>
          <label className="form-check-label" htmlFor="Lunch">
            Lunch
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="Dinner" onChange={handleChoice}/>
          <label className="form-check-label" htmlFor="Dinner">
            Dinner
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="Snack" onChange={handleChoice}/>
          <label className="form-check-label" htmlFor="Snack">
            Snack
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="Teatime" onChange={handleChoice}/>
          <label className="form-check-label" htmlFor="Teatime">
            Teatime
          </label>
        </div>
      </form>
    </div>
  )
}

export default Search
