import React, {useState} from 'react'

function Room() {
  const [state, setState] = useState({on: true, ifOn: "lit", ifOff: "dark"})
  let className = state.on ? "room lit" : "room dark"
  return (
    <div className={className}>
      <button onClick={()=>{
        if(state.on){
          setState({on:false})
        }
        else{
          setState({on:true})
        }
        console.log(state.on);
      }}>Lightswitch</button>
    </div>
  )
}

export default Room
