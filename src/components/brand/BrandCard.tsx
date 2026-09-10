import React from 'react';
import { Link } from 'react-router-dom';
import { Brand } from '../../data/brands';
import { BrandLogoImage } from './BrandLogoImage';
import { ArrowLeft } from 'lucide-react';

interface BrandCardProps {
  brand: Brand;
  compact?: boolean;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand, compact = false }) => {
  return (
    <Link
      to={`/brands/${brand.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: compact ? '1.5rem 1rem' : '2.5rem 1.5rem',
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-subtle)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        textDecoration: 'none'
      }}
      className="brand-card-hover"
    >
      {/* Brand SVG Logo */}
      <div style={{ marginBottom: '1.25rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <BrandLogoImage brandId={brand.id} name={brand.name} size={54} />
      </div>

      {/* Brand Name */}
      <h3 style={{ fontSize: compact ? '1rem' : '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
        {brand.name}
      </h3>

      {/* Action link */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.82rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          marginTop: '0.5rem',
          transition: 'color 0.2s'
        }}
        className="brand-action-link"
      >
        <span>مشاهدة الأعمال</span>
        <ArrowLeft size={14} />
      </div>

      <style>{`
        .brand-card-hover:hover {
          transform: translateY(-5px);
          border-color: var(--text-primary);
          box-shadow: var(--shadow-hover);
          background-color: var(--bg-card-hover);
        }
        .brand-card-hover:hover .brand-action-link {
          color: var(--text-primary);
        }
      `}</style>
    </Link>
  );
};
