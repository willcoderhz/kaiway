// src/pages/Success.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // 清除定时器
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="phone-frame">
      <div className="success-container">
        <h1 className="success-message">支付成功！</h1>
        <p className="success-subtext">感谢您的预订，祝您旅途愉快！</p>
        <p className="redirect-message">5秒后将自动返回首页...</p>
      </div>
    </div>
  );
};

export default Success;
