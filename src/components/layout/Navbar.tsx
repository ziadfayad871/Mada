import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MadaLogo } from '../common/MadaLogo';
import { Play, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'أعمالنا', path: '/works' },
    { name: 'فريق العمل', path: '/team' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(251, 248, 243, 0.92)' : 'var(--bg-primary)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0.8rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Right side in RTL: Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <MadaLogo variant="dark" size="md" />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            padding: '0.5rem 1.8rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color-light)',
            boxShadow: 'var(--shadow-subtle)'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '0.95rem',
                fontWeight: isActive(link.path) ? 700 : 500,
                color: isActive(link.path) ? 'var(--text-primary)' : 'var(--text-secondary)',
                position: 'relative',
                transition: 'color var(--transition-fast)'
              }}
            >
              {link.name}
              {isActive(link.path) && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '16px',
                    height: '2px',
                    backgroundColor: 'var(--text-primary)',
                    borderRadius: '2px'
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Left side in RTL: CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/works" className="btn-secondary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}>
            <span>شاهد أعمالنا</span>
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Play size={11} fill="currentColor" style={{ marginLeft: '1px' }} />
            </span>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="القائمة"
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--text-primary)'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: 'var(--bg-primary)',
            zIndex: 99,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            borderTop: '1px solid var(--border-color)',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '1.25rem',
                fontWeight: isActive(link.path) ? 700 : 500,
                color: isActive(link.path) ? 'var(--text-primary)' : 'var(--text-secondary)',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-color-light)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/works"
            className="btn-primary"
            style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
          >
            شاهد أعمالنا ▶
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
