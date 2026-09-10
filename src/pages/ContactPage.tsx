import React from 'react';
import { ContactForm } from '../components/ui/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0 6rem', minHeight: '100vh' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>نحن هنا لمساعدتك</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            تواصل معنا
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto' }}>
            يسعدنا مناقشة فكرتك ومساعدتك على بناء حملة تسويقية متكاملة تحقق أهدافك.
          </p>
        </div>

        {/* Contact Component Form */}
        <ContactForm />
      </div>
    </div>
  );
};
