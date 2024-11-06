// src/pages/Success.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Success.css';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/confirm');
    }, 4000);

    // 清除定时器
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    
    <div className="phone-frame">
      <div className="header-image-container3">
        <img src={`${process.env.PUBLIC_URL}/asset/picture5.png`} alt="Airplane wing" className="header-image header2" />    
    </div>
      <div className="success-container">
      <FontAwesomeIcon icon={faSpinner} spin className="loading-icon" />
      <h1 className="success-subtext">Our system is processing your order</h1>
        <p className="success-subtext">Please wait a moment.</p>
      </div>
    </div>
  );
};

export default Success;
