import React from 'react';

interface BrandLogoImageProps {
  brandId: string;
  name: string;
  size?: number;
  color?: string;
  inverted?: boolean;
}

export const BrandLogoImage: React.FC<BrandLogoImageProps> = ({
  brandId,
  name,
  size = 48,
  color = 'var(--text-primary)',
  inverted = false
}) => {
  const fillColor = inverted ? '#FFFFFF' : color;

  switch (brandId) {
    case 'sultan-al-faisal':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="42" stroke={fillColor} strokeWidth="5" />
            <path d="M50 18 L72 75 H60 L50 48 L40 75 H28 Z" fill={fillColor} />
            <path d="M42 58 H58 V64 H42 Z" fill={fillColor} />
          </svg>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: fillColor, letterSpacing: '0.05em' }}>
            سلطان الفيصل
          </span>
          <span style={{ fontSize: '0.55rem', fontWeight: 600, color: fillColor, opacity: 0.8, letterSpacing: '0.1em' }}>
            SULTAN ALFASIL
          </span>
        </div>
      );

    case 'hermatech':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" fill="none">
            <path d="M30 10 L50 20 L50 40 L30 50 L10 40 L10 20 Z" stroke={fillColor} strokeWidth="4" />
            <circle cx="30" cy="30" r="8" fill={fillColor} />
          </svg>
          <span style={{ fontSize: '1rem', fontWeight: 700, color: fillColor, fontFamily: 'sans-serif' }}>
            hermatech
          </span>
        </div>
      );

    case 'to-fitness':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 40 40" fill="none">
              <path d="M20 35 L7 20 C2 15 5 5 13 5 C17 5 20 9 20 9 C20 9 23 5 27 5 C35 5 38 15 33 20 Z" fill={fillColor} />
            </svg>
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: fillColor }}>
              TO FITNESS
            </span>
          </div>
        </div>
      );

    case 'leesanto':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" fill="none">
            <path d="M30 10 A20 20 0 0 1 50 30 A20 20 0 0 1 30 50 A20 20 0 0 1 10 30 Z" stroke={fillColor} strokeWidth="3" />
            <path d="M22 20 H38 M30 20 V40 M22 40 H38" stroke={fillColor} strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: fillColor, letterSpacing: '0.15em' }}>
            LEESANTO
          </span>
        </div>
      );

    case 'lulu-glass':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="22" stroke={fillColor} strokeWidth="3" strokeDasharray="6 4" />
            <text x="30" y="38" fontSize="22" fontWeight="700" textAnchor="middle" fill={fillColor}>G</text>
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: fillColor }}>
            Glass
          </span>
        </div>
      );

    case 'acme':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 50 50" fill="none">
            <polygon points="25,5 45,45 5,45" stroke={fillColor} strokeWidth="4" />
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: fillColor }}>
            ACME
          </span>
        </div>
      );

    case 'urban-look':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 50 50" fill="none">
            <path d="M10 10 L40 40 M40 10 L10 40 M25 5 V45" stroke={fillColor} strokeWidth="4" />
          </svg>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: fillColor }}>
            UrbanLook
          </span>
        </div>
      );

    case 'skyline':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 50 50" fill="none">
            <path d="M10 40 L25 10 L40 40 H10 Z" fill={fillColor} opacity="0.6" />
            <path d="M20 40 L35 15 L50 40 H20 Z" fill={fillColor} />
          </svg>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: fillColor }}>
            Skyline
          </span>
        </div>
      );

    case 'nexa':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 50 50" fill="none">
            <path d="M10 10 L40 40 M40 10 L10 40" stroke={fillColor} strokeWidth="6" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: fillColor, letterSpacing: '0.1em' }}>
            NEXA
          </span>
        </div>
      );

    default:
      return (
        <div style={{ fontSize: '1rem', fontWeight: 700, color: fillColor }}>
          {name}
        </div>
      );
  }
};
