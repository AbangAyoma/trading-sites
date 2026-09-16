import React, { useState } from 'react';

export const DashboardPage: React.FC = () => {
  const [balance, setBalance] = useState(14850.40);
  const [activeProfit, setActiveProfit] = useState(2450.80);
  const [depositModal, setDepositModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState('1000');

  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBalance(prev => prev + Number(depositAmount));
    setDepositModal(false);
    alert(`Deposit of $${depositAmount} initiated! Your balance updates automatically upon blockchain confirmation.`);
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        {/* User Greeting Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '32px',
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '900' }}>
              Investor <span className="gradient-text">Dashboard</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Welcome back, Premium Account #MLT-89410 • Verified Account 🛡
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setDepositModal(true)} className="btn btn-primary">
              + Instant Deposit
            </button>
            <button onClick={() => alert('Withdrawal request submitted for instant payout verification.')} className="btn btn-outline">
              Request Payout
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '36px',
        }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Total Account Balance</div>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#fff', margin: '4px 0' }}>
              ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#00e676' }}>+18.4% this month</div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Active Profit Yield</div>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#00e676', margin: '4px 0' }}>
              +${activeProfit.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Auto-compounding active</div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Active Copy Strategy</div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#00f2fe', margin: '8px 0' }}>
              PRO COPIER TIER
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Mirroring Alexander Vance</div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Affiliate Earnings</div>
            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#ffb300', margin: '4px 0' }}>
              $450.00
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>5 active referrals</div>
          </div>
        </div>

        {/* Live Active Copy Trades Stream */}
        <div className="glass-card" style={{ padding: '32px', marginBottom: '36px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>
            Live Mirrored <span className="gradient-text">Open Positions</span>
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px 16px' }}>Pair</th>
                  <th style={{ padding: '12px 16px' }}>Master Trader</th>
                  <th style={{ padding: '12px 16px' }}>Side</th>
                  <th style={{ padding: '12px 16px' }}>Entry Price</th>
                  <th style={{ padding: '12px 16px' }}>Mark Price</th>
                  <th style={{ padding: '12px 16px' }}>Unrealized PnL</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '16px', fontWeight: '700', color: '#fff' }}>BTC/USDT 20x</td>
                  <td style={{ padding: '16px', color: '#00f2fe' }}>Alexander V. Vance</td>
                  <td style={{ padding: '16px' }}><span className="badge badge-success">LONG</span></td>
                  <td style={{ padding: '16px' }}>$91,200.00</td>
                  <td style={{ padding: '16px' }}>$92,450.80</td>
                  <td style={{ padding: '16px', fontWeight: '800', color: '#00e676' }}>+$1,250.40 (+27.4%)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '16px', fontWeight: '700', color: '#fff' }}>ETH/USDT 15x</td>
                  <td style={{ padding: '16px', color: '#00f2fe' }}>Elena Rostova</td>
                  <td style={{ padding: '16px' }}><span className="badge badge-success">LONG</span></td>
                  <td style={{ padding: '16px' }}>$3,310.00</td>
                  <td style={{ padding: '16px' }}>$3,420.15</td>
                  <td style={{ padding: '16px', fontWeight: '800', color: '#00e676' }}>+$820.00 (+49.8%)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                  <td style={{ padding: '16px', fontWeight: '700', color: '#fff' }}>SOL/USDT 10x</td>
                  <td style={{ padding: '16px', color: '#00f2fe' }}>Marcus Thorne</td>
                  <td style={{ padding: '16px' }}><span className="badge badge-success">LONG</span></td>
                  <td style={{ padding: '16px' }}>$182.50</td>
                  <td style={{ padding: '16px' }}>$194.50</td>
                  <td style={{ padding: '16px', fontWeight: '800', color: '#00e676' }}>+$380.40 (+65.7%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Deposit Modal */}
      {depositModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px',
        }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '440px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '16px' }}>
              Instant Crypto <span className="gradient-text">Deposit</span>
            </h3>
            <form onSubmit={handleDepositSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px' }}>
                  Select Crypto Payment Gateway
                </label>
                <select style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  background: '#04070d',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                }}>
                  <option>USDT (TRC20 / ERC20)</option>
                  <option>Bitcoin (BTC)</option>
                  <option>Ethereum (ETH)</option>
                  <option>Solana (SOL)</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px' }}>
                  Amount ($ USD)
                </label>
                <input
                  type="number"
                  value={depositAmount}
                  onChange={e => setDepositAmount(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    background: '#04070d',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Confirm Deposit
                </button>
                <button type="button" onClick={() => setDepositModal(false)} className="btn btn-outline">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
