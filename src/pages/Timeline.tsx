import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import newsData from '../locales/pages-json/news.json';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  className?: string;
}

const Timeline: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [visibleNews, setVisibleNews] = useState<number>(6);

  const newsItems: NewsItem[] = newsData;

  // Get news category style based on className
  const getNewsStyle = (className?: string) => {
    const styles = {
      '': { color: 'text-primary', bg: 'bg-primary', icon: 'bi-newspaper' },
      'two': { color: 'text-success', bg: 'bg-success', icon: 'bi-megaphone' },
      'three': { color: 'text-warning', bg: 'bg-warning', icon: 'bi-calendar-event' },
      'four': { color: 'text-danger', bg: 'bg-danger', icon: 'bi-flag' },
      'five': { color: 'text-info', bg: 'bg-info', icon: 'bi-trophy' }
    };
    return styles[className as keyof typeof styles] || styles[''];
  };

  // Format date
  const formatDate = (dateString: string) => {
    // Parse the date format "17 Jun, 2024"
    const parts = dateString.split(' ');
    const day = parts[0];
    const month = parts[1].replace(',', '');
    const year = parts[2];
    
    return {
      day: day.padStart(2, '0'),
      month: month,
      year: year
    };
  };

  // Load more news
  const loadMoreNews = () => {
    setVisibleNews(prev => prev + 6);
  };

  // Sort news by date (newest first)
  const sortedNews = [...newsItems].sort((a, b) => {
    const dateA = new Date(a.date.replace(/(\d{1,2}) (\w{3}), (\d{4})/, '$2 $1, $3'));
    const dateB = new Date(b.date.replace(/(\d{1,2}) (\w{3}), (\d{4})/, '$2 $1, $3'));
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className={`timeline-page ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light'} min-vh-100`}>
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <nav aria-label="breadcrumb">
            <ol className={`breadcrumb justify-content-center ${theme === 'dark' ? 'text-light' : ''}`}>
              <li className="breadcrumb-item">
                <Link to="/" className={theme === 'dark' ? 'text-info' : 'text-primary'}>
                  {t('common.home', 'Home')}
                </Link>
              </li>
              <li className={`breadcrumb-item active ${theme === 'dark' ? 'text-light' : 'text-dark'}`} aria-current="page">
                {t('timeline.title', 'News Timeline')}
              </li>
            </ol>
          </nav>
          
          <div className="hero-section mb-5">
            <h1 className={`display-3 fw-bold mb-4 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              <i className="bi bi-clock-history text-primary me-3"></i>
              {t('timeline.title', 'News Timeline')}
            </h1>
            <p className={`fs-4 mb-4 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
              {t('timeline.subtitle', 'Chronological Journey of Presidential News')}
            </p>
            <div className="decorative-line mx-auto" style={{ 
              width: '100px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #007bff, #28a745, #ffc107)', 
              borderRadius: '2px' 
            }}></div>
          </div>
        </div>

        {/* News Stats */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className={`card shadow-sm ${theme === 'dark' ? 'bg-secondary' : 'bg-white'}`}>
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-md-4">
                    <div className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                      <i className="bi bi-newspaper text-primary fs-1"></i>
                      <h4 className="mt-2">{newsItems.length}</h4>
                      <p className={`mb-0 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                        {t('timeline.totalNews', 'Total News')}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                      <i className="bi bi-calendar-check text-success fs-1"></i>
                      <h4 className="mt-2">2024</h4>
                      <p className={`mb-0 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                        {t('timeline.currentYear', 'Current Year')}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                      <i className="bi bi-clock text-warning fs-1"></i>
                      <h4 className="mt-2">{visibleNews}</h4>
                      <p className={`mb-0 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                        {t('timeline.showing', 'Showing')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="timeline-wrapper position-relative">
                {/* Timeline Line */}
                {/* <div 
                  className="timeline-line position-absolute"
                  style={{
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '4px',
                    background: 'linear-gradient(180deg, #007bff 0%, #28a745 50%, #ffc107 100%)',
                    transform: 'translateX(-50%)',
                    zIndex: 1
                  }}
                ></div> */}

                {/* Timeline News Items */}
                {sortedNews.slice(0, visibleNews).map((newsItem, index) => {
                  const isLeft = index % 2 === 0;
                  const newsStyle = getNewsStyle(newsItem.className);
                  const formattedDate = formatDate(newsItem.date);

                  return (
                    <div key={newsItem.id} className={`timeline-item mb-5 ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
                      <div className="row align-items-center">

                        {/* Left Card Layout */}
                        {isLeft && (
                          <>
                            {/* Date Marker at the beginning for left cards */}
                            <div className="col-md-2 timeline-marker-container d-flex justify-content-start">
                              <div className="timeline-marker position-relative d-flex flex-column align-items-center">
                                <div 
                                  className={`timeline-dot ${newsStyle.bg} text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg`}
                                  style={{ width: '60px', height: '60px', zIndex: 3, position: 'relative' }}
                                >
                                  <i className={`${newsStyle.icon} fs-5`}></i>
                                </div>
                                <div className={`timeline-date text-center mt-2 ${
                                  theme === 'dark' ? 'text-light' : 'text-dark'
                                }`}>
                                  <div className="fw-bold fs-4">{formattedDate.day}</div>
                                  <div className="text-uppercase small">{formattedDate.month}</div>
                                  <div className="text-muted small">{formattedDate.year}</div>
                                </div>
                              </div>
                            </div>

                            {/* Left Card Content */}
                            <div className="col-md-10 ps-md-4">
                              <div className={`timeline-content card shadow-sm h-100 ${
                                theme === 'dark' ? 'bg-secondary text-light' : 'bg-white'
                              }`}>
                                <div className="card-body">
                                  <div className="d-flex align-items-center mb-3">
                                    <div className={`category-badge ${newsStyle.bg} text-white px-3 py-1 rounded-pill me-3`}>
                                      <i className={`${newsStyle.icon} me-1`}></i>
                                      {t('timeline.news', 'News')}
                                    </div>
                                    <small className={`${theme === 'dark' ? 'text-info' : 'text-muted'}`}>
                                      <i className="bi bi-calendar me-1"></i>
                                      {newsItem.date}
                                    </small>
                                  </div>
                                  <h4 className={`card-title mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                                    {newsItem.title}
                                  </h4>
                                  <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                                    {newsItem.description}
                                  </p>
                                  <Link 
                                    to={`/news/${newsItem.id}`} 
                                    className="btn btn-outline-primary btn-sm"
                                  >
                                    {t('common.readMore', 'Read More')}
                                    <i className="bi bi-arrow-right ms-2"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {/* Right Card Layout */}
                        {!isLeft && (
                          <>
                            {/* Right Card Content */}
                            <div className="col-md-10 pe-md-4">
                              <div className={`timeline-content card shadow-sm h-100 ${
                                theme === 'dark' ? 'bg-secondary text-light' : 'bg-white'
                              }`}>
                                <div className="card-body text-end">
                                  <div className="d-flex align-items-center justify-content-end mb-3">
                                    <small className={`${theme === 'dark' ? 'text-info' : 'text-muted'} me-3`}>
                                      <i className="bi bi-calendar me-1"></i>
                                      {newsItem.date}
                                    </small>
                                    <div className={`category-badge ${newsStyle.bg} text-white px-3 py-1 rounded-pill`}>
                                      <i className={`${newsStyle.icon} me-1`}></i>
                                      {t('timeline.news', 'News')}
                                    </div>
                                  </div>
                                  <h4 className={`card-title mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                                    {newsItem.title}
                                  </h4>
                                  <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                                    {newsItem.description}
                                  </p>
                                  <Link 
                                    to={`/news/${newsItem.id}`} 
                                    className="btn btn-outline-primary btn-sm"
                                  >
                                    <i className="bi bi-arrow-left me-2"></i>
                                    {t('common.readMore', 'Read More')}
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* Date Marker at the end for right cards */}
                            <div className="col-md-2 timeline-marker-container d-flex justify-content-end">
                              <div className="timeline-marker position-relative d-flex flex-column align-items-center">
                                <div 
                                  className={`timeline-dot ${newsStyle.bg} text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg`}
                                  style={{ width: '60px', height: '60px', zIndex: 3, position: 'relative' }}
                                >
                                  <i className={`${newsStyle.icon} fs-5`}></i>
                                </div>
                                <div className={`timeline-date text-center mt-2 ${
                                  theme === 'dark' ? 'text-light' : 'text-dark'
                                }`}>
                                  <div className="fw-bold fs-4">{formattedDate.day}</div>
                                  <div className="text-uppercase small">{formattedDate.month}</div>
                                  <div className="text-muted small">{formattedDate.year}</div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Load More Button */}
              {visibleNews < sortedNews.length && (
                <div className="text-center mt-5">
                  <button 
                    className="btn btn-primary btn-lg px-5"
                    onClick={loadMoreNews}
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    {t('timeline.loadMore', 'Load More News')}
                  </button>
                  <p className={`mt-2 small ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                    {t('timeline.showingCount', 'Showing {{current}} of {{total}}', { 
                      current: visibleNews, 
                      total: sortedNews.length 
                    })}
                  </p>
                </div>
              )}

              {/* All News Loaded Message */}
              {visibleNews >= sortedNews.length && sortedNews.length > 0 && (
                <div className="text-center mt-5">
                  <div className={`alert ${theme === 'dark' ? 'alert-dark' : 'alert-light'} border`}>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    {t('timeline.allLoaded', 'All news items have been loaded')}
                  </div>
                  <Link to="/all-news" className="btn btn-outline-primary">
                    <i className="bi bi-grid me-2"></i>
                    {t('timeline.viewGrid', 'View in Grid Format')}
                  </Link>
                </div>
              )}

              {/* No News Message */}
              {sortedNews.length === 0 && (
                <div className="text-center py-5">
                  <i className="bi bi-newspaper display-1 text-muted mb-3"></i>
                  <h3 className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    {t('timeline.noNews', 'No news found')}
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                    {t('timeline.noNewsDescription', 'Check back later for updates')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-5">
          <button 
            className="btn btn-outline-secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <i className="bi bi-arrow-up me-2"></i>
            {t('common.backToTop', 'Back to Top')}
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .timeline-item {
          position: relative;
        }
        
        .timeline-marker-container {
          display: flex;
          align-items: center;
        }
        
        .timeline-dot {
          box-shadow: 0 0 20px rgba(0,123,255,0.3);
          transition: all 0.3s ease;
        }
        
        .timeline-dot:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(0,123,255,0.5);
        }
        
        .timeline-content {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        
        .category-badge {
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .decorative-line {
          animation: shimmer 2s ease-in-out infinite alternate;
        }
        
        @keyframes shimmer {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        
        /* Timeline line connecting markers */
        .timeline-left .timeline-marker-container::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -50px;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, #007bff, #28a745);
          transform: translateY(-50%);
          z-index: 1;
        }
        
        .timeline-right .timeline-marker-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -50px;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, #28a745, #ffc107);
          transform: translateY(-50%);
          z-index: 1;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .timeline-left .timeline-marker-container::after,
          .timeline-right .timeline-marker-container::before {
            display: none;
          }
          
          .timeline-marker-container {
            justify-content: flex-start !important;
            margin-bottom: 20px;
          }
          
          .timeline-left .col-md-10,
          .timeline-right .col-md-10 {
            width: 100%;
            margin-left: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          
          .timeline-left .col-md-2,
          .timeline-right .col-md-2 {
            width: 100%;
            margin-bottom: 15px;
          }
          
          .timeline-right .card-body {
            text-align: left !important;
          }
          
          .timeline-right .d-flex {
            justify-content: flex-start !important;
          }
          
          .timeline-right .btn {
            text-align: left;
          }
        }
      `}</style>
    </main>
  );
};

export default Timeline;