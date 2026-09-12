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

  const w = size === 'sm' ? 110 : size === 'md' ? 155 : 220;
  const h = size === 'sm' ? 44 : size === 'md' ? 60 : 86;
  const subtitleSize = size === 'sm' ? '0.5rem' : size === 'md' ? '0.6rem' : '0.7rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size === 'sm' ? '0.5rem' : '0.75rem', direction: 'ltr' }}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 340 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <mask id={`${uid}-dots`}>
            <rect width="340" height="140" fill="black" />
            {/* ى (ya) shape - used as mask so dots only appear inside the letter */}
            <path
              d="M 115 92 C 100 55 65 25 20 18 C 12 16 5 20 5 28 C 5 38 14 48 28 55 C 50 66 80 80 105 92 Z"
              fill="white"
            />
          </mask>
        </defs>

        {/* === م (meem) — bold rounded head + stem + square block === */}
        <path
          d={`
            M 312 15
            C 348 15 375 42 375 72
            C 375 102 348 125 312 125
            L 278 125
            L 278 65
            L 252 65
            L 252 125
            L 235 125
            L 235 140
            L 290 140
            L 290 125
          `}
          fill={textColor}
        />
        {/* Square block element inside the meem stem */}
        <rect x="235" y="78" width="43" height="43" fill={textColor} />

        {/* === د (dal) — curved connector === */}
        <path
          d={`
            M 235 140
            C 200 140 175 125 160 105
            C 152 94 148 82 148 72
          `}
          stroke={textColor}
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />

        {/* === ى (ya) — sweeping curve with halftone === */}
        {/* Solid base path */}
        <path
          d="M 148 72 C 130 42 95 20 48 14 C 34 12 20 18 14 30 C 8 42 12 58 28 68 C 52 84 90 100 130 112 Z"
          fill={textColor}
        />

        {/* Halftone gold dots on the ya — masked to letter shape */}
        <g mask={`url(#${uid}-dots)`}>
          {[
            { y: 20, dots: [{ cx: 28, r: 4.0 }, { cx: 40, r: 3.5 }, { cx: 52, r: 3.0 }, { cx: 64, r: 2.4 }, { cx: 76, r: 1.8 }, { cx: 88, r: 1.2 }] },
            { y: 30, dots: [{ cx: 22, r: 4.2 }, { cx: 34, r: 3.8 }, { cx: 46, r: 3.2 }, { cx: 58, r: 2.6 }, { cx: 70, r: 2.0 }, { cx: 82, r: 1.4 }, { cx: 94, r: 0.8 }] },
            { y: 40, dots: [{ cx: 18, r: 4.4 }, { cx: 30, r: 4.0 }, { cx: 42, r: 3.4 }, { cx: 54, r: 2.8 }, { cx: 66, r: 2.2 }, { cx: 78, r: 1.6 }, { cx: 90, r: 1.0 }, { cx: 100, r: 0.5 }] },
            { y: 50, dots: [{ cx: 16, r: 4.2 }, { cx: 28, r: 3.8 }, { cx: 40, r: 3.2 }, { cx: 52, r: 2.6 }, { cx: 64, r: 2.0 }, { cx: 76, r: 1.4 }, { cx: 88, r: 0.8 }] },
            { y: 60, dots: [{ cx: 20, r: 3.8 }, { cx: 32, r: 3.4 }, { cx: 44, r: 2.8 }, { cx: 56, r: 2.2 }, { cx: 68, r: 1.6 }, { cx: 80, r: 1.0 }] },
            { y: 70, dots: [{ cx: 26, r: 3.2 }, { cx: 38, r: 2.8 }, { cx: 50, r: 2.2 }, { cx: 62, r: 1.6 }, { cx: 74, r: 1.0 }] },
            { y: 80, dots: [{ cx: 34, r: 2.6 }, { cx: 46, r: 2.0 }, { cx: 58, r: 1.4 }, { cx: 70, r: 0.8 }] },
          ].map((row, ri) =>
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
