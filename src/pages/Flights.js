// src/pages/Flights.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Flights.css';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Flights = () => {
  const navigate = useNavigate();
 
  const goback=()=>{
    navigate("/")
  }
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleFlightClick = (flight) => {
    setSelectedFlight(flight);
  };

  const closeModal = () => {
    setSelectedFlight(null);
  };

  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    axios.get('https://54.169.209.230/api/search/connected/Sydney%2C%20Australia/Chaoshan%2C%20China/2024-11-10')
      .then(response => {
        setFlightData(response.data[0]); // Assuming we only need the first flight option
      })
      .catch(error => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  
  return (
  

  <div className="phone-frame">
    <div className="header-image-container">
        <img src={`${process.env.PUBLIC_URL}/asset/picture2.png`} alt="Airplane wing" className="header-image" />    
    </div>
    
      <div className="button-container">
        <button className="floating-button" onClick={goback} aria-label="Floating button">
          "Click Me"
        </button>
      </div>
    <div className="header-image-container2">
        <img src={`${process.env.PUBLIC_URL}/asset/picture3.png`} alt="Airplane wing" className="header-image" />    
    </div>
    <div className="flights-container">
      <h1 className="listname">Please Select Your Flight</h1>

      <div className="flight-option" onClick={() => handleFlightClick('Flight 1 Details')}>
      {flightData ? (
        <div className="flight-info">
          <div className="flight-summary">
            <div className="departure">
              <span className="departure-time">{flightData.firstLeg.departureTime.slice(0, 5)}</span>
              <span className="airport">{flightData.firstLeg.departureCode}</span>
            </div>
            <div className="flight-duration">
              <span className="duration">{flightData.totalTime}</span>
              <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image" />
              <span className="stops">{flightData.stop} stop</span>
            </div>
            <div className="arrival">
              <span className="arrival-time">{flightData.secondLeg.arrivalTime.slice(0, 5)}</span>
              <span className="destination">{flightData.secondLeg.arrivalCity}</span>
            </div>
            <div className="price">
              <span>AUD ${flightData.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="flight-details">
            <div className="airline-info">
              <div className="airline-details">
                <img src={`${process.env.PUBLIC_URL}/asset/logo1.png`} alt={`${flightData.firstLeg.carrierName} Logo`} className="airline-logo" />
                <span>{flightData.firstLeg.carrierName} - {flightData.firstLeg.travelClass}</span>
              </div>
              <button className="dropdown-button">▼</button>
            </div>
          </div>

          <div className="flight-details">
            <div className="trainss-info">
              <img src={`${process.env.PUBLIC_URL}/asset/logo2.png`} className="train-logo" />
              <span>{flightData.secondLeg.carrierName} - {flightData.secondLeg.travelClass}</span>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading flight data...</p>
      )}
    </div>

      {/* Flight Option 2 */}
      <div className="flight-option" >
      <div className="flight-info">
        <div className="flight-summary">
          <div className="departure">
            <span className="departure-time">09:45</span>
            <span className="airport">SYD</span>
          </div>
          <div className="flight-duration">
            <span className="duration">11:30</span>
            <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image" /> 
            <span className="stops">1 stop</span>
          </div>
          <div className="arrival">
            <span className="arrival-time">21:15</span>
            <span className="destination">Chao Shan, China</span>
          </div>
          <div className="price">
            <span>AUD $4151.34</span>
          </div>
        </div>
        <div className="flight-details" >
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
      <div className="flight-option" >
      <div className="flight-info">
        <div className="flight-summary">
          <div className="departure">
            <span className="departure-time">10:45</span>
            <span className="airport">SYD</span>
          </div>
          <div className="flight-duration">
            <span className="duration">13:05</span>
            <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image" /> 
            <span className="stops">1 stop</span>
          </div>
          <div className="arrival">
            <span className="arrival-time">23:50</span>
            <span className="destination">Chao Shan, China</span>
          </div>
          <div className="price">
            <span>AUD $2912.54</span>
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
      
      
      <h1 className="listname2">Search For More</h1>
      {selectedFlight && <FlightModal onClose={closeModal} />}
    </div>
  </div>
);
}

const FlightModal = ({ onClose }) => {
  const navigate = useNavigate();

  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    axios.get('https://54.169.209.230/api/search/connected/Sydney%2C%20Australia/Chaoshan%2C%20China/2024-11-10')
      .then(response => {
        setFlightData(response.data[0]); // Assuming we only need the first flight option
      })
      .catch(error => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

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

    {flightData && (
      <div className="trip-info">
        <div className='trip_name'>{`${flightData.firstLeg.departureCity} - ${flightData.secondLeg.arrivalCity}`}</div>
        <div className='trip_details'>
          <div className="flight-segment">
            <div className='one_flight'>
              <img src={`${process.env.PUBLIC_URL}/asset/logo1.png`} alt={`${flightData.firstLeg.carrierName} Logo`} className="modal-logo" />
              <div className="flight-details">
                <span className='infof1'>{`${flightData.firstLeg.carrierName} - ${flightData.firstLeg.travelClass}`}</span>
                <span className='infof2'>{`${flightData.firstLeg.carrierCode}-${flightData.firstLeg.transportNumber}`}</span>
              </div>
            </div>

            <div className="divider-line"></div>
            <div className='trip_detailss'>
              <div className='from'>
                <p className='s11 s13'>{flightData.firstLeg.departureCode}</p>
                <span className='s11'>{flightData.firstLeg.departureTime.slice(0, 5)}</span>
                <p className='s11'>{flightData.departureDate}</p>
              </div>

              <div className='from'>
                <p className='s11 s12'> &nbsp;&nbsp;&nbsp; {flightData.firstLeg.timeDuration.slice(0, 5)}</p>
                <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image2 s11" />
              </div>

              <div className='from'>
                <p className='s11 s13'>{flightData.firstLeg.arrivalCode}</p>
                <span className='s11'>{flightData.firstLeg.arrivalTime.slice(0, 5)}</span>
                <p className='s11'>{flightData.arrivalDate}</p>
              </div>
            </div>
          </div>

          <div className="info-box">
            <span className="info-icon">ℹ️</span>
            <span className="info-text">
              You will head to {flightData.secondLeg.departureCity} to take the train ( {flightData.layoverTime} )
            </span>
          </div>

          <div className="flight-segment">
            <div className='one_flight'>
              <img src={`${process.env.PUBLIC_URL}/asset/logo2.png`} alt={`${flightData.secondLeg.carrierName} Logo`} className="modal-logo" />
              <div className="flight-details">
                <span className='infof1'>{`${flightData.secondLeg.carrierName} - ${flightData.secondLeg.travelClass}`}</span>
                <span className='infof2'>{`${flightData.secondLeg.carrierCode}-${flightData.secondLeg.transportNumber}`}</span>
              </div>
            </div>

            <div className="divider-line"></div>
            <div className='trip_detailss'>
              <div className='from'>
                <p className='s11 s13'>{flightData.secondLeg.departureCity}</p>
                <span className='s11'>{flightData.secondLeg.departureTime.slice(0, 5)}</span>
                <p className='s11'>{flightData.departureDate}</p>
              </div>

              <div className='from'>
                <p className='s11 s12'> &nbsp;&nbsp;&nbsp; {flightData.secondLeg.timeDuration.slice(0, 5)}</p>
                <img src={`${process.env.PUBLIC_URL}/asset/arrow.png`} alt="Airplane wing" className="header-image2 s11" />
              </div>

              <div className='from'>
                <p className='s11 s13'>{flightData.secondLeg.arrivalCode}</p>
                <span className='s11'>{flightData.secondLeg.arrivalTime.slice(0, 5)}</span>
                <p className='s11'>{flightData.arrivalDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="details-box">
          <span className="left-content label2">1 adult</span>
          <div className="right-content">
            <p>Flight: AUD ${flightData.firstLeg.price.toFixed(2)}</p>
            <p>Train: AUD ${flightData.secondLeg.price.toFixed(2)}</p>
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
            <span className=" total-value s14">AUD ${flightData.totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button className="select-button2" onClick={handleClick}>
          Select
        </button>
      </div>
    )}
  </div>
    </div>

  );
};

export default Flights;
