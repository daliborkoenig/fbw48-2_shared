import React from 'react'
import { Redirect } from 'react-router-dom'

function Dashboard(props) {
  if(!props.auth){
    alert("not authorized")
    return <Redirect to="/login" />
  }
  return (
    <div>
      <h1>Welcome back! Dashboard</h1>
    </div>
  )
}

export default Dashboard
