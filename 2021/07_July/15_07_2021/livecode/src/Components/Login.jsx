import React from 'react'
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()
  return (
    <div>
      email <input type="email" name="" id="" />
      password <input type="password" name="" id="" />
      <button onClick={()=>history.push("/dashboard")}>Login</button>
    </div>
  )
}

export default Login
