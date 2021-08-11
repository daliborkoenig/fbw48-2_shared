import React from 'react'
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Me from './Components/Me';
import Hobbies from './Components/Hobbies';
import Contact from './Components/Contact';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' component={Me} exact/>
        <Route path='/hobbies' component={Hobbies} exact/>
        <Route path='/contact' component={Contact} exact/>
      </Switch>
    </BrowserRouter>

  )
}

export default App
