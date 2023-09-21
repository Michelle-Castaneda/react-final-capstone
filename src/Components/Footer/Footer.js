import React from "react";
import "./Footer.css";
import ContactCard from "../ContactCard/ContactCard"

function Footer () {
    return (
        <div className="footer_container">
            <div className="footerGofer">
<div className="footer_phone"></div>
            y.gofer@gofermotors.com
            sales@gofermotors.com
        <div className="footer_address"> 1703 N Tower rd , Alamo, TX, United States, Texas </div>
           
            </div>
        <div className="footer_hours"></div>
        Monday - Friday
        9:00am - 6:00pm
        Saturday
        9:00am - 3:00pm 
        Sunday 
        Closed
        <div className="footer_contact"> 
        <h2 className="footer_question">Ask a Question</h2>
          <ContactCard />
          <button className="footer_send">Send</button>
          </div>
     
        </div>

    )
}

export default Footer;