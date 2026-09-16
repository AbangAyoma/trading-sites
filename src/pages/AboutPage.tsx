import React from 'react';

interface AboutPageProps {
  navigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
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
            About <span className="gradient-text">Mirror Live Trades</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Pioneering automated institutional crypto copy trading, high-frequency execution, and cold-storage asset security for global investors.
          </p>
        </div>

        {/* Mission Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
        }}>
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#00f2fe', marginBottom: '16px' }}>
              ⚡ High-Frequency Execution
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
              Our direct exchange API connection enables sub-millisecond execution matching master traders' orders across Binance, Bybit, OKX, and Coinbase.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#00e676', marginBottom: '16px' }}>
              🛡 Multi-Sig Cold Vault Security
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
              98% of investor digital assets are held offline in cold storage vaults backed by Fireblocks and BitGo institutional custodian coverage.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffb300', marginBottom: '16px' }}>
              📊 Verified Performance Metrics
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
              Every master trader on our platform undergoes rigorous 90-day background verification and risk-adjusted auditing before receiving copy allocations.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-card" style={{
          padding: '48px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(79, 172, 254, 0.08) 100%)',
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px' }}>
            Ready to Automate Your Crypto Investments?
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 28px' }}>
            Join over 42,000+ satisfied investors generating daily automated yield across crypto markets.
          </p>
          <button
            onClick={() => handleNavigate('/register')}
            className="btn btn-primary"
            style={{ padding: '14px 36px', fontSize: '1.05rem', border: 'none', cursor: 'pointer' }}
          >
            Create Your Free Account Now
          </button>
        </div>
      </div>
    </div>
  );
};
