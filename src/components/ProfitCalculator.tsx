import React, { useState } from 'react';
import { mockPlans } from '../data/mockData';

export const ProfitCalculator: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState(mockPlans[1].id);
  const [depositAmount, setDepositAmount] = useState(5000);

  const currentPlan = mockPlans.find(p => p.id === selectedPlanId) || mockPlans[0];
  
  const dailyProfit = (depositAmount * currentPlan.dailyPercent) / 100;
  const totalProfit = dailyProfit * currentPlan.durationDays;
  const totalReturn = depositAmount + totalProfit;

  return (
    <div className="glass-card" style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
      }} />

      <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', fontWeight: '700' }}>
        Interactive <span className="gradient-text">Profit Calculator</span>
      </h3>
      <p style={{ color: '#94a3b8', marginBottom: '28px' }}>
        Calculate your potential automated trading returns based on selected algorithm tiers.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
        {/* Left Inputs */}
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', color: '#cbd5e1' }}>
            Select Investment Strategy Tier:
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {mockPlans.map(plan => (
              <button
                key={plan.id}
                onClick={() => {
                  setSelectedPlanId(plan.id);
                  if (depositAmount < plan.minAmount) setDepositAmount(plan.minAmount);
                }}
                style={{
                  padding: '14px 18px',
                  borderRadius: '10px',
                  textAlign: 'left',
                  background: selectedPlanId === plan.id ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: selectedPlanId === plan.id ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: selectedPlanId === plan.id ? '#00f2fe' : '#f8fafc',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s',
                }}
              >
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{plan.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    Min: ${plan.minAmount.toLocaleString()} • {plan.durationDays} Days
                  </div>
                </div>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#00e676' }}>
                  {plan.dailyPercent}% / day
                </div>
              </button>
            ))}
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#cbd5e1', fontWeight: '600' }}>Deposit Capital ($ USD):</span>
              <span style={{ color: '#00f2fe', fontWeight: '800', fontSize: '1.2rem' }}>
                ${depositAmount.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={currentPlan.minAmount}
              max={currentPlan.maxAmount}
              step={100}
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#00f2fe',
                height: '6px',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '6px' }}>
              <span>${currentPlan.minAmount.toLocaleString()}</span>
              <span>${currentPlan.maxAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Right Output Display */}
        <div style={{
          background: 'rgba(4, 7, 13, 0.6)',
          borderRadius: '16px',
          border: '1px solid rgba(0, 242, 254, 0.2)',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              Return Projections ({currentPlan.durationDays} Days)
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Est. Daily Net Income</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#00e676' }}>
                +${dailyProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Total Profit Generation</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#00f2fe' }}>
                +${totalProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            <div style={{ padding: '16px 0', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Total Expected Payout:</div>
              <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#ffffff' }}>
                ${totalReturn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            Lock In Strategy & Start Mirroring
          </button>
        </div>
      </div>
    </div>
  );
};
