import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import newsImage from '../../assets/images/resource/news-i.png';
import newsData from '../../locales/pages-json/news.json';

type Campaign = {
  id: number;
  title: string;
  date: string;
  description: string;
  className?: string;
};

const News: React.FC = () => {
  const { t } = useTranslation();
  const campaigns: Campaign[] = newsData;
  
  // Show only first 4 news items
  const limitedCampaigns = campaigns.slice(0, 4);

  return (
    <main>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h4>
            <i className="bi bi-newspaper text-primary me-2" style={{ fontSize: 24 }}></i>
            {t('news.title')}
          </h4>
          <h1>{t('news.description')}</h1>
        </div>
        <div className="row g-4">
          {limitedCampaigns.map((campaign) => (
            <div className="col-lg-6 col-md-12" key={campaign.id}>
              <div className={`card shadow-sm border-0 h-100 single-campaign-box ${campaign.className}`}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={newsImage} className="img-fluid h-100 object-fit-cover" alt={campaign.title} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body campaign-box-content">
                      <h4 className="card-title mb-2">
                        <Link to={`/news/${campaign.id}`} className="text-decoration-none text-dark">
                          {campaign.title}
                        </Link>
                      </h4>
                      <span className="campaign-date d-block mb-2 text-muted">
                        <i className="bi bi-calendar-check me-2"></i>
                        {campaign.date}
                      </span>
                      <p className="card-text">{campaign.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All News Button */}
        <div className="text-center mt-5">
          <Link 
            to="/all-news" 
            className="btn btn-primary btn-lg px-5 py-3"
          >
            <i className="bi bi-arrow-right me-2"></i>
            {t('news.viewAll', 'View All News')}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default News;