import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>User Search</h1>
        <div className="whatever">
          <span onClick={()=>this.props.navigationHandler("search")}>Search</span>|
          <span onClick={()=>this.props.navigationHandler("about")}>About</span>
        </div> 
      </div>
    )
  }
}

