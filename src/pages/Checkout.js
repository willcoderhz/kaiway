// src/pages/Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { useState } from 'react';

const Checkout = () => {

 

  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleFlightClick = (flight) => {
    setSelectedFlight(flight);
  };

  const closeModal = () => {
    setSelectedFlight(null);
  };

  const services = [
    'Recommend seats',
    'Auto Check-in',
    'Pre-order in-flight meals',
    'Transportation advice',
    'Buy airport merchandise for pick up',
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Success'); // Replace '/target-path' with your desired route
  };

  const goback=()=>{
    navigate('/flights')
  }
  
  return (
  

  <div className="phone-frame">
    <div className="header-image-container3">
        <img src={`${process.env.PUBLIC_URL}/asset/picture4.png`} alt="Airplane wing" className="header-image header2" />    
    </div>
    <div className="button-container">
        <button className="floating-button" onClick={goback} aria-label="Floating button">
          "Click Me"
        </button>
      </div>
    <div className="flights-container">
     
    {services.map((service, index) => (
        <div key={index} className="service-item">
          <span className="service-text">{service}</span>
          <span className="arrow">➔</span>
        </div>
      ))}
      <button className="select-button3" onClick={handleClick} >
            Continue
      </button>
      
    </div>
  </div>
);
}




export default Checkout;

