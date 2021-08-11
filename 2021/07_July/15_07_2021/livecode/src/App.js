import './App.css';
import { BrowserRouter , Route , Switch , Redirect } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Navigation from './Components/Navigation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={()=><Dashboard auth={false}/>} />
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
