import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BRANDS } from '../data/brands';
import { VIDEOS, VideoItem } from '../data/videos';
import { BrandLogoImage } from '../components/brand/BrandLogoImage';
import { EditorialMediaFrame } from '../components/media/EditorialMediaFrame';
import { VideoModal } from '../components/media/VideoModal';
import { ArrowRight, Play, Video } from 'lucide-react';

export const BrandDetailPage: React.FC = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);

  const brand = BRANDS.find((b) => b.slug === brandSlug);

  if (!brand) {
    return <Navigate to="/brands" replace />;
  }

  // Filter all videos belonging to this specific brand
  const brandVideos = VIDEOS.filter((v) => v.brandId === brand.id);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Breadcrumb Header Bar */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', padding: '1.1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Link to="/brands" style={{ color: 'var(--text-secondary)', fontWeight: 600, transition: 'color 0.2s' }} className="breadcrumb-hover">العلامات التجارية</Link>
            <span style={{ color: 'var(--border-color)' }}>←</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{brand.name}</span>
          </div>

          <Link
            to="/brands"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              transition: 'color 0.2s'
            }}
            className="breadcrumb-hover"
          >
            <ArrowRight size={16} />
            <span>جميع العلامات</span>
          </Link>
        </div>
      </div>

      {/* Brand Hero Showcase Header */}
      <section style={{ padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-card)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Brand Identity & Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ 
                  padding: '0.85rem', 
                  backgroundColor: 'var(--bg-primary)', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <BrandLogoImage brandId={brand.id} name={brand.name} size={68} />
                </div>
                <div>
                  <h1 style={{ 
                    fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
                    fontWeight: 800, 
                    color: 'var(--text-primary)', 
                    margin: '0 0 0.25rem 0',
                    letterSpacing: '-0.01em'
                  }}>
                    {brand.name}
                  </h1>
                  {brand.englishName && (
                    <div style={{ 
                      fontSize: '0.95rem', 
                      color: 'var(--text-muted)', 
                      fontWeight: 600, 
                      letterSpacing: '0.03em' 
                    }}>
                      {brand.englishName}
                    </div>
                  )}
                </div>
              </div>

              <p style={{ 
                fontSize: '1.05rem', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.75,
                margin: 0
              }}>
                {brand.description}
              </p>

              {/* Service Tags Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginTop: '0.25rem' }}>
                {brand.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.45rem 1.1rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.83rem',
                      fontWeight: 600,
                      border: '1px solid var(--border-color-light)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Brand Campaign Cover Image with Stats */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                aspectRatio: '16/10',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--border-color)'
              }}
            >
              <img
                src={brand.coverImage}
                alt={brand.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30,22,16,0.75) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.2) 100%)'
                }}
              />
              
              {/* Stats Overlay at bottom */}
              <div style={{ 
                position: 'absolute', 
                bottom: '1.5rem', 
                right: '1.5rem', 
                display: 'flex', 
                gap: '2rem',
                color: '#FFFFFF' 
              }}>
                <div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, lineHeight: 1.1 }}>
                    {brand.stats.videosCount}
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 500 }}>
                    فيديو إنتاجي
                  </div>
                </div>
                {brand.stats.reach && (
                  <div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 800, lineHeight: 1.1 }}>
                      {brand.stats.reach}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 500 }}>
                      وصول كلي
                    </div>
                  </div>
                )}
              </div>

              {/* Play icon indicator */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 250, 244, 0.25)',
                backdropFilter: 'blur(8px)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Play size={26} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MAIN EDITORIAL MEDIA FRAME / DIGITAL GALLERY
      ================================================== */}
      <section style={{ padding: '2.5rem 0 4rem' }}>
        <div className="container">
          <EditorialMediaFrame
            videos={brandVideos}
            brandName={brand.name}
            onOpenModal={(vid) => setModalVideo(vid)}
          />
        </div>
      </section>

      {/* Video Modal Player */}
      {modalVideo && (
        <VideoModal
          video={modalVideo}
          videosList={brandVideos}
          onClose={() => setModalVideo(null)}
          onSelectVideo={(v) => setModalVideo(v)}
        />
      )}

      <style>{`
        .breadcrumb-hover:hover {
          color: var(--accent-warm);
        }
      `}</style>
    </div>
  );
};
