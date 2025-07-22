import React from 'react';

export default function App5AppBar({ title = 'App 5' }) {
  return (
    <div style={{ background: '#ff9800', padding: '16px 0', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 28, letterSpacing: 2 }}>
      {title}
    </div>
  );
} 