import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function Heritage() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  const MILESTONES = [
    { year: '2005', text: t('heritage.ms1') },
    { year: '2008', text: t('heritage.ms2') },
    { year: '2010', text: t('heritage.ms3') },
    { year: '2013', text: t('heritage.ms4') },
    { year: '2017', text: t('heritage.ms5') },
    { year: '2021', text: t('heritage.ms6') },
    { year: '2025', text: t('heritage.ms7') },
  ]

  return (
    <section className="heritage" id="heritage" ref={ref}>
      <div
        className="heritage__vert reveal"
        aria-hidden="true"
      >
        {t('heritage.vert')}
      </div>

      <div className="heritage__right">
        <span className="eyebrow heritage__eyebrow reveal">{t('heritage.eyebrow')}</span>

        <h2 className="heritage__title reveal reveal--d1">
          <span>{t('heritage.title_l1')}</span>
          <br />
          <span>{t('heritage.title_l2')}</span>
        </h2>

        <div className="heritage__bar reveal reveal--d2" aria-hidden="true" />

        <div className="heritage__body reveal reveal--d2">
          <p>{t('heritage.body1')}</p>
          <p>{t('heritage.body2')}</p>
          <p>{t('heritage.body3')}</p>
        </div>

        {/* Founders portrait */}
        <div className="heritage__founders reveal reveal--d3">
          <div className="heritage__founders-img-wrap">
            <img
              src="/Gemini_Generated_Image_hj5bmwhj5bmwhj5b (3).png"
              alt={t('heritage.founders_alt')}
              className="heritage__founders-img"
            />
          </div>
          <p className="heritage__founders-caption">{t('heritage.founders_caption')}</p>
        </div>

        <div className="heritage__stats reveal reveal--d3">
          <div className="heritage__stat">
            <span className="heritage__stat-value">{t('heritage.stat1_val')}</span>
            <span className="heritage__stat-label" style={{ whiteSpace: 'pre-line' }}>{t('heritage.stat1_label')}</span>
          </div>
          <div className="heritage__stat">
            <span className="heritage__stat-value">{t('heritage.stat2_val')}</span>
            <span className="heritage__stat-label" style={{ whiteSpace: 'pre-line' }}>{t('heritage.stat2_label')}</span>
          </div>
          <div className="heritage__stat">
            <span className="heritage__stat-value">{t('heritage.stat3_val')}</span>
            <span className="heritage__stat-label" style={{ whiteSpace: 'pre-line' }}>{t('heritage.stat3_label')}</span>
          </div>
        </div>

        {/* Milestones timeline */}
        <div className="heritage__milestones reveal reveal--d4">
          <span className="heritage__milestones-label">{t('heritage.timeline_label')}</span>
          <ol className="heritage__milestone-list">
            {MILESTONES.map(m => (
              <li className="heritage__milestone" key={m.year}>
                <span className="heritage__milestone-year">{m.year}</span>
                <span className="heritage__milestone-dot" aria-hidden="true" />
                <span className="heritage__milestone-text">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
