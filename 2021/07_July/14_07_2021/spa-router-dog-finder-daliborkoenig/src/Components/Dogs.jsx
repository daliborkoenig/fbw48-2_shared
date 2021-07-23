import React , { useState , useRef } from 'react'
import whiskey from '../images/whiskey.jpg'
import hazel from '../images/hazel.jpg'
import tubby from '../images/tubby.jpg'
import { Link , useParams} from 'react-router-dom'

function Dogs() {
  const [show, setShow] = useState(false)
  const [choice, setChoice] = useState("hazel")
  const param = useParams()
  const [dogs] = useState({
    whiskey: ["Age: 4", "Whiskey loves eating popcorn", "Whiskey is a terrible guard dog", "Whiskey wants to cuddle with you"],
    hazel: ["Age: 0", "Hazel has so much energy", "Hazel is higly intelligent", "Hazel likes people more than dogs"],
    tubby: ["Age: 4", "Tubby is really stupid", "Tubby doesn't like walks", "Angelina hates Tubby"]
  })
  console.log(param);
  return (
    <>
      <h1>HELLOZ. WE HAVE DOGY. CLICK ON THEM FOR MORE INFO.</h1>
      <div className="Dogs">
        <div className="dog">
          <img id="whiskey" src={whiskey} alt="" width={200} style={!param.dogName ? {filter: "brightness(100%)"} : param.dogName === "whiskey" ? {filter: "brightness(100%)"} : {filter: "brightness(40%)"}}/>
          <Link to="/dogs/whiskey" onClick={()=>setShow(true)}><h2>Whiskey</h2></Link>
        </div>
        <div className="dog">
          <img src={hazel} alt=""  width={200} style={!param.dogName ? {filter: "brightness(100%)"} : param.dogName === "hazel" ? {filter: "brightness(100%)"} : {filter: "brightness(40%)"}}/>
          <Link to="/dogs/hazel" onClick={()=>setShow(true)}><h2>Hazel</h2></Link>
        </div>
        <div className="dog">
          <img src={tubby} alt=""  width={200} style={!param.dogName ? {filter: "brightness(100%)"} : param.dogName === "tubby" ? {filter: "brightness(100%)"} : {filter: "brightness(40%)"}}/>
          <Link to="/dogs/tubby" onClick={()=>setShow(true)}><h2>Tubby</h2></Link>
        </div>
      </div>
      {show && param.dogName && <div className="result"><h2>Name {param.dogName}</h2>{dogs[param.dogName].map(item=>(<h4>{item}</h4>))}</div>}
    </>
  )
}

export default Dogs
