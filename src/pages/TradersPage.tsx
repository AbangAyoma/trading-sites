import React, { useState } from 'react';
import { mockTraders } from '../data/mockData';

export const TradersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Low Risk' | 'High ROI'>('All');
  const [copiedTraderId, setCopiedTraderId] = useState<string | null>(null);

  const filteredTraders = mockTraders.filter(t => {
    if (activeTab === 'Low Risk') return t.riskLevel === 'Low';
    if (activeTab === 'High ROI') return t.roi30d > 150;
    return true;
  });

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '16px' }}>
            Master Trader <span className="gradient-text">Leaderboard</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Inspect real-time trading statistics, win rates, and 30-day ROI of our verified master traders.
          </p>
        </div>

        {/* Leaderboard Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          {(['All', 'Low Risk', 'High ROI'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 24px',
                borderRadius: '50px',
                fontWeight: '600',
                background: activeTab === tab ? '#00f2fe' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === tab ? '#000' : '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Traders Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
        }}>
          {filteredTraders.map((trader) => (
            <div key={trader.id} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <img
                  src={trader.avatar}
                  alt={trader.name}
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #00f2fe',
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{trader.name}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#00f2fe', fontWeight: '600' }}>{trader.specialty}</div>
                  <span className="badge badge-success" style={{ marginTop: '6px' }}>Verified Master</span>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                background: 'rgba(4, 7, 13, 0.6)',
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '24px',
                fontSize: '0.85rem',
              }}>
                <div>
                  <div style={{ color: '#94a3b8' }}>30-Day ROI</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#00e676' }}>+{trader.roi30d}%</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8' }}>Historical Win Rate</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#00f2fe' }}>{trader.winRate}%</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8' }}>Copier Count</div>
                  <div style={{ fontWeight: '700', color: '#fff' }}>{trader.copiers.toLocaleString()}</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8' }}>Profit Generated</div>
                  <div style={{ fontWeight: '700', color: '#fff' }}>${trader.totalProfit.toLocaleString()}</div>
                </div>
              </div>

              <button
                onClick={() => setCopiedTraderId(copiedTraderId === trader.id ? null : trader.id)}
                className={copiedTraderId === trader.id ? 'btn btn-outline' : 'btn btn-primary'}
                style={{ width: '100%' }}
              >
                {copiedTraderId === trader.id ? '✓ Mirroring Active' : 'Start Mirroring Traders'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
