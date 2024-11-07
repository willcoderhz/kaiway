// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faUser, faPlane } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureCities, setDepartureCities] = useState([]);
  const [arrivalCities, setArrivalCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch departure cities
    fetch('http://54.169.209.230:8080/api/cities/departure')
      .then(response => response.json())
      .then(data => setDepartureCities(data))
      .catch(err => console.error('Error fetching departure cities:', err));

    // Fetch arrival cities
    fetch('http://54.169.209.230:8080/api/cities/arrival')
      .then(response => response.json())
      .then(data => setArrivalCities(data))
      .catch(err => console.error('Error fetching arrival cities:', err));
  }, []);

  const handleSearch = () => {
    const departureExists = departureCities.includes(departure);
    const destinationExists = arrivalCities.includes(destination);

    if (departureExists && destinationExists) {
      // Navigate to the next page if cities match
      navigate('/flights');
    } else {
      // Show an alert if cities do not match
      alert('Flight not found. Please check the departure and destination cities.');
    }
  };

  return (
    <div className="phone-frame">
      <div className="header-image-container">
        <img src={`${process.env.PUBLIC_URL}/asset/test.jpg`} alt="Airplane wing" className="header-image" />
        <img src={`${process.env.PUBLIC_URL}/asset/overlay.png`} alt="Overlay" className="header-overlay-image" />
      </div>

      <div className="home-container">
        <div className="search-form">
          <div className="container">
            <div className="form-sections">
              <div className="form-section">
              <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
                <div className="form-details">
                  <label>Departure</label>
                  <input
                    type="text"
                    placeholder="Enter departure city"
                    className="input-field"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="form-section">
              <FontAwesomeIcon icon={faPlaneArrival} className="icon"/>
                <div className="form-details">
                  <label>Destination</label>
                  <input
                    type="text"
                    placeholder="Enter destination city"
                    className="input-field"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="exchange-container">
            <FontAwesomeIcon icon={faArrowsUpDown} className="exchange-icons" />
          </div>
          </div>

          <div className="divider"></div>
        
          <div className="container">
            <div className="left-section">
              <div className="form-section">
              <FontAwesomeIcon icon={faCalendarDay} className="icon calendar"/>
                <div className="form-details">
                  <label>Departure date</label>
                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    placeholderText="Select departure date"
                    dateFormat="MM/dd/yyyy"
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="form-section">
              <FontAwesomeIcon icon={faCalendarWeek} className="icon calendar"/>
                <div className="form-details">
                  <label>Return date</label>
                  <DatePicker
                    selected={returnDate}
                    onChange={(date) => setReturnDate(date)}
                    placeholderText="Select return date"
                    dateFormat="MM/dd/yyyy"
                    className="input-field"
                  />
                </div>
              </div>
            </div>

            <div className="toggle-container">
              <span>Return</span>
              <label className="toggle-switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="form-section passengers-class">
            <div className="passenger-details">
            <FontAwesomeIcon icon={faUser} size="2x" className="icon figure" /> {/* 人像图标 */}
              <div className="detail-text">
                <span className="label">Passenger</span>
                <span className="value">1 passenger</span>
              </div>
            </div>
            <div className="class-details">
            <FontAwesomeIcon icon={faPlane} size="2x" className="icon" />
              <div className="detail-text">
                <span className="label">Class</span>
                <span className="value">Economy</span>
              </div>
            </div>
          </div>

          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        <div className="recent-searches">
          <h3 className="recent-searches-title">Recent searches</h3>
          <div className="recent-search-item">
            <span className="route">Beijing - Sydney</span>
            <div className="dates">
              <span>Departure: 7/25/2024 - Return: 12/12/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
