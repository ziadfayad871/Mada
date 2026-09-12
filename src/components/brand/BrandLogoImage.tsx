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
    case 'sultan-al-asal':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="42" stroke={fillColor} strokeWidth="5" />
            <path d="M50 18 L72 75 H60 L50 48 L40 75 H28 Z" fill={fillColor} />
            <path d="M42 58 H58 V64 H42 Z" fill={fillColor} />
          </svg>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: fillColor, letterSpacing: '0.05em' }}>
            سلطان العسل
          </span>
          <span style={{ fontSize: '0.55rem', fontWeight: 600, color: fillColor, opacity: 0.8, letterSpacing: '0.1em' }}>
            SULTAN AL ASAL
          </span>
        </div>
      );

    case 'hermatech':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" fill="none">
            <path d="M30 10 L50 20 L50 40 L30 50 L10 40 L10 20 Z" stroke={fillColor} strokeWidth="4" />
            <circle cx="30" cy="30" r="8" fill={fillColor} />
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: fillColor }}>
            همتك
          </span>
          <span style={{ fontSize: '0.55rem', fontWeight: 600, color: fillColor, opacity: 0.8, letterSpacing: '0.1em' }}>
            HEMATECH
          </span>
        </div>
      );

    case 'to-fitness':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.7} height={size * 0.7} viewBox="0 0 50 50" fill="none">
            <path d="M25 35 L12 20 C7 15 10 5 18 5 C22 5 25 9 25 9 C25 9 28 5 32 5 C40 5 43 15 38 20 Z" fill={fillColor} />
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: fillColor }}>
            نحو الرشاقه
          </span>
          <span style={{ fontSize: '0.55rem', fontWeight: 600, color: fillColor, opacity: 0.8, letterSpacing: '0.1em' }}>
            TO FITNESS
          </span>
        </div>
      );

    case 'leesanto':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" fill="none">
            <path d="M30 10 A20 20 0 0 1 50 30 A20 20 0 0 1 30 50 A20 20 0 0 1 10 30 Z" stroke={fillColor} strokeWidth="3" />
            <path d="M22 20 H38 M30 20 V40 M22 40 H38" stroke={fillColor} strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: fillColor, letterSpacing: '0.1em' }}>
            لي سانتو
          </span>
          <span style={{ fontSize: '0.55rem', fontWeight: 600, color: fillColor, opacity: 0.8, letterSpacing: '0.1em' }}>
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
            لولو جلاس
          </span>
          <span style={{ fontSize: '0.55rem', fontWeight: 600, color: fillColor, opacity: 0.8, letterSpacing: '0.1em' }}>
            LULU GLASS
          </span>
        </div>
      );

    case 'zeela':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" fill="none">
            <path d="M15 45 L30 15 L45 45" stroke={fillColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="30" cy="38" r="4" fill={fillColor} />
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: fillColor }}>
            زيلا
          </span>
          <span style={{ fontSize: '0.55rem', fontWeight: 600, color: fillColor, opacity: 0.8, letterSpacing: '0.1em' }}>
            ZEELA
          </span>
        </div>
      );

    case 'mada-al-baram':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <svg width={size * 0.8} height={size * 0.8} viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="22" r="12" fill={fillColor} opacity="0.8" />
            <path d="M18 38 C18 30 24 26 30 26 C36 26 42 30 42 38 L42 50 L18 50 Z" fill={fillColor} opacity="0.6" />
            <circle cx="22" cy="18" r="3" fill={fillColor} />
            <circle cx="38" cy="18" r="3" fill={fillColor} />
            <circle cx="30" cy="14" r="3" fill={fillColor} />
          </svg>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: fillColor }}>
            مدى البراعم
          </span>
          <span style={{ fontSize: '0.55rem', fontWeight: 600, color: fillColor, opacity: 0.8, letterSpacing: '0.05em' }}>
            MADA AL BARAM
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
