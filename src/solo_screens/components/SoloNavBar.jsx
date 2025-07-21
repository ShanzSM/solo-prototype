import React from 'react';
import home from '../../assets/home.png';
import wallet from '../../assets/wallet.png';
import qr from '../../assets/qr.png';
import history from '../../assets/history.png';
import windows from '../../assets/windows.png';

export default function SoloNavBar({ onAppSwitcher }) {
  const navItems = [
    { icon: home, label: 'Home' },
    { icon: wallet, label: 'Wallet' },
    { icon: qr, label: 'QR', isQR: true },
    { icon: history, label: 'History' },
    { icon: windows, label: 'App Switcher', isAppSwitcher: true },
  ];
  return (
    <nav style={{
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#fff',
      borderTop: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 64,
      zIndex: 100
    }}>
      {navItems.map((item, idx) => (
        <div
          key={item.label}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}
          onClick={item.isAppSwitcher ? onAppSwitcher : undefined}
        >
          {item.isQR ? (
            <div style={{
              background: '#FFD600',
              borderRadius: '50%',
              width: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -24,
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
            }}>
              <img src={item.icon} alt={item.label} style={{ width: 32, height: 32, objectFit: 'contain' }} />
            </div>
          ) : (
            <img src={item.icon} alt={item.label} style={{ width: 28, height: 28, objectFit: 'contain' }} />
          )}
        </div>
      ))}
    </nav>
  );
} 