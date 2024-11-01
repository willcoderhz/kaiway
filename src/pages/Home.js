// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="phone-frame">
    <div className="home-container">
      <h1 className="title">欢迎来到国泰航空订票系统</h1>
      <Link to="/flights" className="search-button">搜索航班</Link>
    </div>
  </div>
);

export default Home;
