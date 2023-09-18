import './App.css';

import Header from './Components/Header/Header'
import Home from './Components/HomePage/Home';
import Reviews from './Components/Reviews/Reviews';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <Reviews />
    </div>
  );
}

export default App;
