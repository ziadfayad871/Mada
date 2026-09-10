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
        لا توجد فيديوهات مرتبطة بهذا البراند حالياً.
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Header Bar with Counter and Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
            فيديوهات هذا المشروع
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            ({videos.length} فيديو احترافي)
          </span>
        </div>

        {/* Counter & Arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            0{selectedIndex + 1} / 0{videos.length}
          </span>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={handlePrev}
              aria-label="السابق"
              className="btn-icon-circle"
              style={{ width: '36px', height: '36px' }}
            >
              <ChevronRight size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="التالي"
              className="btn-icon-circle"
              style={{ width: '36px', height: '36px' }}
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Exhibition Media Frame Container */}
      <div className="main-media-frame">
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
          className="media-play-btn"
          aria-label="تشغيل"
        >
          {isPlaying ? <Pause size={26} /> : <Play size={26} style={{ marginLeft: '3px' }} />}
        </button>

        {/* Fullscreen Modal trigger button */}
        <button
          onClick={() => onOpenModal && onOpenModal(currentVideo)}
          title="تكبير الفيديو"
          className="fullscreen-trigger-btn"
        >
          <Maximize2 size={13} />
          <span>ملء الشاشة</span>
        </button>

        {/* Top Right Duration Pill */}
        <div className="duration-badge-pill">
          {currentVideo.duration}
        </div>

        {/* Bottom Details Overlay */}
        <div className="media-details-bottom">
          <div>
            <div style={{ fontSize: '0.8rem', opacity: 0.85, marginBottom: '0.15rem' }}>
              {brandName} · {currentVideo.category}
            </div>
            <h4 style={{ fontSize: 'clamp(1rem, 3.5vw, 1.35rem)', fontWeight: 700, color: '#FFFFFF' }}>
              {currentVideo.title}
            </h4>
          </div>
        </div>
      </div>

      {/* Horizontal Previews Carousel / Grid */}
      <div className="media-previews-grid">
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
                transform: isSelected ? 'translateY(-2px)' : 'none',
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
                    backgroundColor: isSelected ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Play size={12} style={{ marginLeft: '1px' }} />
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '4px',
                    padding: '1px 5px',
                    borderRadius: '3px',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    color: '#fff',
                    fontSize: '0.68rem',
                    fontWeight: 600
                  }}
                >
                  {vid.duration}
                </div>
              </div>
              <div style={{ padding: '0.5rem 0.65rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {vid.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .main-media-frame {
          position: relative;
          width: 100%;
          max-height: 520px;
          aspect-ratio: 16/9;
          background-color: #1E1610;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-hover);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .media-play-btn {
          position: absolute;
          z-index: 10;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: rgba(251, 248, 243, 0.92);
          backdrop-filter: blur(8px);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
          transition: transform 0.25s ease;
        }
        .fullscreen-trigger-btn {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 10;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-full);
          background-color: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          color: #FFFFFF;
          font-size: 0.78rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .duration-badge-pill {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 10;
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-full);
          background-color: rgba(0, 0, 0, 0.65);
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .media-details-bottom {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          left: 1.25rem;
          z-index: 10;
          color: #FFFFFF;
        }
        .media-previews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 1rem;
        }

        @media (max-width: 600px) {
          .main-media-frame {
            aspect-ratio: 4/3;
            max-height: 280px;
            border-radius: var(--radius-md);
          }
          .media-play-btn {
            width: 52px;
            height: 52px;
          }
          .media-previews-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};
