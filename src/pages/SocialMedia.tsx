import React from 'react';
import socialLinks from '../locales/nw/socialMediaLink.json';
import { useTheme } from '../context/ThemeContext';

const SocialMedia: React.FC = () => {
  const { theme } = useTheme();

  return (
    <main className={theme === 'dark' ? 'bg-dark text-light py-5 min-vh-80' : 'bg-light text-dark py-5 min-vh-80'}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <i className="bi bi-share-fill me-2 text-primary"></i>
            Social Media
          </h2>
          <p className="text-muted">Connect with us on social platforms</p>
        </div>
        <div className="row justify-content-center g-4">
          {socialLinks.map((link: any) => (
            <div className="col-6 col-md-3" key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`d-block text-center text-decoration-none border rounded-3 p-4 h-100 shadow-sm ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-white text-dark'}`}
              >
                <i className={`bi ${link.icon} fs-1 text-${link.color}`}></i>
                <div className={`fw-semibold mt-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{link.name}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SocialMedia;