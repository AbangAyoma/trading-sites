import React, { useState } from 'react';
import { mockLiveTransactions } from '../data/mockData';

export const LiveTransactions: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Deposit' | 'Withdrawal'>('All');

  const filteredTxs = filter === 'All'
    ? mockLiveTransactions
    : mockLiveTransactions.filter(t => t.type === filter);

  return (
    <div className="glass-card" style={{ padding: '32px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#00e676',
              boxShadow: '0 0 10px #00e676',
            }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>
              Real-Time <span className="gradient-text">Payout & Deposit Stream</span>
            </h3>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>
            Live verified blockchain ledger executions across global investor accounts.
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex',
          background: 'rgba(4, 7, 13, 0.6)',
          padding: '4px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          {(['All', 'Deposit', 'Withdrawal'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: '6px 16px',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: '600',
                background: filter === tab ? '#00f2fe' : 'transparent',
                color: filter === tab ? '#000' : '#94a3b8',
                transition: 'all 0.2s',
              }}
            >
              {tab}s
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '12px 16px' }}>Type</th>
              <th style={{ padding: '12px 16px' }}>Investor</th>
              <th style={{ padding: '12px 16px' }}>Amount</th>
              <th style={{ padding: '12px 16px' }}>Currency</th>
              <th style={{ padding: '12px 16px' }}>Execution</th>
              <th style={{ padding: '12px 16px' }}>Tx Hash</th>
            </tr>
          </thead>
          <tbody>
            {filteredTxs.map(tx => (
              <tr
                key={tx.id}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  transition: 'background 0.2s',
                }}
              >
                <td style={{ padding: '14px 16px' }}>
                  <span className={tx.type === 'Deposit' ? 'badge badge-cyan' : 'badge badge-success'}>
                    {tx.type}
                  </span>
                </td>
                <td style={{ padding: '14px 16px', fontWeight: '600', color: '#f8fafc' }}>
                  {tx.username}
                </td>
                <td style={{
                  padding: '14px 16px',
                  fontWeight: '700',
                  color: tx.type === 'Deposit' ? '#00f2fe' : '#00e676',
                }}>
                  ${tx.amount.toLocaleString()}
                </td>
                <td style={{ padding: '14px 16px', color: '#cbd5e1', fontWeight: '500' }}>
                  {tx.currency}
                </td>
                <td style={{ padding: '14px 16px', color: '#94a3b8', fontSize: '0.85rem' }}>
                  {tx.timeAgo}
                </td>
                <td style={{ padding: '14px 16px', fontFamily: 'monospace', color: '#4facfe', fontSize: '0.85rem' }}>
                  {tx.txHash} ↗
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
