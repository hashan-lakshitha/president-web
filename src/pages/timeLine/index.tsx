import React, { useState, useEffect, useMemo } from 'react'
// import { useTranslation } from 'react-i18next'
import { useTheme } from '../../context/ThemeContext'
import newsData from '../../locales/pages-json/news.json'
import Header from '../timeLine/Header'
import Stats from '../timeLine/Stats'
import List from '../timeLine/List'
import './Timeline.css'

const Timeline: React.FC = () => {
//   const { t } = useTranslation()
  const { theme } = useTheme()
  const [now, setNow] = useState(new Date())
  const [visible, setVisible] = useState(6)

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const sorted = useMemo(() => {
    const toMs = (d: string) =>
      new Date(d.replace(/(\d{1,2}) (\w{3}), (\d{4})/, '$2 $1, $3')).getTime()
    return [...newsData].sort((a, b) => toMs(b.date) - toMs(a.date))
  }, [])

  return (
    <main className={`timeline-page ${theme==='dark'? 'bg-dark text-light':'bg-light'} min-vh-100`}>
      <div className="container py-5">
        <Header now={now} />
        <Stats total={sorted.length} showing={visible} />
        <List 
          items={sorted} 
          visible={visible} 
          onLoadMore={() => setVisible(v => v + 6)} 
        />
      </div>
    </main>
  )
}

export default Timeline