import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../context/ThemeContext'

export interface NewsItem {
  id: number; title: string; date: string; description: string; className?: string
}
export interface Props {
  item: NewsItem; index: number
}

const styles: Record<string, { bg: string; icon: string }> = {
  '': { bg:'bg-primary', icon:'bi-newspaper' },
  two:{ bg:'bg-success', icon:'bi-megaphone' },
  three:{ bg:'bg-warning', icon:'bi-calendar-event' },
  four:{ bg:'bg-danger', icon:'bi-flag' },
  five:{ bg:'bg-info', icon:'bi-trophy' }
}
const Item: React.FC<Props> = ({ item, index }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const isLeft = index % 2 === 0
  const { bg, icon } = styles[item.className || ''] || styles['']
  const [day, month, year] = item.date.replace(',', '').split(' ')
  
  return (
    <div className={`timeline-item mb-5 ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
      <div className="row align-items-center">

        {/* Left Card Layout */}
        {isLeft && (
          <>
            {/* Date Marker at the beginning for left cards */}
            <div className="col-md-2 timeline-marker-container d-flex justify-content-start">
              <div className="timeline-marker position-relative d-flex flex-column align-items-center">
                <div 
                  className={`timeline-dot ${bg} text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg`}
                  style={{ width: '60px', height: '60px', zIndex: 3, position: 'relative' }}
                >
                  <i className={`${icon} fs-5`}></i>
                </div>
                <div className={`timeline-date text-center mt-2 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                  <div className="fw-bold fs-4">{day}</div>
                  <div className="text-uppercase small">{month}</div>
                  <div className="text-muted small">{year}</div>
                </div>
              </div>
            </div>

            {/* Left Card Content */}
            <div className="col-md-10 ps-md-4">
              <div className={`timeline-content card shadow-sm h-100 ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-white'}`}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className={`category-badge ${bg} text-white px-3 py-1 rounded-pill me-3`}>
                      <i className={`${icon} me-1`}></i>
                      News
                    </div>
                    <small className={`${theme === 'dark' ? 'text-info' : 'text-muted'}`}>
                      <i className="bi bi-calendar me-1"></i>
                      {item.date}
                    </small>
                  </div>
                  <h4 className={`card-title mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    {item.title}
                  </h4>
                  <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                    {item.description}
                  </p>
                  <Link 
                    to={`/news/${item.id}`} 
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
              <div className={`timeline-content card shadow-sm h-100 ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-white'}`}>
                <div className="card-body text-end">
                  <div className="d-flex align-items-center justify-content-end mb-3">
                    <small className={`${theme === 'dark' ? 'text-info' : 'text-muted'} me-3`}>
                      <i className="bi bi-calendar me-1"></i>
                      {item.date}
                    </small>
                    <div className={`category-badge ${bg} text-white px-3 py-1 rounded-pill`}>
                      <i className={`${icon} me-1`}></i>
                      News
                    </div>
                  </div>
                  <h4 className={`card-title mb-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    {item.title}
                  </h4>
                  <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-muted'}`}>
                    {item.description}
                  </p>
                  <Link 
                    to={`/news/${item.id}`} 
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
                  className={`timeline-dot ${bg} text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg`}
                  style={{ width: '60px', height: '60px', zIndex: 3, position: 'relative' }}
                >
                  <i className={`${icon} fs-5`}></i>
                </div>
                <div className={`timeline-date text-center mt-2 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                  <div className="fw-bold fs-4">{day}</div>
                  <div className="text-uppercase small">{month}</div>
                  <div className="text-muted small">{year}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>

    
  )

  
}

export default Item