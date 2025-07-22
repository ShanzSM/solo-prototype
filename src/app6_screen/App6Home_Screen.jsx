import React from 'react';
import App6AppBar from './components/App6AppBar';
import TnxNavBar from '../TnxBankScreen/components/TnxNavBar.jsx';

export default function App6HomeScreen() {
  return (
    <>
      <App6AppBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', fontSize: 24, fontWeight: 600, color: '#00bcd4' }}>
        App 6 Home Page
      </div>
      <TnxNavBar />
    </>
  );
}
