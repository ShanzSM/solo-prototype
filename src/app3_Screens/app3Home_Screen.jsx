import React from 'react';
import App3AppBar from './Components/App3AppBar';
import TnxNavBar from '../TnxBankScreen/components/TnxNavBar.jsx';

export default function App3HomeScreen() {
  return (
    <>
      <App3AppBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', fontSize: 24, fontWeight: 600, color: '#a259ff' }}>
        App 3 Home Page
      </div>
      <TnxNavBar />
    </>
  );
}
