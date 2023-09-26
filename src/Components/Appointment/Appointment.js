import React from "react";
import "./Appointment.css"
import AppointmentCard from "./AppointmentCard"

function Appointment () {
    return (
       <div>
        <h2 className="footer_question">Request your Appointment</h2>
        <p>A sales agent will get in touch as soon as possible</p>
        <p>You can also send an email with your inquiries to: sales@gofermotors.com</p>
        <AppointmentCard />
       </div>
    )
}

export default Appointment;