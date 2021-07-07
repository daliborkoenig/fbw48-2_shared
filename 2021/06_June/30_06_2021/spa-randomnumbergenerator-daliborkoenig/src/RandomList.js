import React, {useState} from 'react'

function RandomList() {
  const [number, setNumber] = useState([])
  return (
    <div>
      <button onClick={()=>{setNumber(notification => [...number, Math.random()])}}>add notification</button>
      {number && number.map(item=>{return <h6>{item}</h6>})}
    </div>
  )
}

export default RandomList
