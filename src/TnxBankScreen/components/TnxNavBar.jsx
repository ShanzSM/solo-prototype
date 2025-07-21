import React from 'react';
import home from '../../assets/home.png';
import windows from '../../assets/windows.png';

export default function TnxNavBar({ onAppSwitcher }) {
  const navItems = [
    { icon: home, label: 'Dashboard' },
    { icon: '��', label: 'Transfer', isEmoji: true },
    { icon: '🧾', label: 'Pay Bill', isEmoji: true },
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
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, fontSize: 22, color: '#1db954' }}
          onClick={item.isAppSwitcher ? onAppSwitcher : undefined}
        >
          {item.isEmoji ? (
            <span>{item.icon}</span>
          ) : (
            <img src={item.icon} alt={item.label} style={{ width: 28, height: 28, objectFit: 'contain' }} />
          )}
          <span style={{ fontSize: 12, color: '#222', marginTop: 2 }}>{item.label}</span>
        </div>
      ))}
    </nav>
  );
} 