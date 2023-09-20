import React from "react";
import "./InventoryCard.css"
import car1 from "../ImageReel/Civic_Rojo.jpg";

function InventoryCard () {
    return (
<div className="car_card">
    <img src={car1} alt="" className="carImageCard" />

<div className="car_info">
    <p className="car_title">buik veranb</p>
    <p className="car_make">kv</p>
    <p className="car_model">fdgfd</p>
    <p className="car_price">454446</p>
    <p className="car_year">4587</p>
    <p className="car_downpayment">4757</p>
    <p className="car_description">fdgfdgd</p>
</div>

<button className="interested">I'm Interested</button> 

</div>
    )
}

export default InventoryCard;