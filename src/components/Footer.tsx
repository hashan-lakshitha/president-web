import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer className={`pt-5 pb-3 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <div className="container">
        <div className="row gy-5">
          {/* Links */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <h4 className={`fw-bold mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              {t('footer.links.title', 'Useful Links')}
            </h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.presidentsoffice.gov.lk" target="_blank" rel="noopener noreferrer" 
                   className={`${theme === 'dark' ? 'text-info' : 'text-primary'} text-decoration-none d-block mb-2`}>
                  {t('footer.links.presidentialSecretariat', 'Presidential Secretariat')}
                </a>
              </li>
              <li>
                <a href="https://cabinetoffice.gov.lk" target="_blank" rel="noopener noreferrer" 
                   className={`${theme === 'dark' ? 'text-info' : 'text-primary'} text-decoration-none d-block mb-2`}>
                  {t('footer.links.cabinetMinisters', 'Cabinet Ministers')}
                </a>
              </li>
              <li>
                <a href="https://www.gov.lk" target="_blank" rel="noopener noreferrer" 
                   className={`${theme === 'dark' ? 'text-info' : 'text-primary'} text-decoration-none d-block mb-2`}>
                  {t('footer.links.governmentOfSriLanka', 'Government of Sri Lanka')}
                </a>
              </li>
              <li>
                <a href="https://www.pmdnews.lk" target="_blank" rel="noopener noreferrer" 
                   className={`${theme === 'dark' ? 'text-info' : 'text-primary'} text-decoration-none d-block mb-2`}>
                  {t('footer.links.pmd', 'PMD')}
                </a>
              </li>
              <li>
                <a href="https://www.news.lk" target="_blank" rel="noopener noreferrer" 
                   className={`${theme === 'dark' ? 'text-info' : 'text-primary'} text-decoration-none d-block mb-2`}>
                  {t('footer.links.newsPortal', 'News Portal')}
                </a>
              </li>
              <li>
                <a href="https://www.presidentsfund.gov.lk" target="_blank" rel="noopener noreferrer" 
                   className={`${theme === 'dark' ? 'text-info' : 'text-primary'} text-decoration-none d-block`}>
                  {t('footer.links.presidentsFund', "President's Fund")}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Solution */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <h4 className={`fw-bold mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>Solution</h4>
            <div className="d-flex align-items-center mb-3">
              <img src="../assets/images/resource/comnt2.png"  
                   className="rounded me-3" style={{ width: 80, height: 80, objectFit: 'cover' }} />
              <span className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="d-flex align-items-center">
              <img src="../assets/images/resource/comnt2.png"  
                   className="rounded me-3" style={{ width: 80, height: 80, objectFit: 'cover' }} />
              <span className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          
          {/* Contact */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <h4 className={`fw-bold mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              {t('footer.contact.title', 'Contact')}
            </h4>
            <address>
              <p className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                {t('footer.contact.presidentialSecretariat', 'Presidential Secretariat')}
              </p>
              <p className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                {t('footer.contact.address1', 'Colombo 01, Sri Lanka')}
              </p>
              <p className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                {t('footer.contact.address2', '')}
              </p>
              <p>
                <a href="tel:+94112354354" 
                   className={`${theme === 'dark' ? 'text-info' : 'text-primary'} text-decoration-none`}>
                  {t('footer.contact.phone1', '+94 11 2354354')}
                </a>
              </p>
              <p>
                <a href="tel:+94112340340" 
                   className={`${theme === 'dark' ? 'text-info' : 'text-primary'} text-decoration-none`}>
                  {t('footer.contact.phone2', '+94 11 2340340')}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className={`footer-bottom text-center mt-4 pb-2 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
          <p className="mb-1">
            {t('footer.official', "Official website of the President's Media Division of Sri Lanka.")}
          </p>
          <small>{t('footer.copyright', "© 2025 President's Media Division. All rights reserved.")}</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
