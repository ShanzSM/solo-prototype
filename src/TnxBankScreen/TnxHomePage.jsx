import React, { useState } from 'react';
import AppBar from '../solo_screens/components/AppBar';
import TNXSideMenu from './components/TNXSideMenu';
import TnxBalanceCard from './components/TnxBalanceCard';
import TnxQuickActions from './components/TnxQuickActions';
import TnxRecentTransactions from './components/TnxRecentTransactions';

const tnxProfile = {
  name: 'Thilina',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  actions: [
    { label: 'Edit Profile', icon: '✏️', onClick: () => alert('Edit Profile') },
    { label: 'Bank Settings', icon: '🏦', onClick: () => alert('Bank Settings') },
  ],
};

const TnxHomePage = ({ onShowNotifications }) => {
  return (
    <>
      <AppBar
        title="TNX Banking"
        color="#1db954"
        bannerColor="#13a84e"
        menuItems={[]}
        profile={tnxProfile}
        logout={null}
        version={null}
        sideMenuComponent={TNXSideMenu}
        onShowNotifications={onShowNotifications}
      />
      <div style={{ padding: '20px 16px 0 16px' }}>
        <TnxBalanceCard />
        <TnxQuickActions />
        <TnxRecentTransactions />
      </div>
    </>
  );
};

export default TnxHomePage; 