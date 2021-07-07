import React, {useState, useEffect} from "react";
import anime from 'animejs/lib/anime.es.js';
import Stopwatch from "./Stopwatch";

const App = () => {
  return (
    <div className="app">

      {/* <div>{time}</div>
      <div id="stopwatch">
        <div id="secondDial"></div>
      </div> */}
      <Stopwatch />

    </div>
  );
};

export default App;