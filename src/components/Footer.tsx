import React from 'react';
import logo from '../assets/logo.svg'; // placeholder logo

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={logo} alt="MADA Logo" className="footer__logo" />
        <p className="footer__description">© 2026 مدى للتسويق الرقمي. جميع الحقوق محفوظة.</p>
        <nav className="footer__nav">
          <a href="/" className="footer__link">الرئيسية</a>
          <a href="/about" className="footer__link">من نحن</a>
          <a href="/services" className="footer__link">خدماتنا</a>
          <a href="/works" className="footer__link">أعمالنا</a>
          <a href="/contact" className="footer__link">تواصل</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
