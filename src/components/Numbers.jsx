import { useCounter } from '../hooks/useCounter'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

function NumItem({ value, suffix, decimals, label }) {
  const [count, ref] = useCounter(value, 2200)

  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.round(count).toString()

  return (
    <div className="num-item" ref={ref}>
      <span className="num-item__val">
        {display}
        {suffix && <span className="num-item__suffix">{suffix}</span>}
      </span>
      <p className="num-item__label" style={{ whiteSpace: 'pre-line' }}>
        {label}
      </p>
    </div>
  )
}

export default function Numbers() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  const STATS = [
    { value: 21,   suffix: '',  decimals: 0, label: t('numbers.stat1_label') },
    { value: 12,   suffix: 'K+', decimals: 0, label: t('numbers.stat2_label') },
    { value: 150,  suffix: 'K+', decimals: 0, label: t('numbers.stat3_label') },
    { value: 26,   suffix: '',  decimals: 0, label: t('numbers.stat4_label') },
  ]

  return (
    <section className="numbers" ref={ref}>
      <div className="numbers__head">
        <span className="eyebrow reveal">{t('numbers.eyebrow')}</span>
        <h2 className="numbers__title reveal reveal--d1">{t('numbers.title')}</h2>
        <p className="numbers__subtitle reveal reveal--d2">{t('numbers.subtitle')}</p>
      </div>

      <div className="numbers__grid">
        {STATS.map(stat => (
          <NumItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
