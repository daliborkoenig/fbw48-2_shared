import './App.css';
import React, {useState} from 'react'
import Avatar from './Components/Avatar';

function App() {
  const [choice, setChoice] = useState(true)
  const [src, setSrc] = useState("https://picsum.photos/")
  const [size, setSize] = useState("m")
  const [type, setType] = useState("square")

  const handleChange = (e) => {
    if(e.target.parentElement.className === "type"){
      setType(e.target.value)
    }
    if(e.target.parentElement.className === "size"){
      setSize(e.target.value)
    }
  }
  
  return (
    <div className="App">
      <div className="options">
        <div className="size">
          <label name="size">Choose Size</label>
          <select onChange={handleChange}>
            <option value="s">Small (30x30)</option>
            <option selected value="m">Medium (60x60)</option>
            <option value="l">Large (120x120)</option>
            <option value="xl">X-Large (200x200)</option>
          </select>
        </div>
        <div className="type">
          <label name="type">Choose Type</label>
          <select onChange={handleChange}>
            <option selected value="square">Square</option>
            <option value="circle">Circle</option>
          </select>
        </div>
      </div>
      <div className="avatar">
        <Avatar src={src} size={size} type={type}/>
        <p>size <b>{size}</b> with <b>{size === "s" ? "30x30" : size === "m" ? "60x60" : size === "l" ? "120x120" : "200x200"}</b></p>
        <p>type <b>{type}</b></p>
      </div>
    </div>
  );
}

export default App;
