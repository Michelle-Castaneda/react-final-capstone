import React from "react";
import "./Footer.css";
import ContactCard from "../ContactCard/ContactCard";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_phone_email">
        <div className="footer_phone"> (956) 258-5021</div>
        <div className="footer_emails">
            <p className="email1">
          y.gofer@gofermotors.com </p>
          <div className="email2">
          sales@gofermotors.com
          </div>
        </div>
      </div>

      <div className="footer_address">
        {" "}
        1703 N Tower rd , Alamo, TX, United States, Texas{" "}
      </div>

      <div className="footer_hours_days">
          <p className="footer_days">Monday - Friday</p>
        <p className="footer_hours">9:00am - 6:00pm</p>
          <p className="footer_days" >Saturday</p>
        <p className="footer_hours">9:00am - 3:00pm</p>
          <p className="footer_days">Sunday</p>
        <p className="footer_hours">Closed</p>
      </div>

      <p className="privacy_rights">
        © 2023 Gofer Motors LLC. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
