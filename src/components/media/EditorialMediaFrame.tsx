import React, { useState } from 'react';
import { VideoItem } from '../../data/videos';
import { Play, Pause, ChevronRight, ChevronLeft, Maximize2 } from 'lucide-react';

interface EditorialMediaFrameProps {
  videos: VideoItem[];
  brandName: string;
  onOpenModal?: (video: VideoItem) => void;
}

export const EditorialMediaFrame: React.FC<EditorialMediaFrameProps> = ({
  videos,
  brandName,
  onOpenModal
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  if (!videos || videos.length === 0) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        لا توجد فيديوهات مرتبطة بهذ البراند حالياً.
      </div>
    );
  }

  const currentVideo = videos[selectedIndex] || videos[0];

  const handlePrev = () => {
    setIsPlaying(false);
    setSelectedIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setSelectedIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Bar with Counter and Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            فيديوهات هذا المشروع
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            ({videos.length} فيديو احترافي)
          </span>
        </div>

        {/* Counter & Arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            0{selectedIndex + 1} / 0{videos.length}
          </span>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={handlePrev}
              aria-label="السابق"
              className="btn-icon-circle"
              style={{ width: '38px', height: '38px' }}
            >
              <ChevronRight size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="التالي"
              className="btn-icon-circle"
              style={{ width: '38px', height: '38px' }}
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Exhibition Media Frame */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxHeight: '520px',
          aspectRatio: '16/9',
          backgroundColor: '#1E1610',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-hover)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <video
          ref={videoRef}
          src={currentVideo.videoUrl}
          poster={currentVideo.thumbnail}
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Media Overlay Gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(30, 22, 16, 0.85) 0%, rgba(30, 22, 16, 0.1) 60%, rgba(0,0,0,0.2) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Center Play Button Overlay */}
        <button
          onClick={togglePlay}
          style={{
            position: 'absolute',
            zIndex: 10,
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'rgba(251, 248, 243, 0.9)',
            backdropFilter: 'blur(8px)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            transition: 'transform 0.25s ease'
          }}
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '3px' }} />}
        </button>

        {/* Fullscreen Modal trigger button */}
        <button
          onClick={() => onOpenModal && onOpenModal(currentVideo)}
          title="تكبير الفيديو"
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            zIndex: 10,
            padding: '0.6rem 1rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(6px)',
            color: '#FFFFFF',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <Maximize2 size={14} />
          <span>مشاهدة ملء الشاشة</span>
        </button>

        {/* Top Right Duration Pill */}
        <div
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            padding: '0.35rem 0.8rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            color: '#FFFFFF',
            fontSize: '0.8rem',
            fontWeight: 600
          }}
        >
          {currentVideo.duration}
        </div>

        {/* Bottom Details Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '1.5rem',
            left: '1.5rem',
            zIndex: 10,
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.2rem' }}>
              {brandName} · {currentVideo.category}
            </div>
            <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF' }}>
              {currentVideo.title}
            </h4>
          </div>
        </div>
      </div>

      {/* Horizontal Previews Carousel Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {videos.map((vid, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <div
              key={vid.id}
              onClick={() => {
                setIsPlaying(false);
                setSelectedIndex(idx);
              }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                border: isSelected ? '2px solid var(--text-primary)' : '1px solid var(--border-color)',
                transform: isSelected ? 'translateY(-3px)' : 'none',
                transition: 'all 0.25s ease',
                backgroundColor: 'var(--bg-card)'
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: isSelected ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Play size={14} style={{ marginLeft: '1px' }} />
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '6px',
                    right: '6px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 600
                  }}
                >
                  {vid.duration}
                </div>
              </div>
              <div style={{ padding: '0.6rem 0.75rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {vid.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
