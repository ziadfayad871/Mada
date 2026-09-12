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
  const w = size === 'sm' ? 100 : size === 'md' ? 150 : 220;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', direction: 'ltr' }}>
      <img
        src="/assets/brands/mada-logo.jpg"
        alt="مدى - Marketing Agency"
        style={{ width: w, height: 'auto' }}
      />
    </div>
  );
};
