import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/global.css';

const App: React.FC = () => {
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
          </Routes>
        </div>
        <Footer />
      </Router>

  );
};

export default App;