import React from 'react';
import { Achievement } from '../../data/achievements';

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        padding: '2.5rem 1.5rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        textAlign: 'center',
        boxShadow: 'var(--shadow-subtle)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      className="stat-card"
    >
      <div
        style={{
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          fontSize: '3rem',
          fontWeight: 800,
          color: 'var(--text-primary)',
          lineHeight: 1,
          marginBottom: '0.6rem'
        }}
      >
        {achievement.number}
      </div>
      <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
        {achievement.label}
      </div>
      {achievement.sublabel && (
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          {achievement.sublabel}
        </div>
      )}
      <style>{`
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};
