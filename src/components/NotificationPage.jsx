import React from 'react';

const appColors = {
  'Solo App': '#0052cc',
  'TXN Banking': '#1db954',
  // Add more apps/colors as needed
};

// Sample notification data
const sampleNotifications = [
  {
    id: 1,
    app: 'Solo App',
    title: 'Wallet Setup',
    description: 'Set up your wallet to enable all features.',
  },
  {
    id: 2,
    app: 'TXN Banking',
    title: 'Payment Received',
    description: 'You received LKR 10,000 from John.',
  },
  {
    id: 3,
    app: 'Solo App',
    title: 'Promo Alert',
    description: '10% off at Jet Wash Laundry!',
  },
  {
    id: 4,
    app: 'TXN Banking',
    title: 'Security Notice',
    description: 'Your password was changed successfully.',
  },
];

export default function NotificationPage({
  notifications = sampleNotifications,
  activeApp = 'Solo App',
  onBack,
}) {
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 24, position: 'relative' }}>
      {/* Elegant Back Button and Title Row */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <button
          onClick={onBack}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#fff',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 16,
            cursor: 'pointer',
            transition: 'box-shadow 0.2s',
          }}
          aria-label="Back"
          onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.16)'}
          onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'}
        >
          {/* Modern left arrow SVG */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 18L8.5 11L14.5 4" stroke="#222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 style={{ fontSize: 24, fontWeight: 700, flex: 1, textAlign: 'center', margin: 0 }}>Notifications</h2>
        {/* Spacer for symmetry */}
        <div style={{ width: 40, height: 40, marginLeft: 16, visibility: 'hidden' }} />
      </div>
      <div>
        {notifications.map((n) => {
          const isActive = n.app === activeApp;
          return (
            <div
              key={n.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                padding: '16px 0',
                borderBottom: '1px solid #f0f0f0',
                opacity: isActive ? 1 : 0.5,
                filter: isActive ? 'none' : 'grayscale(0.7)',
                background: isActive ? '#f8faff' : 'transparent',
              }}
            >
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: appColors[n.app] || '#888',
                  marginTop: 4,
                  flexShrink: 0,
                  display: 'inline-block',
                }}
              />
              <div>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{n.title}</div>
                <div style={{ fontSize: 14, color: '#444' }}>{n.description}</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{n.app}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 