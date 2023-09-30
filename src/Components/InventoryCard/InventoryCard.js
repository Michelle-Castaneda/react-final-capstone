import React from "react";
import "./InventoryCard.css"


function InventoryCard ({ car }) {
    // console.log(car.make)

    const carImage = require(`../ImageReel/${car.make}_${car.model}.jpg`)
    
    return (
        <div className="car_card">
            <div className="car_info">
                <p className="car_title">{car.make} {car.model}</p>
                <img src={carImage} className="carImageCard" alt="car"/>
                <p className="car_make">{car.make}</p>
                <p className="car_model">{car.model}</p>
                <p className="car_price">{car.price}</p>
                <p className="car_year">{car.year}</p>
                <p className="car_downpayment">{car.down_payment}</p>
                <p className="car_description">{car.description}</p>
            </div>
            <button className="interested">I'm Interested</button> 
        </div>
    )
}

export default InventoryCard;

