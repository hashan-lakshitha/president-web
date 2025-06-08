import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from '../../components/SearchBar';
import newsImage from '../../assets/images/resource/news-i.png';
import newsData from '../../locales/pages-json/news.json';

type Campaign = {
  id: number;
  title: string;
  date: string;
  description: string;
  className?: string;
};

interface SearchFilters {
  category: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy: 'date' | 'title' | 'relevance';
  sortOrder: 'asc' | 'desc';
}

const AllNews: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'All',
    sortBy: 'date',
    sortOrder: 'desc'
  });
  const itemsPerPage = 6;
  
  const campaigns: Campaign[] = newsData;

  // Filter and search logic
  const filteredCampaigns = useMemo(() => {
    let filtered = campaigns;

    // Text search
    if (searchQuery.trim()) {
      filtered = filtered.filter(campaign =>
        campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category !== 'All') {
      // Add category logic here when you have category data
    }

    // Date range filter
    if (filters.dateFrom) {
      filtered = filtered.filter(campaign => 
        new Date(campaign.date) >= new Date(filters.dateFrom!)
      );
    }
    if (filters.dateTo) {
      filtered = filtered.filter(campaign => 
        new Date(campaign.date) <= new Date(filters.dateTo!)
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'relevance':
          // Implement relevance sorting based on search query
          comparison = 0;
          break;
      }
      
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [campaigns, searchQuery, filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCampaigns = filteredCampaigns.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleFilter = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filtering
  };

  return (
    <main className={`${theme === 'dark' ? 'bg-dark text-light' : 'bg-light'} min-vh-100`}>
      <div className="container py-5">
        {/* Header */}
        <div className="text-center mb-5">
          <nav aria-label="breadcrumb">
            <ol className={`breadcrumb justify-content-center ${theme === 'dark' ? 'text-light' : ''}`}>
              <li className="breadcrumb-item">
                <Link to="/" className={theme === 'dark' ? 'text-info' : 'text-primary'}>
                  {t('common.home', 'Home')}
                </Link>
              </li>
              <li className={`breadcrumb-item active ${theme === 'dark' ? 'text-light' : 'text-dark'}`} aria-current="page">
                {t('news.allNews', 'All News')}
              </li>
            </ol>
          </nav>
          
          <h1 className={`display-4 fw-bold mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
            <i className="bi bi-newspaper text-primary me-3"></i>
            {t('news.allNews', 'All News')}
          </h1>
          <p className={`fs-5 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
            {t('news.allNewsDescription', 'Stay updated with the latest news and announcements')}
          </p>
          
          {/* View Toggle Buttons
          <div className="d-flex justify-content-center gap-3 mt-4">
            <span className={`btn btn-primary active`}>
              <i className="bi bi-grid-3x3-gap me-2"></i>
              {t('news.gridView', 'Grid View')}
            </span>
            <Link 
              to="/timeline" 
              className={`btn ${theme === 'dark' ? 'btn-outline-warning' : 'btn-outline-primary'}`}
            >
              <i className="bi bi-clock-history me-2"></i>
              {t('news.timelineView', 'Timeline View')}
            </Link>
          </div> */}
        </div>

        {/* Search Bar */}
        <SearchBar
          onSearch={handleSearch}
          onFilter={handleFilter}
          placeholder={t('search.newsPlaceholder', 'Search news articles...')}
          categories={['All', 'News', 'Announcements', 'Press Releases']}
        />

        {/* Results Summary with Timeline Button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className={`mb-0 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
            {t('search.resultsFound', 'Showing {{count}} results', { count: filteredCampaigns.length })}
            {searchQuery && (
              <span> {t('search.forQuery', 'for "{{query}}"', { query: searchQuery })}</span>
            )}
          </p>
          
          {/* Additional Timeline Button */}
          <Link 
            to="/timeline" 
            className="btn btn-sm btn-outline-info d-none d-md-inline-flex"
            title={t('news.switchToTimeline', 'Switch to Timeline View')}
          >
            <i className="bi bi-clock-history me-2"></i>
            {t('news.timeline', 'Timeline')}
          </Link>
        </div>

        {/* News Grid */}
        {currentCampaigns.length > 0 ? (
          <div className="row g-4">
            {currentCampaigns.map((campaign) => (
              <div className="col-lg-4 col-md-6" key={campaign.id}>
                <div className={`card shadow-sm border-0 h-100 single-campaign-box ${campaign.className} ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-white'}`}>
                  <div className="position-relative">
                    <img 
                      src={newsImage} 
                      className="card-img-top" 
                      alt={campaign.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary">
                        <i className="bi bi-calendar-check me-1"></i>
                        {campaign.date}
                      </span>
                    </div>
                  </div>
                  <div className="card-body campaign-box-content">
                    <h5 className="card-title mb-3">
                      <Link 
                        to={`/news/${campaign.id}`} 
                        className={`text-decoration-none ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
                      >
                        {campaign.title}
                      </Link>
                    </h5>
                    <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                      {campaign.description.length > 100 
                        ? `${campaign.description.substring(0, 100)}...` 
                        : campaign.description
                      }
                    </p>
                    <Link 
                      to={`/news/${campaign.id}`} 
                      className="btn btn-outline-primary btn-sm"
                    >
                      {t('common.readMore', 'Read More')}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="bi bi-search display-1 text-muted mb-3"></i>
            <h3 className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
              {t('search.noResults', 'No results found')}
            </h3>
            <p className={`${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
              {t('search.noResultsDescription', 'Try adjusting your search terms or filters')}
            </p>
            
            {/* Timeline Option in No Results */}
            <div className="mt-4">
              <Link 
                to="/timeline" 
                className="btn btn-outline-primary"
              >
                <i className="bi bi-clock-history me-2"></i>
                {t('news.tryTimelineView', 'Try Timeline View Instead')}
              </Link>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label="News pagination" className="mt-5">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <i className="bi bi-chevron-left"></i>
                  {t('common.previous', 'Previous')}
                </button>
              </li>
              
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button 
                      className="page-link"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </li>
                );
              })}
              
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  {t('common.next', 'Next')}
                  <i className="bi bi-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        )}

        {/* Bottom Action Buttons */}
        <div className="text-center mt-5">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              to="/timeline" 
              className="btn btn-warning btn-lg"
            >
              <i className="bi bi-clock-history me-2"></i>
              {t('news.viewTimeline', 'View as Timeline')}
            </Link>
            <Link 
              to="/" 
              className="btn btn-secondary"
            >
              <i className="bi bi-house me-2"></i>
              {t('common.backToHome', 'Back to Home')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllNews;