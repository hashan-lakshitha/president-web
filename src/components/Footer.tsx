import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-links">
            <h3>{t('footer.links.title')}</h3>
            <ul>
              <li><a href="https://www.presidentsoffice.gov.lk" target="_blank" rel="noopener noreferrer">{t('footer.links.presidentialSecretariat')}</a></li>
              <li><a href="https://cabinetoffice.gov.lk" target="_blank" rel="noopener noreferrer">{t('footer.links.cabinetMinisters')}</a></li>
              <li><a href="https://www.gov.lk" target="_blank" rel="noopener noreferrer">{t('footer.links.governmentOfSriLanka')}</a></li>
              <li><a href="https://www.pmdnews.lk" target="_blank" rel="noopener noreferrer">{t('footer.links.pmd')}</a></li>
              <li><a href="https://www.news.lk" target="_blank" rel="noopener noreferrer">{t('footer.links.newsPortal')}</a></li>
              <li><a href="https://www.presidentsfund.gov.lk" target="_blank" rel="noopener noreferrer">{t('footer.links.presidentsFund')}</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>{t('footer.contact.title')}</h3>
            <address>
              <p>{t('footer.contact.presidentialSecretariat')}</p>
              <p>{t('footer.contact.address1')}</p>
              <p>{t('footer.contact.address2')}</p>
              <p>
                <a href="tel:+94112354354">{t('footer.contact.phone1')}</a>
              </p>
              <p>
                <a href="tel:+94112340340">{t('footer.contact.phone2')}</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.official')}</p>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
