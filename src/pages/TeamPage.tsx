import React from 'react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamCard } from '../components/ui/TeamCard';

export const TeamPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', padding: '4.5rem 0 6rem', minHeight: '100vh' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span className="badge-pill-dot" />
            <span>نصنع الإبداع بشغف</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            فريق العمل
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto' }}>
            فريق متكامل من المتخصصين في صناعة المحتوى والاستراتيجيات التسويقية يقود علاماتكم التجارية نحو النجاح.
          </p>
        </div>

        {/* Team Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            maxWidth: '750px',
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
