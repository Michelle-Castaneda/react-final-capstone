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
      <div className="nav_item">
      <span className='header_home'>Home</span>
      </div>
    </div>
    </Link>


    <Link to="/inventory"style={{textDecoration: "none"}} >
    <div className="nav_item">
      <span className='header_inventory'>Inventory</span>
    </div>
    </Link>

    <div className="nav_item"style={{textDecoration: "none"}}>
        <span className='header_financing'>Financing</span>
    </div>
  
<Link to="/appointment" style={{textDecoration: "none"}}>
    <div className="nav_item">
    <span className='header_appointment'>Request Appointment</span>
    </div>
    </Link>

   

    <div className="nav_item">
      <span className="specials">Specials</span>
      <DiscountIcon />
    </div>


    <div className="nav_item">
      <span className='header_goferinfo'>
1703 N Tower rd , Alamo, TX, United States, Texas | (956) 533-8752 </span>
    </div>

    <Link to="/authentication" style={{textDecoration: "none"}}>
    <div className="nav_item">
    <span className='header_login'>Login</span>
    </div>
    </Link>
  
    </div>

    )
}

export default Header;