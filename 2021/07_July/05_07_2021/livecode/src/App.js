import './App.css';
import React from 'react'
import Switch from './Components/Switch';
import Inputs from './Components/Inputs';
import User from './Components/User.jsx';

function App() {
  
  return (
    <div className="App">
      <h1>Events</h1>
      <Switch />
      <hr />
      <Inputs />
      <hr />
      <User />
      <hr />
    </div>

  );
}

export default App;
