import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch , Redirect } from 'react-router-dom';
import Dogs from './Components/Dogs';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route component={App}>
        <Route exact path="/">
          <Redirect to="/dogs"/>
        </Route>
          <Route exact path="/dogs" component={Dogs}/>
          <Route exact path="/dogs/:dogName" component={Dogs}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;