import React from 'react';
import { MadaLogo } from '../components/common/MadaLogo';
import { TEAM_MEMBERS } from '../data/team';

const roleIcons: Record<string, React.ReactNode[]> = {
  'zahra-al-shehri': [],
  'haya-al-ajmi': [],
};

export const TeamPage: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#1a1410',
      minHeight: '100vh',
      padding: '5rem 1.5rem 4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gold curve */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: '-5%',
        width: '40%',
        height: '80%',
        border: '1px solid rgba(196,153,59,0.15)',
        borderRadius: '50% 0 0 0',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            color: '#C4993B',
            fontFamily: "'Cairo', sans-serif",
            margin: 0,
            lineHeight: 1.2
          }}>
            فريق العمل
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
            <MadaLogo variant="light" size="sm" showSubtitle={false} />
            <span style={{
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              fontWeight: 600,
              fontSize: '0.55rem',
              letterSpacing: '0.22em',
              color: 'rgba(251,248,243,0.7)',
              textTransform: 'uppercase' as const
            }}>
              MARKETING AGENCY
            </span>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#C4993B',
          marginBottom: '3.5rem',
          borderRadius: '2px'
        }} />

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          justifyItems: 'center'
        }}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem'
            }}>
              {/* Circular portrait with gold border */}
              <div style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                border: '4px solid #C4993B',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, #2a1f15 0%, #1a1410 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Silhouette placeholder */}
                <svg viewBox="0 0 200 200" width="180" height="180" fill="none">
                  {/* Head */}
                  <circle cx="100" cy="70" r="35" fill="#C4993B" opacity="0.85" />
                  {/* Hijab shape */}
                  <path
                    d="M60 105 C60 85 75 60 100 55 C125 60 140 85 140 105 C140 130 130 155 100 165 C70 155 60 130 60 105Z"
                    fill="#C4993B"
                    opacity="0.85"
                  />
                  {/* Body silhouette */}
                  <path
                    d="M55 155 C55 140 70 125 100 120 C130 125 145 140 145 155 L145 200 L55 200Z"
                    fill="#C4993B"
                    opacity="0.6"
                  />
                </svg>

                {/* Role icons around the circle */}
                {member.id === 'zahra-al-shehri' && (
                  <>
                    {/* Content creation icons */}
                    <div style={{ position: 'absolute', top: '15%', left: '8%', color: '#C4993B', opacity: 0.7 }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>
                    </div>
                    <div style={{ position: 'absolute', top: '25%', right: '5%', color: '#C4993B', opacity: 0.7 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                    </div>
                    <div style={{ position: 'absolute', bottom: '30%', left: '5%', color: '#C4993B', opacity: 0.7 }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.2l-3.2 2.4 1.2-3.8L6.8 11h3.8L12 7.2 13.4 11h3.8l-3.2 2.8 1.2 3.8z"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </div>
                    <div style={{ position: 'absolute', bottom: '20%', right: '10%', color: '#C4993B', opacity: 0.7 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                    </div>
                  </>
                )}

                {member.id === 'haya-al-ajmi' && (
                  <>
                    {/* Marketing icons */}
                    <div style={{ position: 'absolute', top: '15%', left: '8%', color: '#C4993B', opacity: 0.7 }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                    </div>
                    <div style={{ position: 'absolute', top: '20%', right: '5%', color: '#C4993B', opacity: 0.7 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                    </div>
                    <div style={{ position: 'absolute', bottom: '25%', left: '5%', color: '#C4993B', opacity: 0.7 }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div style={{ position: 'absolute', bottom: '20%', right: '10%', color: '#C4993B', opacity: 0.7 }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
                    </div>
                  </>
                )}
              </div>

              {/* Name */}
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#C4993B',
                fontFamily: "'Cairo', sans-serif",
                margin: 0
              }}>
                {member.name}
              </h2>

              {/* Role */}
              <p style={{
                fontSize: '0.95rem',
                color: '#B5A596',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {member.id === 'haya-al-ajmi' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#C4993B' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                )}
                {member.id === 'zahra-al-shehri' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#C4993B' }}><path d="M12 15.2l-3.2 2.4 1.2-3.8L6.8 11h3.8L12 7.2 13.4 11h3.8l-3.2 2.8 1.2 3.8z"/></svg>
                )}
                {member.role === 'Co-Founder & Marketing' ? 'شريكة مؤسس وتسويق' : 'صناعة محتوى'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
