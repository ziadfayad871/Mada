import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Play, X } from 'lucide-react';
import { MadaLogo } from '../common/MadaLogo';

const links = [
  ['الرئيسية', '/'],
  ['من نحن', '/about'],
  ['خدماتنا', '/services'],
  ['أعمالنا', '/works'],
  ['العلامات التجارية', '/brands'],
  ['تواصل معنا', '/contact']
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link to="/" className="brand-logo" aria-label="الصفحة الرئيسية">
          <MadaLogo size="md" />
        </Link>
        
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([title, path]) => (
            <Link
              onClick={() => setOpen(false)}
              className={pathname === path ? 'active' : ''}
              to={path}
              key={path}
            >
              {title}
            </Link>
          ))}
        </nav>
        
        <Link to="/works" className="watch-work" aria-label="شاهد أعمالنا">
          <span>
            <Play fill="currentColor" size={11} />
          </span>
          شاهد أعمالنا
        </Link>
        
        <button 
          className="menu-button" 
          onClick={() => setOpen(!open)}
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};
