import React from 'react';

const TnxBalanceCard = () => (
  <div style={{
    background: 'linear-gradient(90deg, #1db954 60%, #0052cc 100%)',
    borderRadius: 18,
    color: '#fff',
    padding: '22px 20px',
    marginBottom: 24,
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }}>
    <span style={{ fontSize: 15, opacity: 0.9, marginBottom: 8 }}>Available Balance</span>
    <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>LKR 1,250,000.00</span>
    <span style={{ fontSize: 13, opacity: 0.8, marginTop: 6 }}>Account: 123-456-789</span>
  </div>
);

export default TnxBalanceCard; 