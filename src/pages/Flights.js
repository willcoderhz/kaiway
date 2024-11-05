// src/pages/Flights.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Flights.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Flights = () => {

 

  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleFlightClick = (flight) => {
    setSelectedFlight(flight);
  };

  const closeModal = () => {
    setSelectedFlight(null);
  };

  
  return (
  

  <div className="phone-frame">
    <div className="header-image-container">
        <img src={`${process.env.PUBLIC_URL}/asset/picture2.png`} alt="Airplane wing" className="header-image" />    
    </div>
    <div className="header-image-container2">
        <img src={`${process.env.PUBLIC_URL}/asset/picture3.png`} alt="Airplane wing" className="header-image" />    
    </div>
    <div className="flights-container">
      <h1 className="listname">请选择航班</h1>

      <div className="flight-option" onClick={() => handleFlightClick('Flight 1 Details')}>
      <div className="flight-info">
        <div className="flight-summary">
          <div className="departure">
            <span className="departure-time">08:45</span>
            <span className="airport">SGN</span>
          </div>
          <div className="flight-duration">
            <span className="duration">12h22m</span>
            <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image" /> 
            <span className="stops">1 stop</span>
          </div>
          <div className="arrival">
            <span className="arrival-time">21:07</span>
            <span className="destination">Chao Shan</span>
          </div>
          <div className="price">
            <span>AUD $1452.74</span>
          </div>
        </div>
        <div className="flight-details">
          <div className="airline-info">
            <div className="airline-details">
              <img src={`${process.env.PUBLIC_URL}/asset/logo1.png`} alt="Cathay Pacific Logo" className="airline-logo" />
              <span>Cathay Pacific - Economy</span>
            </div>
            <button className="dropdown-button">▼</button>
          </div>
        </div>

        <div className="flight-details">
        <div className="trainss-info">
          
            <img src={`${process.env.PUBLIC_URL}/asset/logo2.png`} className="train-logo" />
            <span>MTR - Second Class</span>
            
        </div>
        </div>
      </div>

        
      </div>

      {/* Flight Option 2 */}
      <div className="flight-option">
      <div className="flight-info">
        <div className="flight-summary">
          <div className="departure">
            <span className="departure-time">08:45</span>
            <span className="airport">SGN</span>
          </div>
          <div className="flight-duration">
            <span className="duration">12h22m</span>
            <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image" /> 
            <span className="stops">1 stop</span>
          </div>
          <div className="arrival">
            <span className="arrival-time">21:07</span>
            <span className="destination">Chao Shan</span>
          </div>
          <div className="price">
            <span>AUD $1452.74</span>
          </div>
        </div>
        <div className="flight-details">
          <div className="airline-info">
            <div className="airline-details">
              <img src={`${process.env.PUBLIC_URL}/asset/logo1.png`} alt="Cathay Pacific Logo" className="airline-logo" />
              <span>Cathay Pacific - Economy</span>
            </div>
            <button className="dropdown-button">▼</button>
          </div>
        </div>

        <div className="flight-details">
        <div className="trainss-info">
          
            <img src={`${process.env.PUBLIC_URL}/asset/logo2.png`} className="train-logo" />
            <span>MTR - Second Class</span>
            
        </div>
        </div>
      </div>

        
      </div>

      {/* Flight Option 3 */}
      <div className="flight-option">
      <div className="flight-info">
        <div className="flight-summary">
          <div className="departure">
            <span className="departure-time">08:45</span>
            <span className="airport">SGN</span>
          </div>
          <div className="flight-duration">
            <span className="duration">12h22m</span>
            <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image" /> 
            <span className="stops">1 stop</span>
          </div>
          <div className="arrival">
            <span className="arrival-time">21:07</span>
            <span className="destination">Chao Shan</span>
          </div>
          <div className="price">
            <span>AUD $1452.74</span>
          </div>
        </div>
        <div className="flight-details">
          <div className="airline-info">
            <div className="airline-details">
              <img src={`${process.env.PUBLIC_URL}/asset/logo1.png`} alt="Cathay Pacific Logo" className="airline-logo" />
              <span>Cathay Pacific - Economy</span>
            </div>
            <button className="dropdown-button">▼</button>
          </div>
        </div>

        <div className="flight-details">
        <div className="trainss-info">
          
            <img src={`${process.env.PUBLIC_URL}/asset/logo2.png`} className="train-logo" />
            <span>MTR - Second Class</span>
            
        </div>
        </div>
      </div>

        
      </div>
      
      
      <h1 className="listname2">搜索更多</h1>
      {selectedFlight && <FlightModal onClose={closeModal} />}
    </div>
  </div>
);
}

const FlightModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout'); // Replace '/target-path' with your desired route
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='first_line'>

        <h2 className='titles'>Trip details</h2>
        <button onClick={onClose} className="close-button">×</button>
        
        </div>
        <div className="divider-line"></div>

        <div className="tab-container">
        <div className="tab1 active">Trip info</div>
        <div className="tab2">Refund & Reschedule</div>
      </div>

        <div className="trip-info">
          <div className='trip_name'>Sydney - ChaoShan</div>
          <div className='trip_details'>
          <div className="flight-segment">
            <div className='one_flight'>
            <img src={`${process.env.PUBLIC_URL}/asset/logo1.png`} alt="Cathay Pacific Logo" className="modal-logo" />
            <div className="flight-details">
            <span className='infof1'>Cathay Pacific - Economy</span>
            <span className='infof2'>CX-110</span>
            </div>
            </div>
            
            <div className="divider-line"></div>
            <div className='trip_detailss'>
            <div className='from'>
            <p className='s11 s13'>SYD</p>
            <span className='s11'>08:45</span>
            <p className='s11'>Wed 12/11/2024</p>
            </div>

            <div className='from'>
            <p  className='s11 s12'> &nbsp;&nbsp;&nbsp;   9h 25m</p>
            <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image2 s11" /> 
            </div>

            <div className='from'>
            <p className='s11 s13'>HKD</p>
            <span className='s11'>15:10</span>
            <p className='s11'>Wed 12/11/2024</p>
            </div >
            </div>
            
          </div>

          <div className="info-box">
            <span className="info-icon">ℹ️</span>
            <span className="info-text">
              You will head to Hong Kong West Kowloon to take the train ( 3h 34min )
            </span>
          </div>

          <div className="flight-segment">
           
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

          <div className="details-box">
            <span className="left-content label2">1 adult</span>
            <div className="right-content">
              <p>Flight: AUD $1408.11</p>
              <p>Train: AUD $44.63</p>
            </div>
            
          </div>

          <div className="summary">
            <div className="summary-row">
              <span className="label2">Tax</span>
              <span className="value">Included</span>
            </div>
            <div className="summary-row">
              <span className="label2">Luggage</span>
              <span className="value">0</span>
            </div>
            <div className="summary-row">
              <span className="label2">Priority check in</span>
              <span className="value">0</span>
            </div>
            <div className="summary-row total-row">
              <span className="label2 total-label">Total</span>
              <span className=" total-value s14">AUD $1452.74</span>
            </div>
          </div>


          <button className="select-button2" onClick={handleClick}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flights;
