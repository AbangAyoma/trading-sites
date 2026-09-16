import React, { useState } from 'react';
import { mockTraders, mockPlans } from '../data/mockData';
import { ProfitCalculator } from '../components/ProfitCalculator';
import { LiveTransactions } from '../components/LiveTransactions';

export const HomePage: React.FC = () => {
  const [copiedTraderId, setCopiedTraderId] = useState<string | null>(null);

  const toggleCopyTrader = (id: string) => {
    if (copiedTraderId === id) {
      setCopiedTraderId(null);
    } else {
      setCopiedTraderId(id);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '90px 0 70px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Ambient Glows */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, rgba(8, 12, 20, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '50px',
            background: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            color: '#00f2fe',
            fontSize: '0.85rem',
            fontWeight: '700',
            marginBottom: '24px',
          }}>
            ⚡ INSTITUTIONAL ALGORITHMIC COPY-TRADING PLATFORM
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            fontWeight: '900',
            lineHeight: '1.15',
            letterSpacing: '-1px',
            marginBottom: '20px',
            maxWidth: '960px',
            margin: '0 auto 20px',
          }}>
            Invest Successfully & Safely in Cryptocurrencies with <span className="gradient-text">Automated Live Mirroring</span>
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            maxWidth: '720px',
            margin: '0 auto 36px',
            lineHeight: '1.6',
          }}>
            Mirror trades of Wall Street algorithms and verified master crypto traders in real-time. Automated execution, zero latency, multi-sig vault security, and daily withdrawals.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/register" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              Start Copy Trading Now ↗
            </a>
            <a href="/plans" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              Explore Investment Tiers
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '64px',
          }}>
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#00f2fe' }}>$148M+</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: '500' }}>Total Investor Capital</div>
            </div>
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#00e676' }}>98.4%</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: '500' }}>Algorithm Win Rate</div>
            </div>
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#ffb300' }}>42,500+</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: '500' }}>Active Global Investors</div>
            </div>
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#4facfe' }}>Instant</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: '500' }}>Automated Payouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Copy Traders Leaderboard */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '10px' }}>
              Copy Verified <span className="gradient-text">Master Traders</span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
              Select top performing professional crypto traders and automatically mirror their positions into your personal portfolio.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {mockTraders.map((trader) => (
              <div key={trader.id} className="glass-card" style={{ padding: '28px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <img
                    src={trader.avatar}
                    alt={trader.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #00f2fe',
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff' }}>{trader.name}</h3>
                    <div style={{ fontSize: '0.8rem', color: '#00f2fe', fontWeight: '600' }}>{trader.specialty}</div>
                    <span className="badge badge-success" style={{ marginTop: '4px' }}>Verified Master</span>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  background: 'rgba(4, 7, 13, 0.5)',
                  padding: '14px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  fontSize: '0.85rem',
                }}>
                  <div>
                    <div style={{ color: '#94a3b8' }}>30d ROI</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#00e676' }}>+{trader.roi30d}%</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8' }}>Win Rate</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#00f2fe' }}>{trader.winRate}%</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8' }}>Active Copiers</div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>{trader.copiers.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8' }}>Risk Score</div>
                    <div style={{ fontWeight: '700', color: trader.riskLevel === 'Low' ? '#00e676' : trader.riskLevel === 'Medium' ? '#ffb300' : '#ff5252' }}>
                      {trader.riskLevel}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleCopyTrader(trader.id)}
                  className={copiedTraderId === trader.id ? 'btn btn-outline' : 'btn btn-primary'}
                  style={{ width: '100%', padding: '12px' }}
                >
                  {copiedTraderId === trader.id ? '✓ Currently Mirroring' : 'Copy Trader Signals'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Plans Section */}
      <section style={{ padding: '60px 0', background: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '10px' }}>
              Automated Strategy <span className="gradient-text">Investment Tiers</span>
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
              Guaranteed daily ROI yields backed by smart-contract liquidity pools.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {mockPlans.map((plan) => (
              <div
                key={plan.id}
                className="glass-card"
                style={{
                  padding: '32px 24px',
                  border: plan.popular ? '2px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                    color: '#000',
                    fontWeight: '900',
                    fontSize: '0.75rem',
                    padding: '4px 16px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
                    {plan.name}
                  </h3>
                  <div style={{ fontSize: '2.8rem', fontWeight: '900', color: '#00e676', marginBottom: '4px' }}>
                    {plan.dailyPercent}%
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
                    Daily ROI for {plan.durationDays} Days
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '32px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#00f2fe' }}>✓</span> Min Deposit: ${plan.minAmount.toLocaleString()}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#00f2fe' }}>✓</span> Max Deposit: ${plan.maxAmount.toLocaleString()}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#00f2fe' }}>✓</span> Capital Returned: {plan.capitalReturn ? 'Yes' : 'No'}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#00f2fe' }}>✓</span> Instant Automated Withdrawals
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#00f2fe' }}>✓</span> 24/7 Dedicated Account Manager
                    </li>
                  </ul>
                </div>

                <a href="/register" className="btn btn-primary" style={{ width: '100%' }}>
                  Deposit & Mirror Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Profit Calculator Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <ProfitCalculator />
        </div>
      </section>

      {/* Live Transaction Ledger */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <LiveTransactions />
        </div>
      </section>
    </div>
  );
};
