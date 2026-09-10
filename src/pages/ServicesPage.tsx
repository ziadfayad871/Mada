import React from 'react';
import { SERVICES } from '../data/services';
import { Palette, Camera, PenTool, Share2, TrendingUp, Target, Sparkles, Award } from 'lucide-react';
import { ContactForm } from '../components/ui/ContactForm';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={32} />,
  Camera: <Camera size={32} />,
  PenTool: <PenTool size={32} />,
  Share2: <Share2 size={32} />,
  TrendingUp: <TrendingUp size={32} />,
  Target: <Target size={32} />,
  Sparkles: <Sparkles size={32} />,
  Award: <Award size={32} />
};

export const ServicesPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0', minHeight: '100vh' }}>
      <div className="container">
        {/* Page Header matching design reference screen 5 */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>من الفكرة إلى التنفيذ</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            خدماتنا
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto' }}>
            من الفكرة إلى التنفيذ.. ننجز لك كل ما تحتاجه لبناء علامة تجارية قوية ومؤثرة.
          </p>
        </div>

        {/* 8 Detailed Editorial Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
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
                gap: '1.2rem',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
              className="editorial-service-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  className="srv-icon-wrapper"
                >
                  {iconMap[srv.iconName] || <Sparkles size={32} />}
                </div>

                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-muted)', opacity: 0.4 }}>
                  {srv.number}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {srv.title}
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
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
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <ContactForm />
      </div>
    </div>
  );
};
