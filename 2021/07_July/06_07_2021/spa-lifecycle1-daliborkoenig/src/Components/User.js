import React, { Component } from 'react'

export class User extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <tr>
        <td key={Math.random()}>{this.props.id}</td>
        <td key={Math.random()}>{this.props.name}</td>
        <td key={Math.random()}>{this.props.email}</td>
      </tr>
    )
  }
}

export default User
