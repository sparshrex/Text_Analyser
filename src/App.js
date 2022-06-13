import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Navbar  navtitle = "NewWebsite">

      </Navbar>
    <div className="container my-5">

    <Textform   heading ="Text-Analyzer" />

    <AboutUs/>
    
    </div>

    
    </> 
  );
}

export default App;
