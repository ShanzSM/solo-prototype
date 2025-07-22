import React from 'react';

export default function App4AppBar({ title = 'App 4' }) {
  return (
    <div style={{ background: '#e53935', padding: '16px 0', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 28, letterSpacing: 2 }}>
      {title}
    </div>
  );
} 