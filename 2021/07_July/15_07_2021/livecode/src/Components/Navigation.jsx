import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  )
}

export default Navigation
