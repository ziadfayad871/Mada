import React from 'react';
import { ServiceItem } from '../../data/services';
import { Palette, Camera, PenTool, Share2, TrendingUp, Target, Sparkles, Award } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={26} />,
  Camera: <Camera size={26} />,
  PenTool: <PenTool size={26} />,
  Share2: <Share2 size={26} />,
  TrendingUp: <TrendingUp size={26} />,
  Target: <Target size={26} />,
  Sparkles: <Sparkles size={26} />,
  Award: <Award size={26} />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        padding: '2.2rem 1.8rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
      className="service-card"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            width: '54px',
            height: '54px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="service-icon"
        >
          {iconMap[service.iconName] || <Sparkles size={26} />}
        </div>
        <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)', opacity: 0.6 }}>
          {service.number}
        </span>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
        {service.title}
      </h3>

      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {service.shortDescription}
      </p>

      <style>{`
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--text-muted);
        }
        .service-card:hover .service-icon {
          background-color: var(--text-primary);
          color: var(--bg-primary);
        }
      `}</style>
    </div>
  );
};
