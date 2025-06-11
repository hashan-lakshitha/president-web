import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../context/ThemeContext'

interface Props { total: number; showing: number }

const Stats: React.FC<Props> = ({ total, showing }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className="row mb-5">
      <div className="col-lg-8 mx-auto">
        <div className={`card shadow-sm ${theme==='dark'?'bg-secondary':'bg-white'}`}>
          <div className="card-body">
            <div className="row text-center">
              {[
                { icon: 'bi-newspaper', value: total, label: t('timeline.totalNews','Total News') },
                { icon: 'bi-calendar-check', value: new Date().getFullYear(), label: t('timeline.currentYear','Current Year') },
                { icon: 'bi-clock', value: showing, label: t('timeline.showing','Showing') }
              ].map((col, i) => (
                <div key={i} className="col-md-4">
                  <i className={`bi ${col.icon} text-${i===1?'success':i===2?'warning':'primary'} fs-1`}/>
                  <h4 className="mt-2">{col.value}</h4>
                  <p className={`mb-0 ${theme==='dark'?'text-light':'text-muted'}`}>
                    {col.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats