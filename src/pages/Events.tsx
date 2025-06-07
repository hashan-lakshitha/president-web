import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import eventsData from '../locales/nw/events.json';
import Eventimage from '../assets/images/resource/news-i.png';

type Event = {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
  image?: string;
};

const Events: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const events: Event[] = eventsData;

  return (
    <main className={theme === 'dark' ? 'bg-dark text-light py-5' : 'bg-light text-dark py-5'}>
      <div className="container">
        <div className="text-center mb-5">
          <div className={`text-uppercase fw-semibold mb-2 ${theme === 'dark' ? 'text-warning' : 'text-danger'}`} style={{ letterSpacing: 2 }}>
            <i className="bi bi-calendar-event me-2"></i>
            {t('events.ourEvents', 'Our Events')}
          </div>
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
            {t('events.upcoming', 'Upcoming')}{' '}
            <span className={theme === 'dark' ? 'text-warning' : 'text-danger'}>
              {t('events.events', 'Events')}
            </span>
          </h2>
        </div>
        <div className="row g-4 justify-content-center">
          {events.map((event) => (
            <div className="col-12 col-md-6 col-lg-4" key={event.id}>
              <div className={`rounded-3 shadow-sm p-4 text-center h-100 d-flex flex-column align-items-center ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-white text-dark'}`}>
                <img
                  src={event.image || Eventimage}
                  alt={event.name}
                  className="mb-4 rounded"
                  style={{ width: 330, height: 200, objectFit: 'cover', background: '#ccc' }}
                />
                <h4 className={`fw-bold mb-1 ${theme === 'dark' ? 'text-warning' : 'text-primary'}`}>{event.name}</h4>
                <div className="mb-2 text-muted">
                  <i className="bi bi-calendar-check me-1"></i>
                  {event.date}
                  <span className="mx-2">|</span>
                  <i className="bi bi-geo-alt me-1"></i>
                  {event.location}
                </div>
                <div className="text-secondary small mb-2">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Events;