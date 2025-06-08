import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (filters: SearchFilters) => void;
  placeholder?: string;
  showFilters?: boolean;
  categories?: string[];
  dateRange?: boolean;
}

interface SearchFilters {
  category: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy: 'date' | 'title' | 'relevance';
  sortOrder: 'asc' | 'desc';
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onFilter,
  placeholder,
  showFilters = true,
  categories = ['All', 'News', 'Events', 'Announcements'],
  dateRange = true
}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'All',
    sortBy: 'date',
    sortOrder: 'desc'
  });

  // Debounced search
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery.trim() !== '') {
        onSearch(searchQuery);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, onSearch]);

  // Handle filter changes
  useEffect(() => {
    onFilter(filters);
  }, [filters, onFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'All',
      sortBy: 'date',
      sortOrder: 'desc'
    });
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className={`search-bar-container ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
      {/* Main Search Bar */}
      <form onSubmit={handleSearchSubmit} className="mb-3">
        <div className="input-group input-group-lg">
          <span className={`input-group-text ${theme === 'dark' ? 'bg-secondary border-secondary text-light' : 'bg-light'}`}>
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className={`form-control ${theme === 'dark' ? 'bg-secondary border-secondary text-light' : ''}`}
            placeholder={placeholder || t('search.placeholder', 'Search news, events, announcements...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            className="btn btn-primary" 
            type="submit"
            disabled={!searchQuery.trim()}
          >
            {t('search.searchButton', 'Search')}
          </button>
          {showFilters && (
            <button
              type="button"
              className={`btn ${showAdvancedFilters ? 'btn-warning' : 'btn-outline-secondary'}`}
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              <i className="bi bi-funnel me-2"></i>
              {t('search.filters', 'Filters')}
            </button>
          )}
        </div>
      </form>

      {/* Quick Category Filters */}
      {showFilters && (
        <div className="row mb-3">
          <div className="col-12">
            <div className="d-flex flex-wrap gap-2">
              <small className={`align-self-center me-2 ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                {t('search.quickFilters', 'Quick Filters')}:
              </small>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`btn btn-sm ${
                    filters.category === category 
                      ? 'btn-primary' 
                      : theme === 'dark' 
                        ? 'btn-outline-light' 
                        : 'btn-outline-primary'
                  }`}
                  onClick={() => handleFilterChange('category', category)}
                >
                  {t(`search.categories.${category.toLowerCase()}`, category)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Advanced Filters */}
      {showFilters && showAdvancedFilters && (
        <div className={`card ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-light'} mb-4`}>
          <div className="card-header">
            <h6 className="mb-0">
              <i className="bi bi-sliders me-2"></i>
              {t('search.advancedFilters', 'Advanced Filters')}
            </h6>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {/* Date Range Filter */}
              {dateRange && (
                <>
                  <div className="col-md-3">
                    <label className="form-label small">
                      {t('search.dateFrom', 'Date From')}
                    </label>
                    <input
                      type="date"
                      className={`form-control form-control-sm ${theme === 'dark' ? 'bg-dark border-secondary text-light' : ''}`}
                      value={filters.dateFrom || ''}
                      onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label small">
                      {t('search.dateTo', 'Date To')}
                    </label>
                    <input
                      type="date"
                      className={`form-control form-control-sm ${theme === 'dark' ? 'bg-dark border-secondary text-light' : ''}`}
                      value={filters.dateTo || ''}
                      onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* Sort By */}
              <div className="col-md-3">
                <label className="form-label small">
                  {t('search.sortBy', 'Sort By')}
                </label>
                <select
                  className={`form-select form-select-sm ${theme === 'dark' ? 'bg-dark border-secondary text-light' : ''}`}
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                >
                  <option value="date">{t('search.sortOptions.date', 'Date')}</option>
                  <option value="title">{t('search.sortOptions.title', 'Title')}</option>
                  <option value="relevance">{t('search.sortOptions.relevance', 'Relevance')}</option>
                </select>
              </div>

              {/* Sort Order */}
              <div className="col-md-3">
                <label className="form-label small">
                  {t('search.sortOrder', 'Sort Order')}
                </label>
                <select
                  className={`form-select form-select-sm ${theme === 'dark' ? 'bg-dark border-secondary text-light' : ''}`}
                  value={filters.sortOrder}
                  onChange={(e) => handleFilterChange('sortOrder', e.target.value)}
                >
                  <option value="desc">{t('search.sortOrderOptions.desc', 'Newest First')}</option>
                  <option value="asc">{t('search.sortOrderOptions.asc', 'Oldest First')}</option>
                </select>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="mt-3 d-flex gap-2">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={clearFilters}
              >
                <i className="bi bi-x-circle me-1"></i>
                {t('search.clearFilters', 'Clear All')}
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setShowAdvancedFilters(false)}
              >
                <i className="bi bi-chevron-up me-1"></i>
                {t('search.hideFilters', 'Hide Filters')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {showFilters && (filters.category !== 'All' || filters.dateFrom || filters.dateTo) && (
        <div className="mb-3">
          <small className={`${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
            {t('search.activeFilters', 'Active Filters')}:
          </small>
          <div className="d-flex flex-wrap gap-1 mt-1">
            {filters.category !== 'All' && (
              <span className="badge bg-primary">
                {t('search.category', 'Category')}: {filters.category}
                <button
                  type="button"
                  className="btn-close btn-close-white ms-1"
                  aria-label="Remove filter"
                  onClick={() => handleFilterChange('category', 'All')}
                  style={{ fontSize: '0.6em' }}
                ></button>
              </span>
            )}
            {filters.dateFrom && (
              <span className="badge bg-info">
                {t('search.from', 'From')}: {filters.dateFrom}
                <button
                  type="button"
                  className="btn-close btn-close-white ms-1"
                  aria-label="Remove filter"
                  onClick={() => handleFilterChange('dateFrom', '')}
                  style={{ fontSize: '0.6em' }}
                ></button>
              </span>
            )}
            {filters.dateTo && (
              <span className="badge bg-info">
                {t('search.to', 'To')}: {filters.dateTo}
                <button
                  type="button"
                  className="btn-close btn-close-white ms-1"
                  aria-label="Remove filter"
                  onClick={() => handleFilterChange('dateTo', '')}
                  style={{ fontSize: '0.6em' }}
                ></button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;