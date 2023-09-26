import React from "react";
import './ContactCard.css'


function ContactCard () {
    return (
        <div className="footer_contact"> 
     
            <input className="contact_name" placeholder="Name"/>
            <input className="contact_last" placeholder="Last Name"/>
            <input className="contact_phone" placeholder="Phone Number" />
            <input className="contact_email" placeholder="Email" />
            <input className="contact_questions" placeholder="Comments" />
            
        
                  <button className="footer_send">Send</button>
                  </div>
    )
};


export default ContactCard;