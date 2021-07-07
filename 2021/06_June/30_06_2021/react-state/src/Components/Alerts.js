import {useState} from 'react'

function Alerts(){
  const [state, setState] = useState({msg: "404 page not found", name: "Dalibor"})
  const [greet, setGreet] = useState("Hello there")
  const [error, setError] = useState(false)
  const [notification, setNotification] = useState([{msg: "data updated", type: "success"}])
  return (
    <div>
      <h1>{greet} {state.name}</h1>
      {error && 
      <p>{state.msg}</p>}
      <button onClick={()=>{greet === "Hello there" ? setGreet("Salut") : setGreet("Hello there")}}>change greeting</button>
      <button onClick={()=>{error ? setError(false) : setError(true)}}>show error</button>
      <button onClick={()=>{setError(!error)}}>{error ? "hide error": "show error"}</button>

      <h4>Notifications:</h4>
      <button onClick={()=>{setNotification(notification => [...notification, {msg: "new data updated", type:"success"}])}}>add notification</button>
 
      {
        notification && notification.map(item => {
          return <h6>{item.msg}</h6>
        })
      }

    </div>
  )
}

export default Alerts