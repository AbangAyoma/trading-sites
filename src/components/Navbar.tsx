import React from 'react';
import { CryptoTicker } from './CryptoTicker';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const isActive = (path: string) => currentPath === path;

  return (
    <>
      <CryptoTicker />
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(8, 12, 20, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}>
          {/* Logo */}
          <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: '900',
              fontSize: '1.4rem',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)',
            }}>
              M
            </div>
            <div>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                MIRROR<span className="gradient-text">LIVETRADES</span>
              </span>
              <span style={{
                display: 'block',
                fontSize: '0.65rem',
                color: '#94a3b8',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginTop: '-4px',
              }}>
                Institutional Copy Trading
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <button onClick={() => navigate('/')} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              color: isActive('/') ? '#00f2fe' : '#94a3b8',
              transition: 'color 0.2s',
            }}>Home</button>
            <button onClick={() => navigate('/about')} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              color: isActive('/about') ? '#00f2fe' : '#94a3b8',
              transition: 'color 0.2s',
            }}>About Us</button>
            <button onClick={() => navigate('/plans')} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              color: isActive('/plans') ? '#00f2fe' : '#94a3b8',
              transition: 'color 0.2s',
            }}>Investment Plans</button>
            <button onClick={() => navigate('/traders')} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              color: isActive('/traders') ? '#00f2fe' : '#94a3b8',
              transition: 'color 0.2s',
            }}>Pro Traders</button>
            <button onClick={() => navigate('/faq')} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              color: isActive('/faq') ? '#00f2fe' : '#94a3b8',
              transition: 'color 0.2s',
            }}>FAQ</button>
            <button onClick={() => navigate('/contact')} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              color: isActive('/contact') ? '#00f2fe' : '#94a3b8',
              transition: 'color 0.2s',
            }}>Contact Us</button>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button onClick={() => navigate('/login')} className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              Sign In
            </button>
            <button onClick={() => navigate('/register')} className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
