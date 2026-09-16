import React from 'react';
import { mockPlans } from '../data/mockData';
import { ProfitCalculator } from '../components/ProfitCalculator';

interface PlansPageProps {
  navigate?: (path: string) => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ navigate }) => {
  const handleNavigate = (path: string) => {
    if (navigate) {
      navigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '16px' }}>
            Investment <span className="gradient-text">Strategies & Tiers</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Choose the algorithmic copy trading tier that fits your investment capital and yield expectations.
          </p>
        </div>

        {/* Plans Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
          marginBottom: '80px',
        }}>
          {mockPlans.map((plan) => (
            <div
              key={plan.id}
              className="glass-card"
              style={{
                padding: '32px 24px',
                border: plan.popular ? '2px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
                  {plan.name}
                </h3>
                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: '#00e676', marginBottom: '4px' }}>
                  {plan.dailyPercent}%
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
                  Daily Yield for {plan.durationDays} Days
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
                    <span style={{ color: '#00f2fe' }}>✓</span> Instant Automated Payouts
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleNavigate('/register')}
                className="btn btn-primary"
                style={{ width: '100%', border: 'none', cursor: 'pointer' }}
              >
                Select Strategy Tier
              </button>
            </div>
          ))}
        </div>

        <ProfitCalculator />
      </div>
    </div>
  );
};
