import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header';
import SearchResults from './Components/SearchResults';
import About from './Components/About';

class App extends Component {
  constructor(){
    super()
    this.state = {searchTerm: "",lastSearchTerm: "", currentPage: "search"}
  }
  navigate = (page) => {
    this.setState({currentPage : page})
  }
  render() {
    return (
      <div className="App">
        <Header navigationHandler={this.navigate}/>
        {this.state.currentPage === "search" ? <div className="Main">
          <div className="userInput">
            <input type="text" onChange={(e)=>{this.setState({searchTerm: e.target.value});console.log(this.state.searchTerm);}}/>
            <button onClick={()=>{this.setState({lastSearchTerm: this.state.searchTerm});console.log(this.state.lastSearchTerm);}}>Search</button>
          </div>  
          <SearchResults searchFor={this.state.lastSearchTerm}/>
        </div> : <div className="Main"><About/></div>}

        
      </div>
    );
  }
}

export default App;
