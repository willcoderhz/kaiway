// src/pages/Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // 模拟支付操作，完成后跳转到成功页面
    navigate('/success');
  };

  return (
    <div className="phone-frame">
      <div className="checkout-container">
        <h1 className="title">订单确认</h1>

        <div className="section">
          <h2>航班信息</h2>
          <div className="info">
            <div>航班号: A123</div>
            <div>起飞时间: 08:00</div>
            <div>到达时间: 12:00</div>
          </div>
        </div>

        <div className="section">
          <h2>铁路信息</h2>
          <div className="info">
            <div>列车号: T101</div>
            <div>发车时间: 13:00</div>
            <div>到达时间: 16:00</div>
          </div>
        </div>

        <button className="pay-button" onClick={handlePayment}>
          确认并支付
        </button>
      </div>
    </div>
  );
};

export default Checkout;

