import React, { Component } from 'react'

export class Inputs extends Component {
  // constructor(props){

  // }
  input = React.createRef()
  name = React.createRef()
  text = " "
  changeHandler(){
    
  }
  clickHandler(){
    this.input.current.focus()
    console.log(this.input.current.value);
    console.log(this.name.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="your text here" ref={this.input} onChange={()=>this.changeHandler()}/><br/>
        <input type="text" placeholder="your name here" ref={this.name} onChange={()=>this.changeHandler()}/>
        <div><button onClick={()=>this.clickHandler()}>focus</button></div>
      </div>
    )
  }
}

export default Inputs
