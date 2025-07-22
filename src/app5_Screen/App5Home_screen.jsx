import React from 'react';
import App5AppBar from './components/App5AppBar';
import TnxNavBar from '../TnxBankScreen/components/TnxNavBar.jsx';

export default function App5HomeScreen() {
  return (
    <>
      <App5AppBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', fontSize: 24, fontWeight: 600, color: '#ff9800' }}>
        App 5 Home Page
      </div>
      <TnxNavBar />
    </>
  );
}
