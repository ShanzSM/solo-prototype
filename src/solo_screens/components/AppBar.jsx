import React, { useState } from 'react';
import SOLOSideMenu from './SOLOSideMenu';

export default function AppBar({
  title,
  color = '#0052cc',
  bannerColor = '#1565c0',
  menuItems = [],
  logo = null,
  profile = {},
  logout = null,
  version = null,
  sideMenuComponent: SideMenuComponent = SOLOSideMenu,
  onShowNotifications,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fallback avatar
  const avatar = profile.avatar || 'https://randomuser.me/api/portraits/men/32.jpg';

  return (
    <>
      <div style={{ background: color, paddingBottom: '8px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0', position: 'relative' }}>
        {/* Top Row: Menu icon, Centered logo/title, and notification icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0', position: 'relative' }}>
          {/* Menu Icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
            alt="Menu"
            style={{ position: 'absolute', left: 20, width: '28px', height: '28px', cursor: 'pointer', filter: 'invert(1)' }}
            onClick={() => setMenuOpen(true)}
          />
          {/* Centered logo or title */}
          {logo ? (
            <img src={logo} alt={title} style={{ height: 32, objectFit: 'contain' }} />
          ) : (
            <span style={{ color: '#FFD600', fontWeight: 'bold', fontSize: '28px', letterSpacing: '2px' }}>{title}</span>
          )}
          {/* Notification bell */}
          <span
            style={{ position: 'absolute', right: 20, fontSize: '26px', color: 'white', cursor: 'pointer' }}
            title="Notifications"
            onClick={onShowNotifications}
          >
            🔔
          </span>
        </div>
        {/* Promotional Banner inside App Bar */}
        <div style={{ background: bannerColor, borderRadius: '16px', margin: '0 16px 8px 16px', padding: '18px 16px', minHeight: 62 }} />
      </div>
      <SideMenuComponent
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        profile={{ ...profile, avatar }}
        menuItems={menuItems}
        logout={logout}
        version={version}
      />
    </>
  );
} 