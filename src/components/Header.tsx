import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };

  // Set initial theme on mount
  React.useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <header className={`navbar navbar-expand-md ${theme === 'dark' ? 'bg-dark navbar-dark border-bottom border-secondary' : 'bg-light navbar-light border-bottom border-light'}`}>
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          {/* <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 40, height: 40 }}>
            <svg className="text-white" width={24} height={24} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div> */}
          <span className="fs-4 fw-bold">{t('header.title')}</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <div className={`collapse navbar-collapse${mobileMenuOpen ? ' show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">{t('header.home')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">{t('header.about')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">{t('header.contact')}</Link>
            </li>
            </ul>
          {/*  Toggle theme and language switcher */}
          <div className="d-flex align-items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <LanguageSwitcher />
            {/* <button className="btn btn-primary ms-2" type="button">
              {t('header.joinUs')}
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;