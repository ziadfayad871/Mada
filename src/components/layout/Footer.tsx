import React from 'react';
import { Link } from 'react-router-dom';
import { MadaLogo } from '../common/MadaLogo';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: '#E8DFD5',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid var(--border-dark)',
        marginTop: 'auto'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Col 1: Logo & Agency Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <MadaLogo variant="light" size="md" />
            <p style={{ fontSize: '0.9rem', color: '#B5A596', lineHeight: 1.7, maxWidth: '320px' }}>
              وكالة تسويق رقمي متخصصة في تقديم حلول متكاملة تساعد العلامات التجارية على الوصول إلى جمهورها وتحقيق نتائج ملموسة.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href="https://instagram.com/madamarking1"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8DFD5',
                  transition: 'all 0.2s ease'
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://tiktok.com/@madamarking1"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8DFD5',
                  fontSize: '0.85rem',
                  fontWeight: 700
                }}
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FBF8F3', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              روابط سريعة
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li><Link to="/" style={{ color: '#B5A596', transition: 'color 0.2s' }}>الرئيسية</Link></li>
              <li><Link to="/about" style={{ color: '#B5A596', transition: 'color 0.2s' }}>من نحن</Link></li>
              <li><Link to="/services" style={{ color: '#B5A596', transition: 'color 0.2s' }}>خدماتنا</Link></li>
              <li><Link to="/works" style={{ color: '#B5A596', transition: 'color 0.2s' }}>أعمالنا</Link></li>
              <li><Link to="/team" style={{ color: '#B5A596', transition: 'color 0.2s' }}>فريق العمل</Link></li>
              <li><Link to="/contact" style={{ color: '#B5A596', transition: 'color 0.2s' }}>تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ color: '#FBF8F3', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              خدماتنا الرئيسية
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: '#B5A596' }}>
              <li>التصميم الجرافيكي</li>
              <li>التصوير والإنتاج المرئي</li>
              <li>صناعة المحتوى الإبداعي</li>
              <li>إدارة حسابات التواصل الاجتماعي</li>
              <li>إدارة الحملات الإعلانية المدفوعة</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 style={{ color: '#FBF8F3', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              تواصل معنا
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#B5A596' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="var(--accent-gold)" />
                <span>055 750 3280 / 053 113 4919</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="var(--accent-gold)" />
                <span>madamarking@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={16} color="var(--accent-gold)" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#8C7A6D'
          }}
        >
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} وكالة مدى للتسويق الرقمي MADA
          </div>
          <div>
            تصميم وتطوير هادئ وفاخر للعلامات السعودية
          </div>
        </div>
      </div>
    </footer>
  );
};
