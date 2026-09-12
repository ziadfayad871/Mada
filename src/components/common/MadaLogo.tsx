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

  const textColor = variant === 'dark' ? darkColor : lightColor;
  const subtitleColor = variant === 'dark' ? 'var(--text-muted)' : 'rgba(251, 248, 243, 0.7)';

  const w = size === 'sm' ? 120 : size === 'md' ? 170 : 240;
  const h = size === 'sm' ? 52 : size === 'md' ? 70 : 98;
  const fontSize = size === 'sm' ? 52 : size === 'md' ? 68 : 96;
  const subtitleSize = size === 'sm' ? '0.5rem' : size === 'md' ? '0.6rem' : '0.7rem';

  const dotRows = [
    { y: 12, dots: [
      { cx: 82, r: 3.0 }, { cx: 90, r: 2.7 }, { cx: 98, r: 2.3 },
      { cx: 106, r: 1.9 }, { cx: 114, r: 1.4 }, { cx: 122, r: 0.9 }
    ]},
    { y: 21, dots: [
      { cx: 80, r: 3.3 }, { cx: 88, r: 3.0 }, { cx: 96, r: 2.6 },
      { cx: 104, r: 2.1 }, { cx: 112, r: 1.6 }, { cx: 120, r: 1.1 }, { cx: 128, r: 0.6 }
    ]},
    { y: 30, dots: [
      { cx: 78, r: 3.5 }, { cx: 86, r: 3.2 }, { cx: 94, r: 2.8 },
      { cx: 102, r: 2.3 }, { cx: 110, r: 1.8 }, { cx: 118, r: 1.3 },
      { cx: 126, r: 0.8 }
    ]},
    { y: 39, dots: [
      { cx: 78, r: 3.5 }, { cx: 86, r: 3.2 }, { cx: 94, r: 2.8 },
      { cx: 102, r: 2.3 }, { cx: 110, r: 1.8 }, { cx: 118, r: 1.3 },
      { cx: 126, r: 0.8 }, { cx: 134, r: 0.4 }
    ]},
    { y: 48, dots: [
      { cx: 80, r: 3.2 }, { cx: 88, r: 2.8 }, { cx: 96, r: 2.4 },
      { cx: 104, r: 1.9 }, { cx: 112, r: 1.4 }, { cx: 120, r: 0.9 }
    ]},
    { y: 56, dots: [
      { cx: 84, r: 2.6 }, { cx: 92, r: 2.2 }, { cx: 100, r: 1.8 },
      { cx: 108, r: 1.3 }, { cx: 116, r: 0.8 }
    ]},
  ];

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size === 'sm' ? '0.5rem' : '0.75rem', direction: 'ltr' }}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 160 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <mask id={`${uid}-mask`}>
            <rect width="160" height="70" fill="black" />
            <text
              x="80" y="56"
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
          x="80" y="56"
          textAnchor="middle"
          fontFamily="'Cairo', 'Noto Sans Arabic', sans-serif"
          fontWeight="900"
          fontSize={fontSize}
          fill={textColor}
        >
          مدى
        </text>

        {/* Halftone gold dots — masked to text shape */}
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
