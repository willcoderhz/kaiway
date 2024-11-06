// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Confirm from './pages/Confirm';
import QRcode from "./pages/QRcode"
import Detail from "./pages/Detail"
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/qrcode" element={<QRcode />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
