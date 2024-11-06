// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faUser, faPlane } from '@fortawesome/free-solid-svg-icons';


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
