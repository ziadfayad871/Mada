import React from 'react';
import { VideoItem } from '../../data/videos';
import { Play } from 'lucide-react';

interface VideoCardProps {
  video: VideoItem;
  onClick: (video: VideoItem) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div
      onClick={() => onClick(video)}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-subtle)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column'
      }}
      className="video-card"
    >
      {/* Thumbnail Container */}
      <div style={{ position: 'relative', aspectRatio: '9/16', overflow: 'hidden', backgroundColor: '#1E1610' }}>
        {video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            className="thumbnail-img"
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #2a1f15 0%, #1a1410 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#C4993B', opacity: 0.6 }}>
              {video.brandName}
            </span>
          </div>
        )}

        {/* Dark Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)'
          }}
        />

        {/* Play Icon Badge */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'rgba(196, 153, 59, 0.9)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(196, 153, 59, 0.4)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(4px)',
              border: '2px solid rgba(255,255,255,0.3)'
            }}
            className="play-badge"
          >
            <Play size={22} style={{ marginLeft: '3px' }} fill="currentColor" />
          </div>
        </div>

        {/* Duration Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            padding: '3px 8px',
            borderRadius: '4px',
            backgroundColor: 'rgba(0,0,0,0.75)',
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 600
          }}
        >
          {video.duration}
        </div>

        {/* Category Pill */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            padding: '3px 10px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: 'var(--text-primary)',
            fontSize: '0.72rem',
            fontWeight: 700
          }}
        >
          {video.category}
        </div>
      </div>

      {/* Info Container */}
      <div style={{ padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1 }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-warm)' }}>
          {video.brandName}
        </div>
        <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>
          {video.title}
        </h4>
      </div>

      <style>{`
        .video-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--text-muted);
        }
        .video-card:hover .thumbnail-img {
          transform: scale(1.05);
        }
        .video-card:hover .play-badge {
          transform: scale(1.15);
          background-color: var(--text-primary);
          color: var(--bg-primary);
        }
      `}</style>
    </div>
  );
};
