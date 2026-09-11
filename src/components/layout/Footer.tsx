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
            <p style={{ fontSize: '0.95rem', color: '#B5A596', lineHeight: 1.75, maxWidth: '340px' }}>
              وكالة تسويق رقمي وإنتاج محتوى متخصصة في تقديم حلول متكاملة تساعد العلامات التجارية على تحقيق أهدافها ونتائج ملموسة.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href="https://instagram.com/madamarking1"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8DFD5',
                  transition: 'all 0.2s ease'
                }}
                className="social-link"
              >
                <Instagram size={19} />
              </a>
              <a
                href="https://tiktok.com/@madamarking1"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E8DFD5',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease'
                }}
                className="social-link"
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
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', padding: 0, margin: 0 }}>
              <li><Link to="/" style={{ color: '#B5A596', transition: 'color 0.2s' }} className="footer-link">الرئيسية</Link></li>
              <li><Link to="/about" style={{ color: '#B5A596', transition: 'color 0.2s' }} className="footer-link">من نحن</Link></li>
              <li><Link to="/services" style={{ color: '#B5A596', transition: 'color 0.2s' }} className="footer-link">خدماتنا</Link></li>
              <li><Link to="/works" style={{ color: '#B5A596', transition: 'color 0.2s' }} className="footer-link">أعمالنا</Link></li>
              <li><Link to="/brands" style={{ color: '#B5A596', transition: 'color 0.2s' }} className="footer-link">العلامات التجارية</Link></li>
              <li><Link to="/contact" style={{ color: '#B5A596', transition: 'color 0.2s' }} className="footer-link">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ color: '#FBF8F3', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              خدماتنا الرئيسية
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: '#B5A596', padding: 0, margin: 0 }}>
              <li>التصميم الجرافيكي والإبداعي</li>
              <li>التصوير والإنتاج المرئي</li>
              <li>صناعة المحتوى الإبداعي</li>
              <li>إدارة حسابات التواصل الاجتماعي</li>
              <li>إدارة الحملات الإعلانية</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 style={{ color: '#FBF8F3', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              تواصل معنا
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.9rem', color: '#B5A596' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={17} color="var(--accent-gold)" />
                <span style={{ direction: 'ltr' }}>055 750 3280 / 053 113 4919</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={17} color="var(--accent-gold)" />
                <span>madamarking@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MapPin size={17} color="var(--accent-gold)" />
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
            جميع الحقوق محفوظة © {new Date().getFullYear()} وكالة مدى للتسويق الرقمي
          </div>
          <div>
            تصميم وتطوير هادئ وفاخر للعلامات السعودية
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--accent-gold);
        }
        .social-link:hover {
          background-color: rgba(197, 160, 89, 0.2);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};
