import React, { useState, useEffect } from 'react';
import "./Inventory.css";
import InventoryCard from "../InventoryCard/InventoryCard";
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';

function Inventory() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/car_listing")
    .then(response => {
      console.log("Cars Data", response.data)
      setCars(response.data);
    })
    .catch(error => {
      console.error("Error fetching cars data: ", error);
    });
  }, []);


  console.log("Cars Map Data", cars)
  
  return (
    <div className="completeInventory">
      <h3 className="advancedTitle">What vehicle are you searching for?</h3>
      
<SearchBar />

      {/* <div className="advancedSearch">
        <input type="text" placeholder="Make" />
        <input type="text" placeholder="Model" />
        <input type="text" placeholder="Year" />
        <button className="advancedBtn">Search</button>
      </div> */}




      <div className="cardContainer">
        {cars.map(car => (
          
          <InventoryCard key={car.car_id} car={car} />
          
        ))}
    
      </div>
    </div>
  );
}

export default Inventory;
