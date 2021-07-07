import React from 'react'

function User() {
  let userName = React.createRef()
  let password = React.createRef()
  const loginHandler = () => {
    console.log(userName.current.value, password.current.value);
    userName.current.select()
    document.execCommand("copy")
  }
  return (
    <div>
      <h5>REF in functional component</h5>
      <input type="text" name="" id="" placeholder="your user name" ref={userName}/><br/>
      <input type="password" name="" id="" placeholder="your password" ref={password}/><br/>
      <button onClick={loginHandler}>log in</button>
    </div>
  )
}

export default User
