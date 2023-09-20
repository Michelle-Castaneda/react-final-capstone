import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import Reviews from "./Components/Reviews/Reviews";
import Inventory from "./Components/Inventory/Inventory";

//ICONS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
<Route path="/reviews" element={<Reviews />} />
<Route path="/inventory" element={<Inventory />} />

      </Routes>
    </Router>
  );
}

export default App;
