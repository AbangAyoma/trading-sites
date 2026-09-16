import React, { useState } from 'react';
import { mockFAQS } from '../data/mockData';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '16px' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
            Everything you need to know about automated copy trading, deposit safety, and withdrawal processing.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {mockFAQS.map((faq, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '24px',
                cursor: 'pointer',
              }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: '700',
                fontSize: '1.1rem',
                color: openIndex === index ? '#00f2fe' : '#fff',
              }}>
                <span>{faq.question}</span>
                <span style={{ fontSize: '1.4rem' }}>{openIndex === index ? '−' : '+'}</span>
              </div>

              {openIndex === index && (
                <div style={{
                  marginTop: '16px',
                  color: '#94a3b8',
                  lineHeight: '1.7',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '16px',
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
