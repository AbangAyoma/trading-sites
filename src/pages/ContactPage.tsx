import React, { useState } from 'react';

interface ContactPageProps {
  navigate?: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '10px',
    background: 'rgba(4, 7, 13, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    outline: 'none',
    fontSize: '0.95rem',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: '8px',
  };

  return (
    <div style={{ padding: '70px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '16px' }}>
            Contact <span className="gradient-text">Institutional Support</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Have questions about automated copy trading, account verification, or VIP custom allocations? Our 24/7 desk is here to assist.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
        }}>
          {/* Left: Contact Info & Support Channels */}
          <div>
            <div className="glass-card" style={{ padding: '36px', marginBottom: '28px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginBottom: '20px' }}>
                Operational Support Desks
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(0, 242, 254, 0.12)',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f2fe',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}>
                    ✉
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Email Support</div>
                    <div style={{ color: '#00f2fe', fontSize: '0.9rem', margin: '2px 0' }}>support@mirror-livetrades.com</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Average Response Time: &lt; 15 mins</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(0, 230, 118, 0.12)',
                    border: '1px solid rgba(0, 230, 118, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00e676',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}>
                    💬
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Telegram Desk</div>
                    <div style={{ color: '#00e676', fontSize: '0.9rem', margin: '2px 0' }}>@MirrorLiveTrades_VIP</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Live 24/7 Account Managers</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 179, 0, 0.12)',
                    border: '1px solid rgba(255, 179, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffb300',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}>
                    🏛
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff' }}>Headquarters</div>
                    <div style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: '2px 0' }}>71-75 Shelton Street, Covent Garden, London, UK</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Company Reg #12894103</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px', background: 'rgba(0, 242, 254, 0.04)' }}>
              <div style={{ fontWeight: '700', color: '#00f2fe', marginBottom: '6px' }}>🛡 Security Note</div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Mirror Live Trades staff will NEVER ask for your wallet private keys or security passwords. Always verify official domains.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="glass-card" style={{ padding: '40px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 230, 118, 0.15)',
                  border: '2px solid #00e676',
                  color: '#00e676',
                  fontSize: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
                  Thank you for reaching out. An institutional support manager will respond to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                  Send Us A Direct Message
                </h3>

                <div>
                  <label style={labelStyle}>Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alexander Vance"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Your Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="investor@domain.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Inquiry Category</label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    style={inputStyle}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Deposit & Payouts">Deposit & Payouts</option>
                    <option value="Master Trader Copying">Master Trader Copying</option>
                    <option value="VIP Institutional Accounts">VIP Institutional Accounts</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="How can we assist you?"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '14px', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
                  Send Support Message ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
