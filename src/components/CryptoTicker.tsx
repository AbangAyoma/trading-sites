import React from 'react';
import { mockCryptoPrices } from '../data/mockData';

export const CryptoTicker: React.FC = () => {
  return (
    <div style={{
      background: '#04070d',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '8px 0',
      fontSize: '0.85rem',
      userSelect: 'none',
    }}>
      <div style={{
        display: 'inline-flex',
        animation: 'ticker 35s linear infinite',
        gap: '32px',
        paddingLeft: '100%',
      }}>
        {[...mockCryptoPrices, ...mockCryptoPrices].map((item, idx) => (
          <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#94a3b8' }}>{item.symbol}/USD:</span>
            <span style={{ fontWeight: '600', color: '#f8fafc' }}>${item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            <span style={{
              color: item.change24h >= 0 ? '#00e676' : '#ff5252',
              fontWeight: '600',
              fontSize: '0.8rem',
            }}>
              {item.change24h >= 0 ? '+' : ''}{item.change24h}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
