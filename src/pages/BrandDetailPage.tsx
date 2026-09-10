import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BRANDS } from '../data/brands';
import { VIDEOS, VideoItem } from '../data/videos';
import { BrandLogoImage } from '../components/brand/BrandLogoImage';
import { EditorialMediaFrame } from '../components/media/EditorialMediaFrame';
import { VideoModal } from '../components/media/VideoModal';
import { ArrowRight, Sparkles, FolderOpen } from 'lucide-react';

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
      <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Link to="/brands" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>أعمالنا</Link>
            <span>/</span>
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
              color: 'var(--text-primary)'
            }}
          >
            <ArrowRight size={16} />
            <span>العودة إلى جميع العلامات</span>
          </Link>
        </div>
      </div>

      {/* Brand Hero Showcase Header */}
      <section style={{ padding: '3.5rem 0 2rem' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem 2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-subtle)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Brand Identity & Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <BrandLogoImage brandId={brand.id} name={brand.name} size={64} />
                </div>
                <div>
                  <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    {brand.name}
                  </h1>
                  {brand.englishName && (
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>
                      {brand.englishName}
                    </div>
                  )}
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {brand.description}
              </p>

              {/* Service Tags Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {brand.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      border: '1px solid var(--border-color-light)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Brand Campaign Cover Image */}
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
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%)'
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', color: '#FFFFFF', display: 'flex', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{brand.stats.videosCount}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>فيديو إنتاجي</div>
                </div>
                {brand.stats.reach && (
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{brand.stats.reach}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>وصول كلي</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MAIN EDITORIAL MEDIA FRAME / DIGITAL GALLERY
      ================================================== */}
      <section style={{ padding: '2rem 0 4rem' }}>
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
    </div>
  );
};
