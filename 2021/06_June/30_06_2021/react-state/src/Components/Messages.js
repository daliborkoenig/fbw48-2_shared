import React, {Component} from 'react'

class Messages extends Component{
  state = {
    class: 'FBW-48-2',
    developers: ["May", "Sarah", "Lana"],
    color: "lightblue"
  }
  render(){
    return (
      <div>
        <h1 style={{backgroundColor:this.state.color}}>Hello World! {this.state.class}</h1>
        <p>{this.state.developers.map((item)=>{
          return <h5>{item}</h5>
        })}</p>
        <button onClick={()=>{this.state.color === "lightblue" ? this.setState({color:"lightgreen"}) : this.setState({color:"lightblue"})}}>change color</button>
      </div>
    )
  }
}

export default Messages