import React, { useState } from 'react';
import TnxAppBar from './components/TnxAppBar';
import TNXSideMenu from './components/TNXSideMenu';

const tnxProfile = {
  name: 'Thilina',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  actions: [
    { label: 'Edit Profile', icon: '✏️', onClick: () => alert('Edit Profile') },
    { label: 'Bank Settings', icon: '🏦', onClick: () => alert('Bank Settings') },
  ],
};

const tnxMenu = [
  { label: 'Home', onClick: () => alert('Home') },
  { label: 'Wallet', onClick: () => alert('Wallet') },
  { label: 'Transactions', onClick: () => alert('Transactions') },
  { label: 'Gifting', onClick: () => alert('Gifting') },
  { label: 'Deals & Coupons', onClick: () => alert('Deals & Coupons') },
  { label: 'Direct Pay', onClick: () => alert('Direct Pay') },
  { label: 'Billers', onClick: () => alert('Billers') },
  { label: 'Invite Friends', onClick: () => alert('Invite Friends') },
  { label: 'Reach Us', onClick: () => alert('Reach Us') },
];

const tnxLogout = { label: 'Logout', onClick: () => alert('Logout') };
const tnxVersion = 'Version 3.1.0';

const TnxHomePage = ({ onShowNotifications }) => {
  return (
    <>
      <TnxAppBar
        title="TNX Banking"
        color="#1db954"
        bannerColor="#13a84e"
        menuItems={tnxMenu}
        profile={tnxProfile}
        logout={tnxLogout}
        version={tnxVersion}
        sideMenuComponent={TNXSideMenu}
        onShowNotifications={onShowNotifications}
      />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', fontSize: 24, fontWeight: 600, color: '#1db954' }}>
        Transaction Banking Landing page
      </div>
    </>
  );
};

export default TnxHomePage; 