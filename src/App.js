
import './App.css';
import About from './components/About';
import Expertise from './components/Expertise';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Portfolio />
      <Gallery />
      
    </div>
  );
}

export default App;
