// src/pages/Success.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Comfirm.css';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Confirm = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail'); // Replace '/target-path' with your desired route
  };

  return (
    
    <div className="phone-frame">
      <div className="header-image-container3">
        <img src={`${process.env.PUBLIC_URL}/asset/picture5.png`} alt="Airplane wing" className="header-image header2" />    
    </div>
    <div className="success-container">
      <img src={`${process.env.PUBLIC_URL}/asset/success-icon.png`} alt="Success Icon" className="success-icons" />
      <h1 className="success-message">Successful payment!</h1>
      <p className="success-subtext">Discover more trips or check your ticket details</p>
      <div className="button-container">
        <button className="button go-home">Go to home</button>
        <button className="button view-details" onClick={handleClick}>View ticket details</button>
      </div>
    </div>
    </div>
  );
};

export default Confirm;
