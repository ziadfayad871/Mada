import React from 'react';
import { MessageCircle } from 'lucide-react';

export const DevWatermark: React.FC = () => {
  return (
    <a
      href="https://wa.me/201206539610"
      target="_blank"
      rel="noreferrer"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '1.25rem',
        zIndex: 998,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'rgba(30, 22, 16, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(196, 153, 59, 0.3)',
        color: '#E8DFD5',
        fontSize: '0.78rem',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        letterSpacing: '0.02em',
        cursor: 'pointer'
      }}
      className="dev-watermark"
      title="تواصل معي عبر واتساب"
    >
      <MessageCircle size={14} color="#C4993B" />
      <span style={{ direction: 'ltr', unicodeBidi: 'embed' }}>
        <span style={{ color: '#C4993B', fontWeight: 700 }}>Dev/</span>
        <span>Ziad Youssef</span>
      </span>
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: '#4CAF50',
        animation: 'pulse-dot 2s ease infinite'
      }} />
    </a>
  );
};
