import './App.css';
import SixOutOf49 from './Components/SixOutOf49';
import Eurojackpot from './Components/Eurojackpot';
import React, {useState} from 'react'

function App() {
  const [choice, setChoice] = useState(null)
  const [showButtons, setShowButtons] = useState(true)

  const handleClick = (e) => {
    if(e.target.id === "six"){
      setChoice("six")
      setShowButtons(false)
    }
    else{
      setChoice("euro")
      setShowButtons(false)
    }
  }
  
  return (
    <div className="App">
      <h1 className="title">Random lottery numbers generator</h1>
      {showButtons ? (<div className="start">      
        <button id="six" className="choicebtn" onClick={handleClick}></button>
        <button id="euro" className="choicebtn" onClick={handleClick}></button>
      </div>) : ""}
      {/* <div className="start">      
        <button className="choicebtn" onClick={()=>setChoice("six")}></button>
        <button className="choicebtn" onClick={()=>setChoice("euro")}></button>
      </div> */}
      {choice === "euro" ? <Eurojackpot/> : choice === "six" ? <SixOutOf49/> : ""}
            
    </div>
  );
}

export default App;
