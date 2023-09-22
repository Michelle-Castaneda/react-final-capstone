import React from "react";
import "./InventoryCard.css"
import car1 from "../ImageReel/Civic_Rojo.jpg";

function InventoryCard ({ car }) {
    console.log("Inventory Card Data", car)
    return (
        <div className="car_card">
            <div className="car_info">
                <p className="car_title">{car.make} {car.model}</p>
                <img src={car1} className="carImageCard" alt="car"/>
                <p className="car_make">{car.make}</p>
                <p className="car_model">{car.model}</p>
                <p className="car_price">{car.price}</p>
                <p className="car_year">{car.year}</p>
                <p className="car_downpayment">{car.down_payment}</p>
                <p className="car_description">{car.description}</p>
            </div>
            <button className="interested">Make an Appointment</button> 
        </div>
    )
}

export default InventoryCard;

