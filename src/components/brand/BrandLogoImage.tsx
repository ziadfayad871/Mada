import React from 'react';

interface BrandLogoImageProps {
  brandId: string;
  name: string;
  size?: number;
  color?: string;
  inverted?: boolean;
}

const BRAND_LOGOS: Record<string, string> = {
  'sultan-al-asal': '/assets/brands/sultan-al-asal.jpeg',
  'hermatech': '/assets/brands/hermatech.jpeg',
  'to-fitness': '/assets/brands/to-fitness.jpeg',
  'leesanto': '/assets/brands/leesanto.jpeg',
  'lulu-glass': '/assets/brands/lulu-glass.jpeg',
  'zeela': '/assets/brands/zeela.jpeg',
  'mada-al-baram': '/assets/brands/mada-al-baram.jpeg',
  'nukbat-al-jawf': '/assets/brands/nukbat-al-jawf.jpeg'
};

const BRAND_NAMES: Record<string, { ar: string; en: string }> = {
  'sultan-al-asal': { ar: 'سلطان العسل', en: 'SULTAN AL ASAL' },
  'hermatech': { ar: 'همتك', en: 'HEMATECH' },
  'to-fitness': { ar: 'نحو الرشاقه', en: 'TO FITNESS' },
  'leesanto': { ar: 'لي سانتو', en: 'LEESANTO' },
  'lulu-glass': { ar: 'لولو جلاس', en: 'LULU GLASS' },
  'zeela': { ar: 'زيلا', en: 'ZEELA' },
  'mada-al-baram': { ar: 'مدى البراعم', en: 'MADA AL BARAM' },
  'nukbat-al-jawf': { ar: 'نخبة الجوف', en: 'NUKBAT AL JAWF' }
};

export const BrandLogoImage: React.FC<BrandLogoImageProps> = ({
  brandId,
  name,
  size = 48,
  color = 'var(--text-primary)',
  inverted = false
}) => {
  const logoSrc = BRAND_LOGOS[brandId];
  const brandInfo = BRAND_NAMES[brandId] || { ar: name, en: '' };

  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={brandInfo.ar}
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          borderRadius: 'var(--radius-sm)'
        }}
      />
    );
  }

  return (
    <div style={{ fontSize: '1rem', fontWeight: 700, color: inverted ? '#FFFFFF' : color }}>
      {name}
    </div>
  );
};
