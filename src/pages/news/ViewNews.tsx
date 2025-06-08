import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import newsImage from '../../assets/images/resource/news-i.png';
import newsData from '../../locales/pages-json/news.json';

type Campaign = {
  id: number;
  title: string;
  date: string;
  description: string;
  className?: string;
};

const ViewNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  const campaigns: Campaign[] = newsData;
  const newsId = parseInt(id || '0', 10);
  const newsItem = campaigns.find(campaign => campaign.id === newsId);

  // Get related news (next 3 articles)
  const currentIndex = campaigns.findIndex(campaign => campaign.id === newsId);
  const relatedNews = campaigns
    .filter((_, index) => index !== currentIndex)
    .slice(0, 3);

  if (!newsItem) {
    return (
      <main className={`${theme === 'dark' ? 'bg-dark text-light' : 'bg-light'} min-vh-100`}>
        <div className="container py-5">
          <div className="text-center">
            <h1 className={`display-4 mb-4 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              {t('news.notFound', 'News Not Found')}
            </h1>
            <p className={`fs-5 mb-4 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
              {t('news.notFoundDescription', 'The news article you are looking for does not exist.')}
            </p>
            <Link to="/all-news" className="btn btn-primary">
              <i className="bi bi-arrow-left me-2"></i>
              {t('news.backToNews', 'Back to News')}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={`${theme === 'dark' ? 'bg-dark text-light' : 'bg-light'} min-vh-100`}>
      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className={`breadcrumb ${theme === 'dark' ? 'text-light' : ''}`}>
            <li className="breadcrumb-item">
              <Link to="/" className={theme === 'dark' ? 'text-info' : 'text-primary'}>
                {t('common.home', 'Home')}
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/all-news" className={theme === 'dark' ? 'text-info' : 'text-primary'}>
                {t('news.allNews', 'All News')}
              </Link>
            </li>
            <li className={`breadcrumb-item active ${theme === 'dark' ? 'text-light' : 'text-dark'}`} aria-current="page">
              {newsItem.title.length > 30 ? `${newsItem.title.substring(0, 30)}...` : newsItem.title}
            </li>
          </ol>
        </nav>

        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            <article className={`card shadow-sm border-0 ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-white'}`}>
              {/* Featured Image */}
              <div className="position-relative">
                <img 
                  src={newsImage} 
                  className="card-img-top" 
                  alt={newsItem.title}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 start-0 m-3">
                  <span className="badge bg-primary fs-6">
                    <i className="bi bi-newspaper me-2"></i>
                    {t('news.newsArticle', 'News Article')}
                  </span>
                </div>
              </div>

              <div className="card-body p-4">
                {/* Article Header */}
                <div className="mb-4">
                  <h1 className={`display-5 fw-bold mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    {newsItem.title}
                  </h1>
                  
                  <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                    <span className={`${theme === 'dark' ? 'text-info' : 'text-primary'}`}>
                      <i className="bi bi-calendar-check me-2"></i>
                      {newsItem.date}
                    </span>
                    <span className={`${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                      <i className="bi bi-eye me-2"></i>
                      {t('news.views', 'Views')}: {Math.floor(Math.random() * 1000) + 100}
                    </span>
                    <span className={`${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                      <i className="bi bi-clock me-2"></i>
                      {t('news.readTime', 'Read time')}: 3 min
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className={`article-content ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                  <p className="fs-5 mb-4 fw-light">
                    {newsItem.description}
                  </p>
                  
                  {/* Extended content */}
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quod. Dolorem, 
                    quibusdam. Quisquam, voluptatum. Quisquam, voluptatum. Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Quas, quod. Dolorem, quibusdam. Quisquam, voluptatum.
                  </p>
                  
                  <p className="mb-4">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur.
                  </p>

                  <blockquote className={`blockquote border-start border-primary border-4 ps-3 my-4 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    <p className="mb-0 fst-italic">
                      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum."
                    </p>
                  </blockquote>

                  <p className="mb-4">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
                    occaecati cupiditate non provident.
                  </p>
                </div>

                {/* Social Share */}
                <div className="border-top pt-4 mt-4">
                  <h6 className={`mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    {t('news.shareArticle', 'Share this article')}:
                  </h6>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-outline-info btn-sm">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="btn btn-outline-success btn-sm">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Navigation */}
            <div className="d-flex justify-content-between mt-4">
              <button 
                onClick={() => navigate(-1)} 
                className="btn btn-outline-secondary"
              >
                <i className="bi bi-arrow-left me-2"></i>
                {t('common.goBack', 'Go Back')}
              </button>
              <Link to="/all-news" className="btn btn-primary">
                {t('news.moreNews', 'More News')}
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '20px' }}>
              {/* Related News */}
              <div className={`card shadow-sm border-0 mb-4 ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-white'}`}>
                <div className="card-header">
                  <h5 className={`mb-0 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    <i className="bi bi-newspaper me-2 text-primary"></i>
                    {t('news.relatedNews', 'Related News')}
                  </h5>
                </div>
                <div className="card-body">
                  {relatedNews.map((relatedItem) => (
                    <div key={relatedItem.id} className="mb-3 pb-3 border-bottom">
                      <Link 
                        to={`/news/${relatedItem.id}`}
                        className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
                      >
                        <h6 className="mb-2 hover-text-primary">
                          {relatedItem.title.length > 50 
                            ? `${relatedItem.title.substring(0, 50)}...` 
                            : relatedItem.title
                          }
                        </h6>
                      </Link>
                      <small className={`${theme === 'dark' ? 'text-info' : 'text-muted'}`}>
                        <i className="bi bi-calendar-check me-1"></i>
                        {relatedItem.date}
                      </small>
                    </div>
                  ))}
                  <Link to="/all-news" className="btn btn-outline-primary btn-sm w-100">
                    {t('news.viewAllNews', 'View All News')}
                  </Link>
                </div>
              </div>

              {/* Quick Actions */}
              <div className={`card shadow-sm border-0 ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-white'}`}>
                <div className="card-header">
                  <h5 className={`mb-0 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    <i className="bi bi-lightning me-2 text-warning"></i>
                    {t('news.quickActions', 'Quick Actions')}
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-2">
                    <Link to="/contact" className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-envelope me-2"></i>
                      {t('contact.contactUs', 'Contact Us')}
                    </Link>
                    <Link to="/events" className="btn btn-outline-success btn-sm">
                      <i className="bi bi-calendar-event me-2"></i>
                      {t('events.upcomingEvents', 'Upcoming Events')}
                    </Link>
                    <Link to="/" className="btn btn-outline-info btn-sm">
                      <i className="bi bi-house me-2"></i>
                      {t('common.backToHome', 'Back to Home')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hover effects */}
      <style>{`
        .hover-text-primary:hover {
          color: #0d6efd !important;
        }
        .article-content p {
          line-height: 1.8;
        }
        .sticky-top {
          position: sticky;
        }
      `}</style>
    </main>
  );
};

export default ViewNews;