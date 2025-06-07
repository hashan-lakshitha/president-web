import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-switcher">
      <p className={theme === 'dark' ? 'text-light mb-2' : 'text-dark mb-2'}>
        {t('language.select')}:
      </p>
      <div className="btn-group" role="group" aria-label="Language switcher">
        <button
          type="button"
          onClick={() => changeLanguage('en')}
          className={`btn btn-sm ${i18n.language === 'en'
            ? theme === 'dark' ? 'btn-warning' : 'btn-primary'
            : theme === 'dark' ? 'btn-outline-warning' : 'btn-outline-primary'
          }`}
        >
          {t('language.english')}
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('si')}
          className={`btn btn-sm ${i18n.language === 'si'
            ? theme === 'dark' ? 'btn-warning' : 'btn-primary'
            : theme === 'dark' ? 'btn-outline-warning' : 'btn-outline-primary'
          }`}
        >
          {t('language.sinhala')}
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('ta')}
          className={`btn btn-sm ${i18n.language === 'ta'
            ? theme === 'dark' ? 'btn-warning' : 'btn-primary'
            : theme === 'dark' ? 'btn-outline-warning' : 'btn-outline-primary'
          }`}
        >
          {t('language.tamil')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;