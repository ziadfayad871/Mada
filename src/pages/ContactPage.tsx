import React from 'react';
import { ContactForm } from '../components/ui/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: 'var(--bg-primary)', 
      padding: '4.5rem 0 6rem', 
      minHeight: '100vh',
      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(197, 160, 89, 0.03) 0%, transparent 50%)',
    }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>نحن هنا لمساعدتك</span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            تواصل معنا
          </h1>
          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '640px', 
            margin: '0 auto',
            lineHeight: 1.75
          }}>
            يسعدنا الاستماع إلى فكرتك ومساعدتك على بناء حملة تسويقية متكاملة تحقق أهدافك وتصنع الفرق.
          </p>
        </div>

        {/* Contact Component Form - Full width editorial design */}
        <ContactForm />

        {/* Additional Info Section */}
        <div style={{ 
          marginTop: '4rem', 
          textAlign: 'center',
          padding: '2.5rem 1.5rem',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-color)'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            هل لديك استفسار سريع؟
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
            تابعنا على منصات التواصل الاجتماعي أو راسلنا مباشرة عبر البريد الإلكتروني أو الواتساب للحصول على رد سريع.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginTop: '1.5rem'
          }}>
            <a 
              href="mailto:madamarking@gmail.com" 
              className="btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              راسلنا عبر البريد
            </a>
            <a 
              href="https://wa.me/966557503280" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
