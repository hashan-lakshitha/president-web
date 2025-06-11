// filepath: d:\president\president-web\src\pages\Timeline\Header.tsx
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

interface Props { now: Date }

const Header: React.FC<Props> = ({ now }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <div className="w-100 text-end mb-3">
        <small className={theme==='dark'?'text-light':'text-muted'}>
          {now.toLocaleDateString()}&ensp;{now.toLocaleTimeString()}
        </small>
      </div>
      <div className="text-center mb-5">
        <nav aria-label="breadcrumb">
          <ol className={`breadcrumb justify-content-center ${theme==='dark'?'text-light':''}`}>
            <li className="breadcrumb-item">
              <Link to="/" className={theme==='dark'?'text-info':'text-primary'}>
                {t('common.home','Home')}
              </Link>
            </li>
            <li className={`breadcrumb-item active ${theme==='dark'?'text-light':'text-dark'}`}>
              {t('timeline.title','News Timeline')}
            </li>
          </ol>
        </nav>
        <h1 className={`display-3 fw-bold mb-3 ${theme==='dark'?'text-light':'text-dark'}`}>
          <i className="bi bi-clock-history text-primary me-2"/> 
          {t('timeline.title','News Timeline')}
        </h1>
        <p className={`fs-4 ${theme==='dark'?'text-light':'text-muted'}`}>
          {t('timeline.subtitle','Chronological Journey of Presidential News')}
        </p>
        <div className="decorative-line mx-auto" style={{
          width:100, height:4,
          background:'linear-gradient(90deg,#007bff,#28a745,#ffc107)',
          borderRadius:2
        }}/>
      </div>
    </>
  )
}

export default Header