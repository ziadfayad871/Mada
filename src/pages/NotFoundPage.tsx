import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '6rem', fontWeight: 800, color: 'var(--accent-warm)', lineHeight: 1 }}>404</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>
          الصفحة غير موجودة
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link to="/" className="btn-primary">
          <span>العودة للرئيسية</span>
          <ArrowLeft size={18} />
        </Link>
      </div>
    </div>
  );
};
