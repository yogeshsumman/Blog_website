import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import img1 from './images/dogo.jpg'

function App() {
  return (
    <div>
      <Navbar/>
      <Info/>
      <img src={img1} alt="" id='img1' />
      <Footer/>
    </div>
  );
}

export default App;
