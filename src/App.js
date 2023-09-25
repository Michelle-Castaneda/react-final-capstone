import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import Appointment from "./Components/Appointment/Appointment"
import Register from "./Components/Login/Register";

//ICONS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Header />
      {/* <Login /> */}
      {/* <Register /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
