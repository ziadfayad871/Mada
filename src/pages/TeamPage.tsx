import React from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamCard } from '../components/ui/TeamCard';

export const TeamPage: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: 'var(--bg-primary)', 
      padding: '4.5rem 0 6rem', 
      minHeight: '100vh',
      backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(197, 160, 89, 0.04) 0%, transparent 50%)'
    }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>نصنع الإبداع بشغف</span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            فريق العمل
          </h1>
          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '640px', 
            margin: '0 auto',
            lineHeight: 1.75
          }}>
            فريق متكامل من المتخصصين في صناعة المحتوى والاستراتيجيات التسويقية يقود علاماتكم التجارية نحو النجاح والتميز.
          </p>
        </div>

        {/* Team Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};
