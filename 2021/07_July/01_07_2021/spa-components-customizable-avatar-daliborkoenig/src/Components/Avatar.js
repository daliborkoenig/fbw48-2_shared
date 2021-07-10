import React, {useState} from 'react'

function Avatar(props) {
  const [src, setSrc] = useState(props.src)
  const [size, setSize] = useState(props.size)
  const [type, setType] = useState(props.type)
  return (
    <img src={props.src+(props.size === "s" ? "30/30" : props.size === "m" ? "60/60" : props.size === "l" ? "120/120" : "200/200")} alt="" srcset="" style={props.type === "circle" ? {borderRadius: "50%"} : props.type === "square" ? {borderRadius: "0"} : ""}/>
  )
}

// Avatar.defaultProps = {
//   src: "https://picsum.photos/",
//   size: "m",
//   type: "square"
// }
export default Avatar
