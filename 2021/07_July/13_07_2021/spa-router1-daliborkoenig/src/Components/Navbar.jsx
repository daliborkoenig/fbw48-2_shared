import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="Navbar">
      <h1>About Me</h1>
      <ul>
        <li><Link to='/'>Me</Link></li>
        <li><Link to='/hobbies'>Hobbies</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className="line"></div>
    </nav>
  )
}

export default Navbar
