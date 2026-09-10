import React, { useState } from 'react';
import { LicenseItem, LICENSES } from '../../data/licenses';
import { ShieldCheck, FileCheck, X, QrCode, ExternalLink } from 'lucide-react';

export const CertificateSection: React.FC = () => {
  const [selectedLicense, setSelectedLicense] = useState<LicenseItem | null>(null);

  const getIcon = (iconName: string) => {
    if (iconName === 'ShieldCheck') return <ShieldCheck size={28} color="var(--accent-gold)" />;
    return <FileCheck size={28} color="var(--accent-gold)" />;
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>الاعتمادات والتراخيص</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            التراخيص والشهادات
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            وكالة مدى حاصلة على التراخيص الرسمية المعتمدة في المملكة العربية السعودية لإدارة وإنتاج المحتوى والتسويق الرقمي.
          </p>
        </div>

        {/* 2 License Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          {LICENSES.map((lic) => (
            <div
              key={lic.id}
              onClick={() => setSelectedLicense(lic)}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
              className="license-card"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-gold-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getIcon(lic.iconName)}
                </div>

                <div
                  style={{
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--bg-secondary)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)'
                  }}
                >
                  ترخيص معتمد
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {lic.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-warm)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {lic.authority}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {lic.description}
                </p>
              </div>

              {/* QR Code and Reference Footer */}
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img
                    src={lic.qrPlaceholder}
                    alt="QR Verification"
                    style={{ width: '48px', height: '48px', borderRadius: '6px', border: '1px solid var(--border-color)' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>رقم الترخيص</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>{lic.issueNumber}</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <span>تكبير الشهادة</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged Certificate View */}
        {selectedLicense && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: 'rgba(30, 22, 16, 0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeIn 0.2s ease'
            }}
            onClick={() => setSelectedLicense(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '650px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--border-color)',
                textAlign: 'center'
              }}
            >
              <button
                onClick={() => setSelectedLicense(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>

              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-gold-light)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {getIcon(selectedLicense.iconName)}
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {selectedLicense.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-warm)', fontWeight: 600, marginBottom: '1.25rem' }}>
                {selectedLicense.authority}
              </p>

              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  marginBottom: '1.5rem',
                  textAlign: 'right'
                }}
              >
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {selectedLicense.description}
                </p>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  الرقم التسجلي: {selectedLicense.issueNumber}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <img
                  src={selectedLicense.qrPlaceholder}
                  alt="QR Code"
                  style={{ width: '100px', height: '100px', borderRadius: '8px', border: '1px solid var(--border-color)' }}
                />
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    رمز التحقق الإلكتروني المعتمد
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    يمكنك مسح الكود أعلاه للتحقق المباشر من صحة الترخيص
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .license-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: var(--text-primary);
        }
      `}</style>
    </section>
  );
};
