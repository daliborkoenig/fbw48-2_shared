import './App.css';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import Settings from './Components/Settings';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        {/* when we have one component */}
        <Route path='/weather' component={Weather} exact/> 
        
        {/* when we have multiple components */}
        <Route path='/settings' exact>
          <h4>Settings component</h4>
          <Settings/>
        </Route>
        <Route path='/settings/colors' exact>
          <h4>Settings for colors sub-component</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
