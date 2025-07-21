import React from 'react';

const transactions = [
  { label: 'Supermarket', amount: '- LKR 2,500.00', date: '2024-06-01', icon: '🛒' },
  { label: 'Salary', amount: '+ LKR 120,000.00', date: '2024-05-30', icon: '💼' },
  { label: 'Mobile Reload', amount: '- LKR 1,000.00', date: '2024-05-29', icon: '📱' },
  { label: 'Transfer', amount: '- LKR 10,000.00', date: '2024-05-28', icon: '💸' },
];

const TnxRecentTransactions = () => (
  <>
    <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 12 }}>Recent Transactions</div>
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', padding: '10px 0' }}>
      {transactions.map((tx, idx) => (
        <div key={idx} style={{ display: 'flex', alignItems: 'center', padding: '10px 16px', borderBottom: idx < transactions.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
          <span style={{ fontSize: 20, marginRight: 14 }}>{tx.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 500, fontSize: 14 }}>{tx.label}</div>
            <div style={{ fontSize: 12, color: '#888' }}>{tx.date}</div>
          </div>
          <span style={{ fontWeight: 600, color: tx.amount.startsWith('+') ? '#1db954' : '#e53935', fontSize: 14 }}>{tx.amount}</span>
        </div>
      ))}
    </div>
  </>
);

export default TnxRecentTransactions; 