// src/pages/Train.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Train.css';

const Train = () => (
  <div className="phone-frame">
    <div className="train-container">
      <h1 className="title">选择铁路</h1>

      <div className="train-option">
        <div className="train-info">
          <div>列车 T101</div>
          <div>发车时间: 13:00</div>
          <div>到达时间: 16:00</div>
        </div>
        <Link to="/checkout" className="select-button">选择</Link>
      </div>

      <div className="train-option">
        <div className="train-info">
          <div>列车 T202</div>
          <div>发车时间: 17:00</div>
          <div>到达时间: 20:00</div>
        </div>
        <Link to="/checkout" className="select-button">选择</Link>
      </div>

      <div className="train-option">
        <div className="train-info">
          <div>列车 T303</div>
          <div>发车时间: 18:30</div>
          <div>到达时间: 21:30</div>
        </div>
        <Link to="/checkout" className="select-button">选择</Link>
      </div>
    </div>
  </div>
);

export default Train;
