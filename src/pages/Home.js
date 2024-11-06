// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';

const Home = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

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
                <span className="icon">🛫</span>
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
                <span className="icon">🛬</span>
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
            <span className="exchange-icon">🔄</span>
          </div>

          <div className="divider"></div>
        
          <div className="container">
            <div className="left-section">
              <div className="form-section">
                <span className="icon">📅</span>
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
                <span className="icon">📅</span>
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
              <span className="icon">👤</span>
              <div className="detail-text">
                <span className="label">Passenger</span>
                <span className="value">1 passenger</span>
              </div>
            </div>
            <div className="class-details">
              <span className="icon">💺</span>
              <div className="detail-text">
                <span className="label">Class</span>
                <span className="value">Economy</span>
              </div>
            </div>
          </div>

          <Link to="/flights" className="search-button">Search</Link>
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
