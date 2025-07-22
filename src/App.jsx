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
import qr from './assets/qr.png';
import soloLogo from './assets/solo logo.png';
import tnxLogo from './assets/tnx_logo.png';
import app03 from './assets/APP 03.png';
import app04 from './assets/APP 04.png';
import app05 from './assets/APP 05.png';
import app06 from './assets/APP 06.png';
import SoloHome from './solo_screens/SoloHome.jsx';
import TnxHomePage from './TnxBankScreen/TnxHomePage.jsx';
import SoloNavBar from './solo_screens/components/SoloNavBar';
import TnxNavBar from './TnxBankScreen/components/TnxNavBar';
import NotificationPage from './components/NotificationPage';
import App3HomeScreen from './app3_Screens/app3Home_Screen.jsx';
import App4HomeScreen from './app4_Screens/App4Home_Screen.jsx';
import App5HomeScreen from './app5_Screen/App5Home_screen.jsx';
import App6HomeScreen from './app6_screen/App6Home_Screen.jsx';

function BottomSheetAppSwitcher({ open, onClose, apps, onAppSelect }) {
  const appColors = {
    'Solo App': '#0052cc',
    'TNX Banking': '#1db954',
    'App3': '#a259ff', // purple
    'App4': '#e53935', // red
    'App5': '#ff9800', // orange
    'App6': '#00bcd4', // cyan
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, justifyContent: 'center' }}>
          {apps.map((app, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 110,
                height: 140,
                background: app.disabled ? appColors[app.name] : appColors[app.name] || '#f5f7fa',
                borderRadius: 12,
                padding: 12,
                cursor: app.disabled ? 'not-allowed' : 'pointer',
                boxShadow: app.disabled ? '0 0 0 3px #FFD600, 0 1px 8px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.04)',
                opacity: 1,
                pointerEvents: app.disabled ? 'none' : 'auto',
                color: '#fff',
                transition: 'background 0.2s, box-shadow 0.2s',
                filter: app.disabled ? 'brightness(1.10) saturate(1.1)' : 'none',
                border: app.disabled ? '3px solid #FFD600' : 'none',
                position: 'relative',
              }}
              onClick={() => !app.disabled && onAppSelect(app)}
              title={!app.icon ? app.name : undefined}
            >
              {app.disabled && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(240,240,240,0.32)',
                  borderRadius: 12,
                  pointerEvents: 'none',
                  zIndex: 1,
                }} />
              )}
              {app.icon ? (
                <img src={app.icon} alt={app.name} style={{ width: 64, height: 64, objectFit: 'contain', marginBottom: 8, filter: app.disabled ? 'none' : 'none', zIndex: 2 }} />
              ) : (
                <span style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, zIndex: 2 }}>{app.name[0]}</span>
              )}
              {/* Removed label below icon */}
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
    { icon: soloLogo, name: 'Solo App' },
    { icon: tnxLogo, name: 'TNX Banking' },
    { icon: app03, name: 'App3' },
    { icon: app04, name: 'App4' },
    { icon: app05, name: 'App5' },
    { icon: app06, name: 'App6' },
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
              {selectedApp === 'TNX Banking' && <TnxHomePage onShowNotifications={() => setShowNotifications(true)} />}
              {selectedApp === 'App3' && <App3HomeScreen />}
              {selectedApp === 'App4' && <App4HomeScreen />}
              {selectedApp === 'App5' && <App5HomeScreen />}
              {selectedApp === 'App6' && <App6HomeScreen />}
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
            {selectedApp === 'TNX Banking' && <TnxNavBar onAppSwitcher={() => setShowAppSwitcher(true)} />}
          </>
        )}
      </div>
      <BottomSheetAppSwitcher open={showAppSwitcher} onClose={() => setShowAppSwitcher(false)} apps={hnbApps} onAppSelect={handleAppSelect} />
    </>
  )
}

export default App
