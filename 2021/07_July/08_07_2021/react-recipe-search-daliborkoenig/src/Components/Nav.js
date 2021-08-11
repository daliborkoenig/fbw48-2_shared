import React, { useState, useEffect } from 'react';
import Jokes from '../jokes.json'


function Nav() {
  const [active, setActive] = useState(false)
  const [show, setShow] = useState(false)
  const [jokes] = useState(Jokes)

  useEffect(() => {
  }, [])
  const handleClick = () => {
    setActive(!active)
    setTimeout(() => {
      setShow(!show)
    }, 400);
  }

  return (

    <nav className={active ? "nav-active" : ""}>
      <div className="header"></div>
      <div className="menu-icon" onClick={handleClick}>
        <span className="menu-icon__line menu-icon__line-left"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line menu-icon__line-right"></span>
        <h5>Food jokes</h5>
      </div>

      <div className="nav">
        {show ? <div className="nav__content">
            <h1>{jokes[0].joke}</h1>
            <button className="btn btn-warning my-5 w-25">New Joke</button>
        </div> : ""}
      </div>
    </nav>
  )
}

export default Nav
