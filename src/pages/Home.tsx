import React from 'react';
import SocialMedia from '../pages/SocialMedia';
import Events from '../pages/Events';
import News from '../pages/News';
import Counter from '../pages/Counter';
import Mainbanner from '../pages/Mainbanner';

const Home: React.FC = () => {


  return (
    <div className="home-container">
      <div className="div">
       <Mainbanner />
        <Events />
        <SocialMedia />
        <News />
        <Counter />
      </div>
    </div>
  );
};

export default Home;