import React, { useState, useEffect } from 'react';
import "./Inventory.css";
import InventoryCard from "../InventoryCard/InventoryCard";
import axios from 'axios';
import Footer from "../Footer/Footer"

function Inventory() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/car_listing")
    .then(response => {
      setCars(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching cars data: ", error);
    });
  }, []);

  return (
    <div className="completeInventory">
      <h3 className="advancedTitle">What vehicle are you searching for?</h3>
      
      <div className="advancedSearch">
        <input type="text" placeholder="Make" />
        <input type="text" placeholder="Model" />
        <input type="text" placeholder="Type" />
        <input type="text" placeholder="Year" />
        <button className="advancedBtn">Search</button>
      </div>

      <div className="cardContainer">
        {cars.map(car => (
          <InventoryCard key={car.car_id} car={car} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Inventory;
