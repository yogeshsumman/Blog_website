import './App.css';
import About from './Components/Navbar/About'
import Navbar from './Components/Navbar/Navbar';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import img1 from './images/dogo.jpg'
import Sidemenu from './Components/Sidemenu/sidemenu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Sidemenu/>
      <div>
      <Routes>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/" element={<Info/>}/>
        </Routes>
      {/* <Sidemenu/>
      <Info/>
      <img src={img1} alt="" id='img1' /> */}
      <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;
