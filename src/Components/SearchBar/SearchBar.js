import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

function SearchBar () {
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [cars, setCars] = useState([]);

  
  

  const handleSearch = () => {

    const params = {};
  if(make) params.Make = make;
  if(model) params.Model = model;
  if(year) params.Year = year;


    axios.get("http://localhost:4000/car_listing", {params})
      .then(response => {
        const filteredCars = response.data.filter(car => 
          (!make || car.make === make) &&
          (!model || car.model === model) &&
          (!year || car.year.toString() === year)
        );
        setCars(filteredCars);
      })
      .catch(error => {
        console.error("There was an error fetching the cars data", error);
      });
  }

// const filteredCars = cars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));




  return (
    <div className="search">
      <div className="searchContainer">
        <h3 className="titleSearch">What type of vehicle are you interested in?</h3>
      </div>
         
      <input
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

<SearchIcon className="search_icon" onClick={handleSearch} />

        {cars.map(car => {
          const carImage = require(`../ImageReel/${car.make}_${car.model}.jpg`)
return (
          <div key={car.car_id}> 
          <div className="searchTitleResponse">
          {car.make} {car.model} {car.year} 
          </div>
          <img src={carImage} className="carImageCard" alt="car"/>
          </div>
)
})}
</div>
  )
}

export default SearchBar;
