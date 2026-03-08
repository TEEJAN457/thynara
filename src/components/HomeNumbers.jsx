import { useCounter } from '../hooks/useCounter'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

function StatItem({ value, suffix, decimals, label }) {
  const [count, ref] = useCounter(value, 2200)
  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.round(count).toString()

  return (
    <div className="home-stat" ref={ref}>
      <span className="home-stat__val">
        {display}
        {suffix && <span className="home-stat__suffix">{suffix}</span>}
      </span>
      <p className="home-stat__label" style={{ whiteSpace: 'pre-line' }}>
        {label}
      </p>
    </div>
  )
}

export default function HomeNumbers() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  const STATS = [
    { value: 21,   suffix: '',  decimals: 0, label: t('numbers.stat1_label') },
    { value: 12,   suffix: 'K+', decimals: 0, label: t('numbers.stat2_label') },
    { value: 150,  suffix: 'K+', decimals: 0, label: t('numbers.stat3_label') },
    { value: 26,   suffix: '',  decimals: 0, label: t('numbers.stat4_label') },
  ]

  return (
    <section className="home-numbers" ref={ref}>
      <div className="home-numbers__head">
        <span className="home-numbers__eyebrow eyebrow reveal">{t('home.numbers.eyebrow')}</span>
        <h2 className="home-numbers__title shimmer-text reveal reveal--d1">{t('home.numbers.title')}</h2>
        <p className="home-numbers__sub reveal reveal--d2">{t('home.numbers.subtitle')}</p>
      </div>

      <div className="home-numbers__grid">
        {STATS.map(stat => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
