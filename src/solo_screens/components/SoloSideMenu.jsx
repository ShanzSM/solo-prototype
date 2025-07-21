import React from 'react';

export default function SOLOSideMenu({ open, onClose, profile, menuItems, logout, version }) {
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
            <img src={profile.avatar} alt="avatar" style={{ width: 54, height: 54, borderRadius: '50%', objectFit: 'cover', marginRight: 14 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 20 }}>{profile.name}</div>
              <div style={{ display: 'flex', gap: 10, marginTop: 2 }}>
                {profile.actions && profile.actions.map((action, idx) => (
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
          {menuItems.map((item, idx) => (
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
          {logout && (
            <div
              onClick={() => { logout.onClick && logout.onClick(); onClose(); }}
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
              <span style={{ fontSize: 20 }}>{logout.icon}</span>
              {logout.label}
            </div>
          )}
          {version && (
            <div style={{ fontSize: 13, color: '#b0b8c1', padding: '0 28px', marginTop: 2 }}>{version}</div>
          )}
        </div>
      </div>
    </>
  );
} 