import React, { useState } from 'react';
import { BRANDS } from '../data/brands';
import { BrandCard } from '../components/brand/BrandCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const BrandsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(BRANDS.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBrands = BRANDS.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0', minHeight: '100vh' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>شركاؤنا في النجاح</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            جميع العلامات التجارية
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto' }}>
            اكتشف أعمالنا مع مختلف العلامات التجارية الرائدة في المملكة والخليج.
          </p>
        </div>

        {/* Brand Grid matching reference screen 3 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3.5rem'
          }}
        >
          {currentBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Pagination Bar matching reference screen 3 (< 1 / 10 >) */}
        {totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginTop: '2rem'
            }}
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="btn-icon-circle"
              style={{ opacity: currentPage === 1 ? 0.4 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
            >
              <ChevronRight size={20} />
            </button>

            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="btn-icon-circle"
              style={{ opacity: currentPage === totalPages ? 0.4 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
