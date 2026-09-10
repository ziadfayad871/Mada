import React from 'react';

interface MadaLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const MadaLogo: React.FC<MadaLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true
}) => {
  const color = variant === 'dark' ? 'var(--text-primary)' : 'var(--text-light)';
  const subtitleColor = variant === 'dark' ? 'var(--text-muted)' : 'rgba(251, 248, 243, 0.7)';
  
  const iconSize = size === 'sm' ? 28 : size === 'md' ? 38 : 52;
  const textSize = size === 'sm' ? '1rem' : size === 'md' ? '1.25rem' : '1.75rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', direction: 'ltr' }}>
      {/* Official MADA Infinity / Stylized Mark */}
      <svg
        width={iconSize}
        height={iconSize * 0.7}
        viewBox="0 0 100 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 45C33.2843 45 40 38.2843 40 30C40 21.7157 33.2843 15 25 15C16.7157 15 10 21.7157 10 30C10 38.2843 16.7157 45 25 45Z"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M75 45C83.2843 45 90 38.2843 90 30C90 21.7157 83.2843 15 75 15C66.7157 15 60 21.7157 60 30C60 38.2843 66.7157 45 75 45Z"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M25 45C45 45 55 15 75 15"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M25 15C45 15 55 45 75 45"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <div style={{
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          fontWeight: 700,
          fontSize: textSize,
          letterSpacing: '0.15em',
          color: color,
          lineHeight: 1.1
        }}>
          MADA
        </div>
        {showSubtitle && (
          <div style={{
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            fontWeight: 500,
            fontSize: size === 'sm' ? '0.55rem' : '0.65rem',
            letterSpacing: '0.25em',
            color: subtitleColor,
            textTransform: 'uppercase',
            marginTop: '2px'
          }}>
            MARKETING AGENCY
          </div>
        )}
      </div>

      <div style={{
        marginRight: '0.4rem',
        paddingRight: '0.6rem',
        borderRight: `1px solid ${variant === 'dark' ? 'var(--border-color)' : 'rgba(255,255,255,0.2)'}`,
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
        fontWeight: 700,
        fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.25rem' : '1.6rem',
        color: color
      }}>
        مدى
      </div>
    </div>
  );
};
