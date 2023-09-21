import React from "react";
import "./InventoryCard.css"
import car1 from "../ImageReel/Civic_Rojo.jpg";

function InventoryCard ({ car }) {
    return (
        <div className="car_card">
            <div className="car_info">
                <p className="car_title">{car.Make} {car.Model}</p>
                <img src={car1} alt={`${car.Make} ${car.Model}`} className="carImageCard" />
                <p className="car_make">{car.Make}</p>
                <p className="car_model">{car.Model}</p>
                <p className="car_price">{car.Down_Payment}</p>
                <p className="car_year">{car.Year}</p>
                <p className="car_downpayment">{car.Down_Payment}</p>
                <p className="car_description">{car.Description}</p>
            </div>
            <button className="interested">I'm Interested</button> 
        </div>
    )
}

export default InventoryCard;
