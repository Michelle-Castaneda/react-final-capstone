import React from "react";
import "./InventoryCard.css"
import car1 from "../ImageReel/Civic_Rojo.jpg";

function InventoryCard () {
    return (
<div className="car_card">

<div className="car_info">
    <p className="car_title"></p>
    <p className="car_make"></p>
    <p className="car_model"></p>
    <p className="car_price"></p>
    <p className="car_year"></p>
    <p className="car_downpayment"></p>
    <p className="car_description"></p>
</div>

<img src={car1} alt='product' />
<button className="interested">I'm Interested</button> 

</div>
    )
}

export default InventoryCard;