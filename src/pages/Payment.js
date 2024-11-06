// src/pages/Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faAlipay, faWeixin, faApplePay } from '@fortawesome/free-brands-svg-icons';

const Payment = () => {

 

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
    navigate('/checkout')
  }
  
  return (
  

  <div className="phone-frame">
    <div className="header-image-container3">
        <img src={`${process.env.PUBLIC_URL}/asset/picture5.png`} alt="Airplane wing" className="header-image header2" />    
    </div>
    <div className="button-container">
        <button className="floating-button" onClick={goback} aria-label="Floating button">
          "Click Me"
        </button>
      </div>
    <div className="flights-container">
        <div className='topselect'>
            <h4>Please Select Your Payment Method</h4>
        </div>
     
    <div className="service-item" onClick={handleClick}>
        <FontAwesomeIcon size="lg" icon={faCreditCard} /> {/* 信用卡图标 */}
        <span className="service-text">Credit Card</span>
        <span className="arrow">➔</span>
      </div>
      <div className="service-item" onClick={handleClick}>
        <FontAwesomeIcon size="lg" icon={faAlipay}  /> {/* 支付宝图标 */}
        <span className="service-text">Alipay</span>
        <span className="arrow">➔</span>
      </div>
      <div className="service-item" onClick={handleClick}>
        <FontAwesomeIcon  size="lg" icon={faWeixin} /> {/* 微信支付图标 */}
        <span className="service-text">Wechat Pay</span>
        <span className="arrow">➔</span>
      </div>
      <div className="service-item" onClick={handleClick}>
        <FontAwesomeIcon  size="2x" icon={faApplePay} /> {/* Apple Pay 图标 */}
        <span className="service-text">Apple Pay</span>
        <span className="arrow">➔</span>
      </div>

    
      
    </div>
  </div>
);
}




export default Payment;
