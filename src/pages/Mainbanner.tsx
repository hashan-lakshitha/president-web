import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const Mainbanner: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className={`hero-area d-flex align-items-center min-vh-100 ${theme === 'dark' ? 'bg-dark' : 'bg-transparent'}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="hero-content text-start">
              <h1 className={`display-3 fw-bold mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                {t('home.title', 'Cast Your Vote for the')}
              </h1>
              <h1 className={`display-3 fw-bold mb-4 ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                Lorem, ipsum. <span className="text-primary">Lorem, ipsum.</span>
              </h1>
              <h4 className={`mb-5 ${theme === 'dark' ? 'text-warning' : 'text-danger'}`}>
                {/* <span className="text-muted">//</span> {t('home.description', 'Stand With Us for save country')} <span className="text-muted">//</span> */}
              </h4>
              <a 
                className="btn btn-danger btn-lg px-5 py-3 fw-bold text-decoration-none" 
                href="/campaigns"
              >
                {t('home.joinCampaign', 'Tell us.')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainbanner;