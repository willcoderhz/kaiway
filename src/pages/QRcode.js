// src/pages/Success.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './QRcode.css';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const QRcode = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/qrcode'); // Replace '/target-path' with your desired route
  };

  const goback=()=>{
    navigate("/detail")
  }
  const items = [
    "Price details",
    "Recommend Restaurant and shop",
    "Recent check-in locations"
  ];

  return (
    
    <div className="phone-frame2">
      <div className="header-image-container3">
        <img src={`${process.env.PUBLIC_URL}/asset/picture6.png`} alt="Airplane wing" className="header-image header2" />    
    </div>
    <div className="button-container">
        <button className="floating-button" onClick={goback} aria-label="Floating button">
          "Click Me"
        </button>
      </div>
    <div className="trip-info">
          
          <div className='trip_name trip2'>QR code</div>
          <div className='trip_details'>
          
          <div className="flight-segment">
            <div className=' flight-segment4'>
          <img src={`${process.env.PUBLIC_URL}/asset/qrcode.png`} alt="Cathay Pacific Logo" className="qrcode" />
          </div>
            <div className='one_flight'>
                
            <img src={`${process.env.PUBLIC_URL}/asset/logo2.png`} alt="Cathay Pacific Logo" className="modal-logo" />
            <div className="flight-details">
            <span className='infof1'>MTR - Second Class</span>
            <span className='infof2'>G-3008</span>
            </div>
            </div>
            
            <div className="divider-line"></div>
            <div className='trip_detailss'>
            <div className='from'>
            <p className='s11 s13'>HK WestKowloon</p>
            <span className='s11'>18:44</span>
            <p className='s11'>Wed 12/11/2024</p>
            </div>

            <div className='from'>
            <p  className='s11 s12'> &nbsp;&nbsp;&nbsp;   2h 23m</p>
            <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image2 s11" /> 
            </div>

            <div className='from'>
            <p className='s11 s13'>ChaoShan</p>
            <span className='s11'>21:07</span>
            <p className='s11'>Wed 12/11/2024</p>
            </div >
            </div>

           
          </div>
          </div>

          <div className="accordion-list">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <span className="item-text">{item}</span>
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
      ))}
    </div>
        
    </div>

    
    </div>
  );
};

export default QRcode;
