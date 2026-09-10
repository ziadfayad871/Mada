import React from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamCard } from '../components/ui/TeamCard';
import { CertificateSection } from '../components/ui/CertificateModal';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0 0' }}>
      {/* Header & Main Intro */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>قصة مدى</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.2rem' }}>
            من نحن
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '820px', margin: '0 auto' }}>
            مدى هي وكالة تسويق رقمي متخصصة في تقديم حلول متكاملة تساعد العلامات التجارية على الوصول إلى جمهورها وتحقيق نتائج ملموسة من خلال استراتيجيات إبداعية ومحتوى احترافي وحملات إعلانية فعالة.
          </p>
        </div>

        {/* Studio Editorial Photo Banner */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            aspectRatio: '21/9',
            maxHeight: '440px',
            boxShadow: 'var(--shadow-hover)',
            border: '1px solid var(--border-color)'
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="MADA Agency Studio"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(44, 31, 23, 0.6) 0%, rgba(0,0,0,0) 60%)'
            }}
          />
          <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', color: '#FFFFFF' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, margin: 0, color: '#FFFFFF' }}>
              استوديو وبيئة عمل إبداعية متكاملة
            </h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>الرياض · المملكة العربية السعودية</p>
          </div>
        </div>
      </div>

      {/* Three Pillars: رؤيتنا | رسالتنا | لماذا مدى؟ */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* 1. رؤيتنا */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={26} color="var(--accent-warm)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                رؤيتنا
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                أن نكون الشريك التسويقي الأول للعلامات التجارية الطموحة في المملكة العربية السعودية والخليج العربي.
              </p>
            </div>

            {/* 2. رسالتنا */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={26} color="var(--accent-warm)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                رسالتنا
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                تحويل الأفكار إلى قصص مؤثرة وحملات ناجحة تحقق النمو والانتشار المستدام لشركائنا.
              </p>
            </div>

            {/* 3. لماذا مدى؟ */}
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={26} color="var(--accent-warm)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                لماذا مدى؟
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                  فريق متخصص ومبدع
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                  أفكار إبداعية ومبتكرة
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                  نتائج قابلة للقياس
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                  متابعة مستمرة ودقيقة
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                  تقارير دورية وشفافية مطلقة
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-pill" style={{ marginBottom: '1rem' }}>
              <span className="badge-pill-dot" />
              <span>الخبراء والمبدعون</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              فريق العمل
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Certificates Section */}
      <CertificateSection />
    </div>
  );
};
