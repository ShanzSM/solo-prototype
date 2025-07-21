import React from 'react';

// Default sample data for TNX
const defaultProfile = {
  name: 'Thilina',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  actions: [
    { label: 'Edit Profile', icon: '✏️', onClick: () => alert('Edit Profile') },
    { label: 'Bank Settings', icon: '🏦', onClick: () => alert('Bank Settings') },
  ],
};
const defaultMenuItems = [
  { label: 'Home', icon: '🏠', onClick: () => alert('Home') },
  { label: 'Card & Icons', icon: '💳', onClick: () => alert('Card & Icons') },
  { label: 'Transactions', icon: '📄', onClick: () => alert('Transactions') },
  { label: 'Sample 01', icon: '⭐', onClick: () => alert('Sample 01') },
  { label: 'Sample 02', icon: '🔔', onClick: () => alert('Sample 02') },
  { label: 'Sample 03', icon: '📊', onClick: () => alert('Sample 03') },
  { label: 'Sample 04', icon: '⚙️', onClick: () => alert('Sample 04') },
];
const defaultLogout = { label: 'Logout', icon: '🚪', onClick: () => alert('Logout') };
const defaultVersion = 'Version 3.1.0';

export default function TNXSideMenu({ open, onClose, profile, menuItems, logout, version }) {
  const _profile = profile || defaultProfile;
  const _menuItems = (menuItems && menuItems.length > 0) ? menuItems : defaultMenuItems;
  const _logout = logout || defaultLogout;
  const _version = version || defaultVersion;
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          display: open ? 'block' : 'none',
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.18)',
          zIndex: 2000,
        }}
      />
      {/* Side Drawer */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: 290,
          maxWidth: '85vw',
          background: '#fff',
          boxShadow: '2px 0 16px rgba(0,0,0,0.10)',
          zIndex: 2001,
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.32s cubic-bezier(.4,0,.2,1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Profile Section */}
        <div style={{ padding: '28px 24px 18px 24px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <img src={_profile.avatar} alt="avatar" style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover', marginRight: 14 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 20 }}>{_profile.name}</div>
              <div style={{ display: 'flex', gap: 10, marginTop: 2 }}>
                {_profile.actions && _profile.actions.map((action, idx) => (
                  <span key={idx} style={{ fontSize: 13, color: '#888', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }} onClick={action.onClick}>
                    {action.icon} {action.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Menu Items */}
        <div style={{ padding: '18px 0 0 0', overflowY: 'auto' }}>
          {_menuItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => { item.onClick && item.onClick(); onClose(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: 16,
                color: '#0a2239',
                padding: '12px 28px',
                cursor: 'pointer',
                gap: 16,
                background: item.danger ? '#ffeaea' : 'transparent',
                borderLeft: item.danger ? '4px solid #e53935' : '4px solid transparent',
                marginBottom: 2,
              }}
            >
              <span style={{ fontSize: 20, width: 26, textAlign: 'center' }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
        {/* Logout and Version */}
        <div style={{ marginTop: 8, padding: '0 0 0 0', borderTop: '1px solid #f0f0f0' }}>
          {_logout && (
            <div
              onClick={() => { _logout.onClick && _logout.onClick(); onClose(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontWeight: 500,
                fontSize: 15,
                color: '#6b7683',
                padding: '12px 28px',
                cursor: 'pointer',
                gap: 14,
                opacity: 0.85,
              }}
            >
              <span style={{ fontSize: 20 }}>{_logout.icon}</span>
              {_logout.label}
            </div>
          )}
          {_version && (
            <div style={{ fontSize: 13, color: '#b0b8c1', padding: '0 28px', marginTop: 2 }}>{_version}</div>
          )}
        </div>
      </div>
    </>
  );
} 