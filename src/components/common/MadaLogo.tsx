import React from 'react';

interface MadaLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

let _idCounter = 0;

export const MadaLogo: React.FC<MadaLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true
}) => {
  const uid = React.useMemo(() => `mada-${++_idCounter}`, []);

  const darkColor = '#0F1B3D';
  const lightColor = '#FBF8F3';
  const goldColor = '#C4993B';
  const bronzeColor = '#A07830';

  const textColor = variant === 'dark' ? darkColor : lightColor;
  const subtitleColor = variant === 'dark' ? 'var(--text-muted)' : 'rgba(251, 248, 243, 0.7)';

  const w = size === 'sm' ? 120 : size === 'md' ? 180 : 260;
  const h = size === 'sm' ? 52 : size === 'md' ? 72 : 104;
  const fontSize = size === 'sm' ? 52 : size === 'md' ? 72 : 104;
  const subtitleSize = size === 'sm' ? '0.5rem' : size === 'md' ? '0.6rem' : '0.7rem';

  const dotRows = [
    { y: 16, dots: [
      { cx: 120, r: 2.2 }, { cx: 128, r: 2.0 }, { cx: 136, r: 1.8 },
      { cx: 144, r: 1.5 }, { cx: 152, r: 1.2 }, { cx: 160, r: 0.9 }
    ]},
    { y: 24, dots: [
      { cx: 116, r: 2.6 }, { cx: 124, r: 2.4 }, { cx: 132, r: 2.1 },
      { cx: 140, r: 1.8 }, { cx: 148, r: 1.4 }, { cx: 156, r: 1.0 }, { cx: 164, r: 0.6 }
    ]},
    { y: 32, dots: [
      { cx: 112, r: 2.8 }, { cx: 120, r: 2.6 }, { cx: 128, r: 2.3 },
      { cx: 136, r: 2.0 }, { cx: 144, r: 1.6 }, { cx: 152, r: 1.2 },
      { cx: 160, r: 0.8 }, { cx: 168, r: 0.4 }
    ]},
    { y: 40, dots: [
      { cx: 112, r: 3.0 }, { cx: 120, r: 2.7 }, { cx: 128, r: 2.4 },
      { cx: 136, r: 2.1 }, { cx: 144, r: 1.7 }, { cx: 152, r: 1.3 },
      { cx: 160, r: 0.9 }, { cx: 168, r: 0.5 }
    ]},
    { y: 48, dots: [
      { cx: 116, r: 2.8 }, { cx: 124, r: 2.5 }, { cx: 132, r: 2.2 },
      { cx: 140, r: 1.8 }, { cx: 148, r: 1.4 }, { cx: 156, r: 1.0 }
    ]},
    { y: 56, dots: [
      { cx: 120, r: 2.4 }, { cx: 128, r: 2.1 }, { cx: 136, r: 1.8 },
      { cx: 144, r: 1.4 }, { cx: 152, r: 1.0 }
    ]},
  ];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size === 'sm' ? '0.5rem' : '0.75rem', direction: 'ltr' }}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 180 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <mask id={`${uid}-mask`}>
            <rect width="180" height="80" fill="black" />
            <text
              x="90" y="64"
              textAnchor="middle"
              fontFamily="'Cairo', 'Noto Sans Arabic', sans-serif"
              fontWeight="900"
              fontSize={fontSize}
              fill="white"
            >
              مدى
            </text>
          </mask>
        </defs>

        {/* Solid base text */}
        <text
          x="90" y="64"
          textAnchor="middle"
          fontFamily="'Cairo', 'Noto Sans Arabic', sans-serif"
          fontWeight="900"
          fontSize={fontSize}
          fill={textColor}
        >
          مدى
        </text>

        {/* Halftone gold dots — masked to text shape, right side */}
        <g mask={`url(#${uid}-mask)`}>
          {dotRows.map((row, ri) =>
            row.dots.map((dot, di) => (
              <circle
                key={`${ri}-${di}`}
                cx={dot.cx}
                cy={row.y}
                r={dot.r}
                fill={goldColor}
              />
            ))
          )}
        </g>
      </svg>

      {showSubtitle && (
        <span style={{
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          fontWeight: 600,
          fontSize: subtitleSize,
          letterSpacing: '0.22em',
          color: subtitleColor,
          textTransform: 'uppercase' as const,
          lineHeight: 1.2,
        }}>
          MARKETING AGENCY
        </span>
      )}
    </div>
  );
};
