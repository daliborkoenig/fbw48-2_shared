import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/weather'>Weather</Link></li>
          <ul><Link to='/settings'>Settings</Link>
            <li><Link to='settings/colors'>colors</Link></li>
          </ul>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navbar

