import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';
const list = ["facebook", "netflix", "reddit", "ebay", "dropbox", "airbnb", "coursera"];
function App() {
  return (
    <div className="App">
      <Header />
      <h1>React Introduction</h1>
      <p>start with react</p>

      {/* jsx code start*/}
      {list.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
      {/* jsx code end*/}

      <Footer />
    </div>
  );
}

export default App;
