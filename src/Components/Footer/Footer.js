import React from "react";
import "./Footer.css";
import FooterCard from "../FooterCard/FooterCard"

function Footer () {
    return (
        <div className="footer_container">
            <div className="footerGofer">
<div className="footer_phone"></div>
            y.gofer@gofermotors.com
            sales@gofermotors.com
            (956) 258-5021
        <div className="footer_address"> 1703 N Tower rd , Alamo, TX, United States, Texas </div>
           
            </div>
        <div className="footer_hours"></div>
        <p className="hours"> Monday - Friday
        9:00am - 6:00pm
        Saturday
        9:00am - 3:00pm 
        Sunday 
        Closed
        </p>
      
          <FooterCard />
          <h2 className="footer_question">Ask a Question</h2>
          </div>


    )
}

export default Footer;