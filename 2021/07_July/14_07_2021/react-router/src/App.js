import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Blog from './Components/Blog';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/products" component={Products}/>
        <Route path="/products/:productName" component={Products}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
