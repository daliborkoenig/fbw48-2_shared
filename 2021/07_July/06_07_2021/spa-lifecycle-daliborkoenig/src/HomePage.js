import React, { Component } from "react";
import CounterPage from "./CounterPage";

// Update this component to use the Mounting Component Lifecycle methods

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      counterpage: true,
    };
    console.log("Home: In the constructor");
  }
  componentWillMount(){
    console.log('lifecycle : 1 - componentWillMount')
  } 
  componentDidUpdate(){
    console.log('lifecycle update : 3 - componentDidUpdate')
  }
  componentWillUnmount(){
    console.log('lifecycle unmount : 1 - componentWillUnmount');
    alert('Component will unmount good bye !!!')
  }
  toggleCounter = () => {
    this.setState({
      counterpage: !this.state.counterpage,
    });
  };

  render() {
    console.log("Home: In render");
    return (
      <div>
        <h2>Home Page</h2>
        {this.state.counterpage && <CounterPage />}
        <button onClick={this.toggleCounter}>
          {this.state.counterpage ? "hide" : "show"}
        </button>
      </div>
    );
  }
}
