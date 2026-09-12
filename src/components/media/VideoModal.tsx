import React, { useEffect, useRef } from 'react';
import { VideoItem } from '../../data/videos';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface VideoModalProps {
  video: VideoItem | null;
  videosList?: VideoItem[];
  onClose: () => void;
  onSelectVideo?: (video: VideoItem) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  videosList = [],
  onClose,
  onSelectVideo
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  const currentIndex = videosList.findIndex((v) => v.id === video.id);

  const handlePrev = () => {
    if (currentIndex > 0 && onSelectVideo) {
      onSelectVideo(videosList[currentIndex - 1]);
    } else if (videosList.length > 0 && onSelectVideo) {
      onSelectVideo(videosList[videosList.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < videosList.length - 1 && onSelectVideo) {
      onSelectVideo(videosList[currentIndex + 1]);
    } else if (videosList.length > 0 && onSelectVideo) {
      onSelectVideo(videosList[0]);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        backgroundColor: 'rgba(15, 10, 6, 0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          backgroundColor: 'var(--bg-dark)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
          border: '1px solid var(--border-dark)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF'
          }}
        >
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>
              {video.brandName}
            </span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
              {video.title}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {videosList.length > 0 && (
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                {currentIndex + 1} من {videosList.length}
              </span>
            )}

            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div style={{ position: 'relative', aspectRatio: '9/16', maxHeight: '75vh', backgroundColor: '#000' }}>
          {video.videoUrl.includes('drive.google.com') ? (
            <iframe
              src={video.videoUrl}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay"
              allowFullScreen
              title={video.title}
            />
          ) : video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
            <iframe
              src={video.videoUrl.includes('/shorts/') 
                ? `https://www.youtube.com/embed/${video.videoUrl.split('/shorts/')[1].split('?')[0]}`
                : `https://www.youtube.com/embed/${video.videoUrl.split('v=')[1]?.split('&')[0] || video.videoUrl.split('/').pop()}`}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.thumbnail}
              controls
              preload="metadata"
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          )}
        </div>

        {/* Modal Bottom Controls Bar */}
        {videosList.length > 1 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(0,0,0,0.3)'
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              <ChevronRight size={20} />
              <span>الفيديو السابق</span>
            </button>

            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
              مدة الفيديو: {video.duration}
            </div>

            <button
              onClick={handleNext}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              <span>الفيديو التالي</span>
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
