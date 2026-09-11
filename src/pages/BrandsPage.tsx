import React, { useState } from 'react';
import { BRANDS } from '../data/brands';
import { BrandCard } from '../components/brand/BrandCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const BrandsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(BRANDS.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBrands = BRANDS.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0 5rem', minHeight: '100vh' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>شركاؤنا في النجاح</span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            جميع العلامات التجارية
          </h1>
          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '640px', 
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            شركات وعلامات تجارية رائدة في المملكة والخليج وثقت بمدى لتحويل أفكارهم إلى حملات ناجحة ومحتوى مؤثر.
          </p>
        </div>

        {/* Brand Grid - Clean layout matching design reference */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          {currentBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '3rem'
            }}
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="btn-icon-circle"
              style={{ 
                opacity: currentPage === 1 ? 0.3 : 1, 
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                pointerEvents: currentPage === 1 ? 'none' : 'auto'
              }}
              aria-label="الصفحة السابقة"
            >
              <ChevronRight size={20} />
            </button>

            <span style={{ 
              fontSize: '1rem', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              minWidth: '60px',
              textAlign: 'center'
            }}>
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="btn-icon-circle"
              style={{ 
                opacity: currentPage === totalPages ? 0.3 : 1, 
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                pointerEvents: currentPage === totalPages ? 'none' : 'auto'
              }}
              aria-label="الصفحة التالية"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
