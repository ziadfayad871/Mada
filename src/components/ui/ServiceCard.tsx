import React from 'react';
import { ServiceItem } from '../../data/services';
import { Palette, Camera, PenTool, Share2, TrendingUp, Target, Sparkles, Award } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={24} />,
  Camera: <Camera size={24} />,
  PenTool: <PenTool size={24} />,
  Share2: <Share2 size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Target: <Target size={24} />,
  Sparkles: <Sparkles size={24} />,
  Award: <Award size={24} />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        padding: '1.8rem 1.4rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
      className="service-card"
    >
      {/* Top Bar with Number & Icon matching design-reference.png */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', opacity: 0.7 }}>
          {service.number}
        </span>
        
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          className="service-icon"
        >
          {iconMap[service.iconName] || <Sparkles size={24} />}
        </div>
      </div>

      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
        {service.title}
      </h3>

      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {service.shortDescription}
      </p>

      <style>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: var(--text-primary);
        }
        .service-card:hover .service-icon {
          background-color: var(--text-primary);
          color: var(--bg-primary);
        }
      `}</style>
    </div>
  );
};
