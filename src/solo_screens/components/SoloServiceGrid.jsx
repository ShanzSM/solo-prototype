import billpayments from '../../assets/billpayments.png';
import mobilereload from '../../assets/mobilereload.png';
import directpay from '../../assets/directpay.png';
import dealscoupons from '../../assets/deals&coupons.png';
import loyaltyrewards from '../../assets/loyalty&rewards.png';
import cashtomobile from '../../assets/cashtomobile.png';
import splitpay from '../../assets/splitpay.png';
import gifting from '../../assets/gifting.png';
import invitefriends from '../../assets/invitefriends.png';
import React from 'react';

const services = [
  { name: 'Bill Payments', icon: billpayments },
  { name: 'Mobile Reloads', icon: mobilereload },
  { name: 'Direct Pay', icon: directpay },
  { name: 'Deals & Coupons', icon: dealscoupons },
  { name: 'Loyalty & Rewards', icon: loyaltyrewards },
  { name: 'Cash to Mobile', icon: cashtomobile },
  { name: 'Split Pay', icon: splitpay },
  { name: 'Gifting', icon: gifting },
  { name: 'Invite Friends', icon: invitefriends },
];

export default function SoloServiceGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px 0', padding: '18px 16px 0 16px', marginTop: '90px' }}>
      {services.map((service, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <img
            src={service.icon}
            alt={service.name}
            style={{
              width: 58,
              height: 58,
              marginBottom: 10,
              objectFit: 'contain',
              background: '#f5f7fa',
              borderRadius: '50%',
              padding: 8
            }}
          />
          <span style={{
            fontSize: 14,
            color: '#222',
            textAlign: 'center',
            fontWeight: 500,
            width: '100%',
            display: 'block',
            lineHeight: 1.2,
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            maxWidth: 80
          }}>{service.name}</span>
        </div>
      ))}
    </div>
  );
} 