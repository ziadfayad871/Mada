import React from 'react';
import { SERVICES } from '../data/services';
import { Palette, Camera, PenTool, Share2, TrendingUp, Target, Award, Clapperboard, Lightbulb } from 'lucide-react';
import { ContactForm } from '../components/ui/ContactForm';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={32} />,
  Camera: <Camera size={32} />,
  PenTool: <PenTool size={32} />,
  Share2: <Share2 size={32} />,
  TrendingUp: <TrendingUp size={32} />,
  Target: <Target size={32} />,
  Award: <Award size={32} />,
  Clapperboard: <Clapperboard size={32} />,
  Lightbulb: <Lightbulb size={32} />
};

export const ServicesPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0 5rem', minHeight: '100vh' }}>
      <div className="container">
        {/* Page Header matching design reference */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>من الفكرة إلى التنفيذ</span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            خدماتنا
          </h1>
          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '680px', 
            margin: '0 auto',
            lineHeight: 1.75
          }}>
            من الفكرة إلى التنفيذ.. ننجز لك كل ما تحتاجه لبناء علامة تجارية قوية ومؤثرة تحقق أهدافك وتترك أثراً مميزاً.
          </p>
        </div>

        {/* 8 Detailed Editorial Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '2rem',
            marginBottom: '6rem'
          }}
        >
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
              className="editorial-service-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  className="srv-icon-wrapper"
                >
                  {iconMap[srv.iconName] || <Sparkles size={32} />}
                </div>

                <span style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 800, 
                  color: 'var(--text-muted)', 
                  opacity: 0.35,
                  lineHeight: 1 
                }}>
                  {srv.number}
                </span>
              </div>

              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: 'var(--text-primary)',
                lineHeight: 1.3,
                margin: 0
              }}>
                {srv.title}
              </h3>

              <p style={{ 
                fontSize: '0.98rem', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.75,
                margin: 0
              }}>
                {srv.fullDescription}
              </p>

              <style>{`
                .editorial-service-card:hover {
                  transform: translateY(-6px);
                  box-shadow: var(--shadow-hover);
                  border-color: var(--text-primary);
                }
                .editorial-service-card:hover .srv-icon-wrapper {
                  background-color: var(--text-primary);
                  color: var(--bg-primary);
                  transform: scale(1.05);
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
              fontWeight: 700, 
              color: 'var(--text-primary)', 
              marginBottom: '0.75rem' 
            }}>
              هل أنت مستعد لبدء مشروعك؟
            </h2>
            <p style={{ 
              fontSize: '1.05rem', 
              color: 'var(--text-secondary)', 
              maxWidth: '560px', 
              margin: '0 auto' 
            }}>
              تواصل معنا الآن ودعنا نساعدك في تحويل فكرتك إلى واقع ناجح.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
