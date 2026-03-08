import { useCounter } from '../hooks/useCounter'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

const STATS = [
  { key: 'export_stat1', numVal: 2400 },
  { key: 'export_stat2', numVal: 86 },
  { key: 'export_stat3', numVal: 14 },
  { key: 'export_stat4', numVal: 340 },
]

const REGIONS = [1, 2, 3, 4]

function StatCounter({ numVal, display, unit, label, delay }) {
  const [count, ref] = useCounter(numVal, 2200)

  return (
    <div className={`export-stat reveal reveal--d${delay}`} ref={ref}>
      <span className="export-stat__val">
        {display === '2,400' || display === '2 400'
          ? Math.round(count).toLocaleString()
          : Math.round(count)}
        <span className="export-stat__unit">{unit}</span>
      </span>
      <p className="export-stat__label">{label}</p>
    </div>
  )
}

export default function ExportNetwork() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="export-net" ref={ref}>
      <div className="export-net__header">
        <span className="export-net__eyebrow eyebrow--dark reveal">
          {t('operations.export_eyebrow')}
        </span>
        <h2 className="export-net__title reveal reveal--d1">
          {t('operations.export_title')}
        </h2>
        <p className="export-net__subtitle reveal reveal--d2">
          {t('operations.export_subtitle')}
        </p>
      </div>

      <div className="export-net__stats">
        {STATS.map((s, i) => (
          <StatCounter
            key={s.key}
            numVal={s.numVal}
            display={t(`operations.${s.key}_val`)}
            unit={t(`operations.${s.key}_unit`)}
            label={t(`operations.${s.key}_label`)}
            delay={(i % 4) + 1}
          />
        ))}
      </div>

      <div className="export-net__regions">
        {REGIONS.map((n, i) => (
          <div
            className={`export-region reveal reveal--d${(i % 4) + 1}`}
            key={n}
          >
            <div className="export-region__head">
              <span className="export-region__num">0{n}</span>
              <h3 className="export-region__name">
                {t(`operations.export_region${n}`)}
              </h3>
            </div>
            <p className="export-region__countries">
              {t(`operations.export_region${n}_countries`)}
            </p>
            <p className="export-region__body">
              {t(`operations.export_region${n}_body`)}
            </p>
            <div className="export-region__vol-bar">
              <span className="export-region__vol">
                {t(`operations.export_region${n}_vol`)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="export-net__quote reveal">
        <p>{t('operations.export_quote')}</p>
        <cite>{t('operations.export_quote_attr')}</cite>
      </blockquote>
    </section>
  )
}
