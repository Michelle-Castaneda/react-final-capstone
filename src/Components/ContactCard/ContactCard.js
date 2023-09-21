import React from "react";
import './ContactCard.css'


function ContactCard () {
    return (
        <div className="contact_container">
            <input className="contact_name" placeholder="Name"/>
            <input className="contact_last" placeholder="Last Name"/>
            <input className="contact_phone" placeholder="Phone Number" />
            <input className="contact_email" placeholder="Email" />
            <input className="contact_questions" placeholder="Comments" />
        </div>
    )
};


export default ContactCard;