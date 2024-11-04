// src/pages/Flights.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Flights.css';

const Flights = () => (
  <div className="phone-frame">
    <div className="flights-container">
      <h1 className="title">选择航班</h1>

      <div className="flight-option">
        <div className="flight-info">
          <div>航班 A123</div>
          <div>起飞时间: 08:00</div>
          <div>到达时间: 12:00</div>
        </div>
        <Link to="/checkout" className="select-button">选择</Link>
      </div>

      <div className="flight-option">
        <div className="flight-info">
          <div>航班 B456</div>
          <div>起飞时间: 10:00</div>
          <div>到达时间: 14:00</div>
        </div>
        <Link to="/checkout" className="select-button">选择</Link>
      </div>

      <div className="flight-option">
        <div className="flight-info">
          <div>航班 C789</div>
          <div>起飞时间: 15:00</div>
          <div>到达时间: 19:00</div>
        </div>
        <Link to="/checkout" className="select-button">选择</Link>
      </div>
      
    </div>
  </div>
);

export default Flights;
