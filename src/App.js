import './App.css';
import About from './Components/Navbar/About'
import Something from './Components/Navbar/Something'
import Navbar from './Components/Navbar/Navbar';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import Sidemenu from './Components/Sidemenu/sidemenu';
import {
  Routes,
  Route
  } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Sidemenu/>
      <Routes>
          <Route exact path="/" element={<Info/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Something" element={<Something/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
