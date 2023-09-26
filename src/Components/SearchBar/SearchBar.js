import React, { useState,useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { getCar } from "../../../server/controller";

function SearchBar () {
  const [query, setQuery] = useState('');
  const [cars, setCars] = useState([]);

  
  useEffect(() => {
    axios.get('/car_listing')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the cars data!", error);
      });
  }, []);

  const filteredCars = cars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));


  return (
    <div className="search">
      <div className="searchContainer">
        <h3 className="titleSearch">What type of vehicle are you interested in?</h3>
      </div>
      <input
    type="text"
    className="inventory_search"
    placeholder="Search our inventory"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
/>

<div>
   {filteredCars.map(car => (
       <div key={car.name}>
           {car.name}: {car.details}
       </div>
   ))}
</div>

      <SearchIcon className="search_icon" />
      <span>Search</span>
    </div>
  );
}

export default SearchBar;
