import React, { useState } from 'react';

interface AuthPageProps {
  navigate?: (path: string) => void;
}

export const LoginPage: React.FC<AuthPageProps> = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigate = (path: string) => {
    if (navigate) {
      navigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    handleNavigate('/dashboard');
  };

  return (
    <div style={{ padding: '80px 0', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '440px' }}>
        <div className="glass-card" style={{ padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '8px' }}>
              Investor <span className="gradient-text">Portal Login</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Access your real-time automated mirror portfolio.
            </p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '8px' }}>
                Account Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="investor@domain.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(4, 7, 13, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '8px' }}>
                Security Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(4, 7, 13, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  outline: 'none',
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '10px', border: 'none', cursor: 'pointer' }}>
              Sign In to Mirror Account
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.85rem', color: '#94a3b8' }}>
            Don't have an account?{' '}
            <button
              onClick={() => handleNavigate('/register')}
              style={{ background: 'none', border: 'none', color: '#00f2fe', fontWeight: '600', cursor: 'pointer', padding: 0 }}
            >
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RegisterPage: React.FC<AuthPageProps> = ({ navigate }) => {
  const [formData, setFormData] = useState({
    currency: 'USD',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    state: '',
    city: '',
    country: 'Afghanistan',
    agreeTerms: false,
  });

  const handleNavigate = (path: string) => {
    if (navigate) {
      navigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('Please accept the Terms of Service to proceed.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    handleNavigate('/dashboard');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    background: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    outline: 'none',
    fontSize: '0.9rem',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#94a3b8',
    marginBottom: '6px',
  };

  return (
    <div style={{ padding: '60px 0', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff' }}>
            Create An Account
          </h2>
        </div>

        <div className="glass-card" style={{
          padding: '40px',
          background: 'rgba(15, 23, 42, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
        }}>
          <form onSubmit={handleRegister}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px 24px',
              marginBottom: '28px',
            }}>
              {/* Row 1 */}
              <div>
                <label style={labelStyle}>Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Row 2 */}
              <div>
                <label style={labelStyle}>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Row 3 */}
              <div>
                <label style={labelStyle}>Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>State</label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>City</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Row 4 */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="India">India</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="South Africa">South Africa</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                </select>
              </div>
            </div>

            {/* Checkbox */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '28px',
            }}>
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                style={{ accentColor: '#00f2fe', width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <label htmlFor="agreeTerms" style={{ fontSize: '0.85rem', color: '#00f2fe', cursor: 'pointer' }}>
                I Declare That The Information Provided Is Correct And Accept All Terms Of Service
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '50px',
                background: 'linear-gradient(90deg, #ff007a 0%, #7928ca 50%, #4facfe 100%)',
                color: '#fff',
                fontWeight: '800',
                fontSize: '1rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(121, 40, 202, 0.4)',
                transition: 'transform 0.2s',
              }}
            >
              CREATE MY ACCOUNT
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.85rem', color: '#94a3b8' }}>
            Already registered?{' '}
            <button
              onClick={() => handleNavigate('/login')}
              style={{ background: 'none', border: 'none', color: '#00f2fe', fontWeight: '600', cursor: 'pointer', padding: 0 }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
