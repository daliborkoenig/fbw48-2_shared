import React, { Component } from 'react'

// Update this component to use the Updating Component Lifecycle methods

export default class CounterPage extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter() {
    let { counter } = this.state
    counter++

    this.setState({
      counter
    })
  }

  decrementCounter() {
    let { counter } = this.state
    counter--

    this.setState({
      counter
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }
}