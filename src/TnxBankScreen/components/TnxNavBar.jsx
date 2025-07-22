import React from 'react';
import home from '../../assets/navbar_images/home_g.png';
import wallet from '../../assets/navbar_images/wallet_g.png';
import history from '../../assets/navbar_images/history_g.png';
import switch_g from '../../assets/navbar_images/switch_g.png';

export default function TnxNavBar({ onAppSwitcher }) {
  const navItems = [
    { icon: home, label: 'Dashboard' },
    { icon: wallet, label: 'Wallet' },
    { icon: history, label: 'History' },
    { icon: switch_g, label: 'App Switcher', isAppSwitcher: true },
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
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, fontSize: 22, color: '#1db954' }}
          onClick={item.isAppSwitcher ? onAppSwitcher : undefined}
        >
          <img src={item.icon} alt={item.label} style={{ width: 28, height: 28, objectFit: 'contain' }} />
        </div>
      ))}
    </nav>
  );
} 