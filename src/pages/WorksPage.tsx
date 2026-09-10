import React, { useState } from 'react';
import { VIDEOS, VideoItem } from '../data/videos';
import { BRANDS } from '../data/brands';
import { VideoCard } from '../components/media/VideoCard';
import { VideoModal } from '../components/media/VideoModal';
import { BrandCard } from '../components/brand/BrandCard';
import { Filter } from 'lucide-react';

export const WorksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);

  const categories = ['الكل', 'فيديو', 'تصوير', 'حملات', 'محتوى'];

  const filteredVideos = selectedCategory === 'الكل'
    ? VIDEOS
    : VIDEOS.filter((v) => v.category === selectedCategory);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0', minHeight: '100vh' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>معرض الإنتاج والإبداع</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            أعمالنا
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto' }}>
            مجموعة متكاملة من المشاريع، الحملات، والإنتاج المرئي الذي نفذته مدى للعلامات التجارية الطموحة.
          </p>
        </div>

        {/* Section 1: العلامات التجارية */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              العلامات التجارية
            </h2>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              ({BRANDS.length} علامة تجارية)
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {BRANDS.slice(0, 5).map((b) => (
              <BrandCard key={b.id} brand={b} compact />
            ))}
          </div>
        </div>

        {/* Section 2: 21 فيديو احترافي + Filter Pills */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                21 فيديو احترافي
              </h2>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                عرض {filteredVideos.length} من أصل 21 فيديو
              </span>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Filter size={18} color="var(--text-muted)" style={{ marginLeft: '0.4rem' }} />
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.5rem 1.25rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: isActive ? 'var(--text-primary)' : 'var(--bg-card)',
                      color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 700 : 500,
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Videos Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.8rem'
            }}
          >
            {filteredVideos.map((vid) => (
              <VideoCard
                key={vid.id}
                video={vid}
                onClick={(v) => setActiveModalVideo(v)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeModalVideo && (
        <VideoModal
          video={activeModalVideo}
          videosList={filteredVideos}
          onClose={() => setActiveModalVideo(null)}
          onSelectVideo={(v) => setActiveModalVideo(v)}
        />
      )}
    </div>
  );
};
