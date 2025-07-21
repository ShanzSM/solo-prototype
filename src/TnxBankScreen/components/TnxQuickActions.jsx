import React from 'react';

const actions = [
  { label: 'Transfer', icon: '💸' },
  { label: 'Pay Bill', icon: '🧾' },
  { label: 'Top Up', icon: '💰' },
];

const TnxQuickActions = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
    {actions.map((action) => (
      <div key={action.label} style={{
        background: '#f5f7fa',
        borderRadius: 12,
        padding: '14px 18px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 80,
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      }}>
        <span style={{ fontSize: 22, marginBottom: 6 }}>{action.icon}</span>
        <span style={{ fontSize: 13, fontWeight: 500 }}>{action.label}</span>
      </div>
    ))}
  </div>
);

export default TnxQuickActions; 