import React, { useState } from 'react';

export default function App3AppBar({ title = 'App 3' }) {
  return (
    <div style={{ background: '#a259ff', padding: '16px 0', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 28, letterSpacing: 2 }}>
      {title}
    </div>
  );
} 