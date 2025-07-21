import React, { useState, useEffect } from 'react';
import AppBar from './components/AppBar';
import SoloServiceGrid from './components/SoloServiceGrid';

const slides = [
  { color: '#FFB6C1', label: 'Welcome to SOLO' },
  { color: '#87CEFA', label: 'Pay Bills Instantly' },
  { color: '#90EE90', label: 'Exclusive Rewards' },
  { color: '#FFD700', label: 'Invite Friends & Earn' },
];

const soloProfile = {
  name: 'Thilina',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  actions: [
    { label: 'Edit Profile', icon: '✏️', onClick: () => alert('Edit Profile') },
    { label: 'Upgrade to SOLO Max', icon: '⬆️', onClick: () => alert('Upgrade to SOLO Max') },
  ],
};

const soloMenu = [
  { label: 'Home', icon: '🏠', onClick: () => alert('Home') },
  { label: 'Card & Icons', icon: '💳', onClick: () => alert('Card & Icons') },
  { label: 'Transactions', icon: '📄', onClick: () => alert('Transactions') },
  { label: 'Gifting', icon: '🎁', onClick: () => alert('Gifting') },
  { label: 'Deals & Coupons', icon: '🏷️', onClick: () => alert('Deals & Coupons') },
  { label: 'SOLO Direct Pay', icon: '📦', onClick: () => alert('SOLO Direct Pay') },
  { label: 'Billers', icon: '🧾', onClick: () => alert('Billers') },
  { label: 'Invite Friends', icon: '👥', onClick: () => alert('Invite Friends') },
  { label: 'Reach Us', icon: '📞', onClick: () => alert('Reach Us') },
];

const soloLogout = { label: 'Logout', icon: '🚪', onClick: () => alert('Logout') };
const soloVersion = 'Version 2.0.0';

const SoloHome = ({ onShowNotifications }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AppBar
        title="SOLO"
        color="#0052cc"
        bannerColor="#1565c0"
        menuItems={soloMenu}
        profile={soloProfile}
        logout={soloLogout}
        version={soloVersion}
        onShowNotifications={onShowNotifications}
      />
      {/* Custom Color Slider */}
      <div style={{ width: '100%', maxWidth: 400, margin: '0 auto', marginTop: 8, position: 'relative', padding: '0 16px' }}>
        <div style={{
          width: '100%',
          borderRadius: '16px',
          height: '140px',
          boxShadow: '0 4px 24px rgba(0,82,204,0.10)',
          background: `linear-gradient(135deg, #0052cc 0%, #1565c0 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: 24,
          color: '#fff',
          transition: 'background 0.3s'
        }}>
          {slides[currentSlide].label}
        </div>
        {/* Indicator Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
          {slides.map((_, idx) => (
            <span key={idx} style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: idx === currentSlide ? '#0052cc' : '#e0e0e0',
              margin: '0 4px',
              display: 'inline-block',
              transition: 'background 0.3s'
            }} />
          ))}
        </div>
      </div>
      <SoloServiceGrid />
    </>
  );
};

export default SoloHome; 