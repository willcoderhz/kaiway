// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Train from './pages/Train';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Confirm from './pages/Confirm';
import QRcode from "./pages/QRcode"
import Detail from "./pages/Detail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/train" element={<Train />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/qrcode" element={<QRcode />} />
      </Routes>
    </Router>
  );
}

export default App;
