import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import slider1 from './assets/slider1.png'
import './App.css'
import billpayments from './assets/billpayments.png';
import mobilereload from './assets/mobilereload.png';
import directpay from './assets/directpay.png';
import dealscoupons from './assets/deals&coupons.png';
import loyaltyrewards from './assets/loyalty&rewards.png';
import cashtomobile from './assets/cashtomobile.png';
import splitpay from './assets/splitpay.png';
import gifting from './assets/gifting.png';
import invitefriends from './assets/invitefriends.png';
import windows from './assets/windows.png';
import wallet from './assets/wallet.png';
import history from './assets/history.png';
import qr from './assets/qr.png';
import home from './assets/home.png';
import soloLogo from './assets/solo logo.png';
import SoloHome from './solo_screens/SoloHome.jsx';
import TnxHomePage from './TnxBankScreen/TnxHomePage.jsx';
import SoloNavBar from './solo_screens/components/SoloNavBar';
import TnxNavBar from './TnxBankScreen/components/TnxNavBar';
import NotificationPage from './components/NotificationPage';

function BottomSheetAppSwitcher({ open, onClose, apps, onAppSelect }) {
  const appColors = {
    'Solo App': '#0052cc',
    'TXN Banking': '#1db954',
    'App3': '#8884ff',
    'App4': '#ffb347',
  };
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
          background: 'rgba(0,0,0,0.3)',
          zIndex: 200,
        }}
      />
      {/* Bottom Sheet */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          boxShadow: '0 -2px 16px rgba(0,0,0,0.10)',
          zIndex: 201,
          minHeight: 280,
          maxHeight: '60vh',
          transform: open ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
          padding: '24px 20px 32px 20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: 40, height: 4, background: '#e0e0e0', borderRadius: 2, alignSelf: 'center', marginBottom: 18 }} />
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 18, textAlign: 'center' }}>Switch App</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {apps.map((app, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: app.disabled ? '#e0e0e0' : appColors[app.name] || '#f5f7fa',
                borderRadius: 12,
                padding: 12,
                cursor: app.disabled ? 'not-allowed' : 'pointer',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                opacity: app.disabled ? 0.6 : 1,
                pointerEvents: app.disabled ? 'none' : 'auto',
                color: '#fff',
                transition: 'background 0.2s',
              }}
              onClick={() => !app.disabled && onAppSelect(app)}
            >
              {app.name === 'TXN Banking' ? (
                <span style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 20,
                  letterSpacing: '2px',
                  marginBottom: 8,
                  textAlign: 'center',
                  display: 'block',
                }}>TXN Banking</span>
              ) : (
                <img src={app.icon} alt={app.name} style={{ width: 64, height: 64, objectFit: 'contain', marginBottom: 8, filter: app.disabled ? 'grayscale(1)' : 'none' }} />
              )}
              <span style={{ fontWeight: 600, fontSize: 14, marginBottom: 2, textAlign: 'center', width: '100%', display: 'block' }}>{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  const [showAppSwitcher, setShowAppSwitcher] = useState(false);
  const [selectedApp, setSelectedApp] = useState('Solo App');
  const [switching, setSwitching] = useState(false); // for transition
  const [nextApp, setNextApp] = useState(null); // track next app for overlay color
  const [showNotifications, setShowNotifications] = useState(false);

  const hnbApps = [
    { icon: soloLogo, name: 'Solo App', desc: 'You are here' },
    { icon: reactLogo, name: 'TXN Banking', desc: 'Main HNB banking app' },
    { icon: reactLogo, name: 'App3', desc: 'QR Payments' },
    { icon: reactLogo, name: 'App4', desc: 'Transaction history' },
  ].map(app => ({ ...app, disabled: app.name === selectedApp }));

  // Map app name to overlay color (light version of app bar)
  const appOverlayColors = {
    'Solo App': 'rgba(0, 82, 204, 0.32)', // vibrant blue
    'TXN Banking': 'rgba(29, 185, 84, 0.22)', // vibrant green
    'App3': 'rgba(0,0,0,0.04)', // fallback
    'App4': 'rgba(0,0,0,0.04)',
  };

  function handleAppSelect(app) {
    if (!app.disabled) {
      setNextApp(app.name); // Set next app for overlay color
      setSwitching(true); // Start transition out
      setTimeout(() => {
        setSelectedApp(app.name);
        setShowAppSwitcher(false);
        setSwitching(false); // Transition in
        setNextApp(null); // Reset
      }, 400); // Duration matches transition
    }
  }

  // Determine overlay color
  const overlayColor = nextApp ? (appOverlayColors[nextApp] || 'rgba(0,0,0,0.06)') : 'transparent';

  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {showNotifications ? (
          <NotificationPage
            activeApp={selectedApp}
            onBack={() => setShowNotifications(false)}
            // Optionally pass notifications prop here
            // notifications={...}
          />
        ) : (
          <>
            <div
              style={{
                transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)',
                opacity: switching ? 0 : 1,
                transform: switching ? 'scale(0.96)' : 'scale(1)',
                minHeight: '100vh',
                pointerEvents: switching ? 'none' : 'auto',
              }}
            >
              {selectedApp === 'Solo App' && <SoloHome onShowNotifications={() => setShowNotifications(true)} />}
              {selectedApp === 'TXN Banking' && <TnxHomePage onShowNotifications={() => setShowNotifications(true)} />}
            </div>
            {/* Overlay for fade color */}
            <div
              style={{
                pointerEvents: 'none',
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100vw',
                height: '100vh',
                background: overlayColor,
                opacity: switching && nextApp ? 1 : 0,
                transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1)',
                zIndex: 999,
              }}
            />
            {selectedApp === 'Solo App' && <SoloNavBar onAppSwitcher={() => setShowAppSwitcher(true)} />}
            {selectedApp === 'TXN Banking' && <TnxNavBar onAppSwitcher={() => setShowAppSwitcher(true)} />}
          </>
        )}
      </div>
      <BottomSheetAppSwitcher open={showAppSwitcher} onClose={() => setShowAppSwitcher(false)} apps={hnbApps} onAppSelect={handleAppSelect} />
    </>
  )
}

export default App
