import React, { Component } from 'react'
import User from './User'


export class SearchResults extends Component {
  constructor(props){
    super(props)
    this.state = {
      users:[]
    }
  }
  componentDidMount(){
    this.fetchUsers()
    this.timer = setInterval(()=> this.fetchUsers(), 5000)
    console.log(this.props);
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    this.timer = null
  }
  fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await res.json()
    let filtered = result.map(item=>item.name.toLowerCase().includes(this.props.searchFor.toLowerCase())? item:"")
    console.log(filtered);
    this.setState({users: filtered})
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.value == this.props.value) {
      return true;
    } 
    else {
      return false;
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(item=><User key={Math.random()}id={item.id} name={item.name} email={item.email}/>)}
        </tbody>  
      </table>
    )
  }
}

export default SearchResults
