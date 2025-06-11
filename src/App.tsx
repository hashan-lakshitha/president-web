import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/news/News.tsx';
import Events from './pages/events/Events.tsx';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/global.css';
import AllNews from './pages/news/AllNews.tsx';
import ViewNews from './pages/news/ViewNews.tsx';
import Timeline from './pages/timeLine/index.tsx';
// import Timeline from './pages/Timeline.tsx';
const App: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('pageTitle');
  }, [t]);

  return (

      <Router>
        <Header />
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/all-news" element={<AllNews />} />
            <Route path="/news/:id" element={<ViewNews />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </div>
        <Footer />
      </Router>

  );
};

export default App;