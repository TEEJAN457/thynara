import { useEffect, useState, useRef } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

/* Olive oil market data — based on 2026 global wholesale averages */
const COMMODITIES = [
  { symbol: 'EVOO',   nameKey: 'ticker.evoo',   base: 4.49  },
  { symbol: 'VOO',    nameKey: 'ticker.voo',    base: 3.82  },
  { symbol: 'LAMPTE', nameKey: 'ticker.lampte', base: 3.21  },
  { symbol: 'POMACE', nameKey: 'ticker.pomace', base: 1.87  },
]

function randomDrift(base) {
  const pct = (Math.random() - 0.48) * 0.6
  return +(base + base * pct / 100).toFixed(2)
}

function initPrices() {
  return COMMODITIES.map(c => {
    const price = randomDrift(c.base)
    const change = +(price - c.base).toFixed(2)
    const changePct = +((change / c.base) * 100).toFixed(2)
    return { ...c, price, change, changePct }
  })
}

export default function OilTicker() {
  const [prices, setPrices] = useState(initPrices)
  const intervalRef = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPrices(prev =>
        prev.map(item => {
          const price = randomDrift(item.base)
          const change = +(price - item.base).toFixed(2)
          const changePct = +((change / item.base) * 100).toFixed(2)
          return { ...item, price, change, changePct }
        })
      )
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div className="ticker">
      <div className="ticker__strip">
        {[...prices, ...prices].map((item, i) => {
          const up = item.change >= 0
          return (
            <span key={i} className="ticker__item">
              <span className="ticker__symbol">{item.symbol}</span>
              <span className="ticker__price">€{item.price}/kg</span>
              <span className={`ticker__change ${up ? 'ticker__change--up' : 'ticker__change--down'}`}>
                {up ? '▲' : '▼'} {Math.abs(item.change)} ({up ? '+' : ''}{item.changePct}%)
              </span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
