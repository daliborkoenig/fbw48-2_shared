import React, {useState, useEffect} from "react";
import './Stopwatch.css'
import anime from 'animejs/lib/anime.es.js';

function Stopwatch() {
  const [timer, setTimer] = useState(0)
  const [paused, setPaused] = useState(true)

  useEffect(() => {
    let watch = null
    if(!paused){
      watch = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10);
    }
    else if(paused){
      clearInterval(watch)
    }
    return () => clearInterval(watch);
  }, [!paused]);
  return (
    <div className="stopwatch">
      <div className="stopwatch-container">
        <div className="display">
          <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}</span>
          {/* <span>:</span> */}
          <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
          {/* <span>:</span> */}
          <span>{("0" + Math.floor((timer / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button onClick={()=>setPaused(false)}>START</button>
          <button onClick={()=>setPaused(true)}>STOP</button>
          <button onClick={()=>setTimer(0)}>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
