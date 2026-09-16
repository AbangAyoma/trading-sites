import React from 'react';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer style={{
      background: '#04070d',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '64px',
      paddingBottom: '32px',
      marginTop: '80px',
      color: '#94a3b8',
      fontSize: '0.9rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand Col */}
          <div>
            <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', cursor: 'pointer' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontWeight: '900',
                fontSize: '1.2rem',
              }}>
                M
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff' }}>
                MIRROR<span className="gradient-text">LIVETRADES</span>
              </span>
            </div>
            <p style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
              Premier institutional-grade automated cryptocurrency copy trading platform. Mirror world-class master traders effortlessly with automated execution and multi-sig security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Platform Nav</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>Home Overview</button></li>
              <li><button onClick={() => navigate('/about')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>About Security & Audit</button></li>
              <li><button onClick={() => navigate('/plans')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>Investment Plans</button></li>
              <li><button onClick={() => navigate('/traders')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>Master Trader Leaderboard</button></li>
              <li><button onClick={() => navigate('/faq')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>Help & Support</button></li>
              <li><button onClick={() => navigate('/contact')} style={{ background: 'none', border: 'none', color: '#00f2fe', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600' }}>Contact Us</button></li>
            </ul>
          </div>

          {/* Legal / Account */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Account & Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><button onClick={() => navigate('/login')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>Investor Portal Login</button></li>
              <li><button onClick={() => navigate('/register')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>Open Live Account</button></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#aml">Anti-Money Laundering (AML)</a></li>
            </ul>
          </div>

          {/* Contact & Status */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Institutional Support</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '12px' }}>
              Email: support@mirror-livetrades.com
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '20px',
              background: 'rgba(0, 230, 118, 0.1)',
              border: '1px solid rgba(0, 230, 118, 0.3)',
              color: '#00e676',
              fontSize: '0.75rem',
              fontWeight: '700',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00e676' }} />
              API Systems Operational 99.99%
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: '#64748b',
        }}>
          <p style={{ marginBottom: '12px' }}>
            Risk Warning: Cryptocurrency trading carries significant risk to your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved.
          </p>
          <p>© {new Date().getFullYear()} MirrorLiveTrades Inc. All Rights Reserved. Replicated with high precision.</p>
        </div>
      </div>
    </footer>
  );
};
