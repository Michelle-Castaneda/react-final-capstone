import React from "react";
import "./Inventory.css";

import InventoryCard from "../InventoryCard/InventoryCard";

function Inventory() {
  return (
    <div className="completeInventory">
      <h3 className="advancedTitle">What vehicle you are searching for?</h3>
      <div className="advancedSearch">
        <input type="text" placeholder="Make" />
        <input type="text" placeholder="Model" />
        <input type="text" placeholder="Type" />
        <input type="text" placeholder="Year" />
        <button className="advancedBtn">Search</button>
      </div>

      <div className="cardContainer">
        <InventoryCard />
      </div>
    </div>
  );
}

export default Inventory;
