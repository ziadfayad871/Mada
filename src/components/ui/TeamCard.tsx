import React from 'react';
import { TeamMember } from '../../data/team';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-subtle)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className="team-card"
    >
      <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)' }}>
        <img
          src={member.image}
          alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          className="team-img"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(44, 31, 23, 0.7) 0%, rgba(0,0,0,0) 60%)'
          }}
        />
        <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', left: '1.25rem', color: '#FFFFFF' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: '#FFFFFF' }}>
            {member.name}
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', fontWeight: 600 }}>
            {member.role}
          </span>
        </div>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {member.bio && (
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {member.bio}
          </p>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
          {member.specialties.map((spec, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-secondary)'
              }}
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: var(--text-muted);
        }
        .team-card:hover .team-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
