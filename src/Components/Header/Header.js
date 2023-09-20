import React from "react";
import "./Header.css"
import logo from './gofer_logo.jpeg'
import DiscountIcon from '@mui/icons-material/Discount';
import { Link } from "react-router-dom";


function Header () {
    return (
        <div className="header">
          <Link to ="/" style={{textDecoration: "none"}}> 
             <div className="header_logo">
      <img src={logo} alt='gofer company logo'/>
    </div>
    </Link>
    <div className="header_nav">

    <Link to="/inventory" >
    <div className="nav_item">
      <span className='header_inventory'>Inventory</span>
    </div>
    </Link>

    <div className="nav_item">
        <span className='header_financing'>Financing</span>
    </div>
  
    
    <div className="nav_item">
    <span className='header_appointment'>Request Appointment</span>
    </div>


    <div className="nav_item">
      <span className="specials">Specials</span>
      <DiscountIcon />
    </div>


    <div className="nav_item">
      <span className='header_goferinfo'>
1703 N Tower rd , Alamo, TX, United States, Texas | (956) 533-8752 </span>
    </div>

  
    </div>


        </div>
    )
}

export default Header;