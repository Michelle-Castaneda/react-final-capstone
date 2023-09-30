import React, { useState, useEffect } from "react";
import axios from "axios";
import './ContactCard.css'

function ContactCard () {
    const [carListings, setCarListings] = useState([]);
    const [selectedCar, setSelectedCar] = useState('');
    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        comments: ''
    });

    useEffect(() => {
        axios.get("http://localhost:4000/car_listing")        
            .then(response => setCarListings(response.data)) 
            .catch(error => {
                console.error("Error get request for car listings:", error.response.data);
            });
    }, []);

    const handleInputChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = () => {
        const appointmentData = {
            Name: formData.name,
            Last_Name: formData.lastName,
            Phone: formData.phone,
            Email: formData.email,
            Comments: formData.comments,
            car_id: selectedCar
        };
        console.log(appointmentData);

        
        
        axios.post("http://localhost:4000/contact_information", appointmentData)
            .then(response => {
                console.log("Appointment data sent:", response.data);

                setFormData({
                    name: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    comments: ''
                });
                setSelectedCar('');
                
                setSuccessMessage("Your questions have been sent");
            })
            .catch(error => {
                console.error("Error post request to appointment data:", error.response.data);
            });
    };

    return (
        <div className="contactCard_container"> 
        <h2 className="footer_question">Ask a Question</h2>
            <div className="input-group">
            <input 
                className="contact_name" 
                placeholder="Name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
            />
            <input 
                className="contact_last" 
                placeholder="Last Name" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleInputChange}
            />
             </div>

<div className="secondInput">
            <input 
                className="contact_phone" 
                placeholder="Phone Number" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
            />
            <input 
                className="contact_email" 
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
           

            <input 
                className="contact_questions" 
                placeholder="I'm interested in..."
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
            />
            </div>
            <select 
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
            >
                <option value="">Select a car</option>
                {carListings.map(car => (
                     <option key={car.car_id} value={car.car_id}>
                     {car.make} {car.model} ({car.year})</option>
                ))}
            </select>
            {
    successMessage && <p className="contact_successMessage">{successMessage}</p>
}

            <button className="contact_send" onClick={handleSubmit}>Send</button>
        </div>
    )
};

export default ContactCard;
