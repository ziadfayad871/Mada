import React from 'react';
import { BRANDS } from '../../data/brands';
import { BrandCard } from './BrandCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BrandGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showMoreButton?: boolean;
}

export const BrandGrid: React.FC<BrandGridProps> = ({
  title = "أعمالنا وشركاؤنا",
  subtitle = "شركات وعلامات تجارية وثقت بنا لتحقيق النمو والانتشار",
  limit,
  showMoreButton = true
}) => {
  const displayBrands = limit ? BRANDS.slice(0, limit) : BRANDS;

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>شركاء النجاح</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            {title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto' }}>
            {subtitle}
          </p>
        </div>

        {/* Brands Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {displayBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* View All Brands Button */}
        {showMoreButton && limit && limit < BRANDS.length && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/brands" className="btn-secondary">
              <span>جميع العلامات التجارية</span>
              <ArrowLeft size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
