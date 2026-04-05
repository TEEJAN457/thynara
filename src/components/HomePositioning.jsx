import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function HomePositioning() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="home-pos" ref={ref}>
      {/* Target markets */}
      <div className="home-pos__header">
        <span className="eyebrow reveal">{t('home.positioning.eyebrow')}</span>
        <h2 className="home-pos__title shimmer-text reveal reveal--d1">{t('home.positioning.title')}</h2>
      </div>

      <div className="home-pos__grid">
        {[1, 2, 3].map((n, i) => (
          <div className={`home-pos__card reveal reveal--d${i + 1}`} key={n}>
            <span className="home-pos__card-num">0{n}</span>
            <h3 className="home-pos__card-title">{t(`home.positioning.p${n}_title`)}</h3>
            <p className="home-pos__card-desc">{t(`home.positioning.p${n}_desc`)}</p>
          </div>
        ))}
      </div>

      {/* Track record */}
      <div className="home-pos__track reveal reveal--d3">
        <h3 className="home-pos__track-title">{t('home.positioning.track_title')}</h3>
        <ul className="home-pos__track-list">
          <li>{t('home.positioning.track1')}</li>
          <li>{t('home.positioning.track2')}</li>
        </ul>
      </div>

      {/* MAIIN CI backing */}
      <div className="home-pos__backed reveal reveal--d4">
        <span className="eyebrow">{t('home.positioning.backed_eyebrow')}</span>
        <p className="home-pos__backed-text">{t('home.positioning.backed_text')}</p>
      </div>
    </section>
  )
}
