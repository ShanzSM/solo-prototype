import React from 'react';
import App4AppBar from './components/App4AppBar';
import TnxNavBar from '../TnxBankScreen/components/TnxNavBar.jsx';

export default function App4HomeScreen() {
  return (
    <>
      <App4AppBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', fontSize: 24, fontWeight: 600, color: '#e53935' }}>
        App 4 Home Page
      </div>
      <TnxNavBar />
    </>
  );
}
