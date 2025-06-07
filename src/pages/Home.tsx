import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialMedia from '../pages/SocialMedia'; 
const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div>
        <h1>{t('home.title')}</h1>
        <p>{t('home.description')}</p>
        <h1 className="text-3xl font-bold underline text-amber-300">
          Hello world!
        </h1>
      </div>

      {/*SocialMedia pages */}
      <div className="div">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Home;