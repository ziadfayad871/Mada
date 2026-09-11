import React from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamCard } from '../components/ui/TeamCard';
import { CertificateSection } from '../components/ui/CertificateModal';
import { Target, Compass, CheckCircle2, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/achievements';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0 0' }}>
      {/* Header & Main Intro */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>قصة مدى</span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            من نحن
          </h1>
          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.8, 
            maxWidth: '860px', 
            margin: '0 auto' 
          }}>
            مدى هي وكالة تسويق رقمي وإنتاج محتوى متخصصة في تقديم حلول متكاملة تساعد العلامات التجارية على الوصول إلى جمهورها وتحقيق نتائج ملموسة من خلال استراتيجيات إبداعية ومحتوى احترافي وحملات إعلانية فعالة.
          </p>
        </div>

        {/* Studio Editorial Photo Banner */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            aspectRatio: '21/9',
            maxHeight: '480px',
            boxShadow: 'var(--shadow-hover)',
            border: '1px solid var(--border-color)'
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85"
            alt="MADA Agency Studio"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(44, 31, 23, 0.7) 0%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0.25) 100%)'
            }}
          />
          <div style={{ 
            position: 'absolute', 
            bottom: '2.5rem', 
            right: '2.5rem', 
            color: '#FFFFFF',
            maxWidth: '520px'
          }}>
            <h3 style={{ 
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', 
              fontWeight: 700, 
              margin: '0 0 0.5rem 0', 
              color: '#FFFFFF',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}>
              استوديو وبيئة عمل إبداعية متكاملة
            </h3>
            <p style={{ 
              fontSize: '0.95rem', 
              opacity: 0.9, 
              margin: 0,
              textShadow: '0 1px 4px rgba(0,0,0,0.4)'
            }}>
              الرياض · المملكة العربية السعودية
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Stats Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}>
              إنجازاتنا بالأرقام
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              نفتخر بما حققناه من نجاحات مع شركائنا
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem'
            }}
          >
            {ACHIEVEMENTS.map((achievement) => (
              <div
                key={achievement.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '2.5rem 2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                className="achievement-card"
              >
                <div style={{ 
                  fontSize: 'clamp(2.2rem, 5vw, 3rem)', 
                  fontWeight: 800, 
                  color: 'var(--accent-warm)',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>
                  {achievement.number}
                </div>
                <div style={{ 
                  fontSize: '1.15rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)',
                  marginBottom: '0.35rem'
                }}>
                  {achievement.label}
                </div>
                {achievement.sublabel && (
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-muted)',
                    lineHeight: 1.5
                  }}>
                    {achievement.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars: رؤيتنا | رسالتنا | لماذا مدى؟ */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}>
              قيمنا ورؤيتنا
            </h2>
          </div>

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
                gap: '1.25rem',
                transition: 'all 0.3s ease'
              }}
              className="pillar-card"
            >
              <div style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--accent-gold-light)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <Compass size={28} color="var(--accent-warm)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                رؤيتنا
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                أن نكون الشريك التسويقي الأول للعلامات التجارية الطموحة في المملكة العربية السعودية والخليج العربي، ونصنع معهم قصص نجاح ملهمة.
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
                gap: '1.25rem',
                transition: 'all 0.3s ease'
              }}
              className="pillar-card"
            >
              <div style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--accent-gold-light)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <Target size={28} color="var(--accent-warm)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                رسالتنا
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                تحويل الأفكار إلى قصص مؤثرة وحملات ناجحة تحقق النمو والانتشار المستدام لشركائنا من خلال الإبداع والاحترافية.
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
                gap: '1.25rem',
                transition: 'all 0.3s ease'
              }}
              className="pillar-card"
            >
              <div style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--accent-gold-light)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <CheckCircle2 size={28} color="var(--accent-warm)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                لماذا مدى؟
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.75rem', 
                fontSize: '1rem', 
                color: 'var(--text-secondary)',
                padding: 0,
                margin: 0
              }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }} />
                  فريق متخصص ومبدع
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }} />
                  أفكار إبداعية ومبتكرة
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }} />
                  نتائج قابلة للقياس
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }} />
                  متابعة مستمرة ودقيقة
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }} />
                  شفافية مطلقة وتقارير دورية
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-pill" style={{ marginBottom: '1rem' }}>
              <span className="badge-pill-dot" />
              <span>الخبراء والمبدعون</span>
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}>
              فريق العمل
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              نخبة من المحترفين الشغوفين بصناعة المحتوى والإبداع
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              maxWidth: '800px',
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

      <style>{`
        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: var(--accent-warm);
        }
        .pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};
