import { Link } from 'react-router-dom'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

const EMBLEM_KEYS = ['figure', 'temple', 'branches', 'gold', 'black']

export default function HomeHeritage() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="home-heritage" ref={ref}>

      {/* Logo showcase */}
      <div className="home-heritage__logo-showcase reveal">
        <div className="home-heritage__logo-wrap">
          <img
            src="/logothynara.png"
            alt="THYNARA Emblem"
            className="home-heritage__logo-img"
          />
        </div>
      </div>

      <div className="home-heritage__content">
        <span className="home-heritage__tag reveal">{t('home.heritage.tag')}</span>
        <h2 className="home-heritage__title shimmer-text reveal reveal--d1">
          <span>{t('home.heritage.title_l1')}</span>
          <br />
          <span>{t('home.heritage.title_l2')}</span>
        </h2>
        <div className="home-heritage__bar reveal reveal--d2" aria-hidden="true" />
        <p className="home-heritage__text reveal reveal--d2">{t('home.heritage.body1')}</p>
        <p className="home-heritage__text reveal reveal--d2">{t('home.heritage.body2')}</p>

        {/* Emblem storytelling blocks */}
        <div className="emblem-story reveal reveal--d3">
          {EMBLEM_KEYS.map((key, i) => (
            <div className="emblem-story__block" key={key}>
              <span className="emblem-story__num">0{i + 1}</span>
              <div className="emblem-story__text">
                <h3 className="emblem-story__title">{t(`home.heritage.emblem_${key}_title`)}</h3>
                <p className="emblem-story__body">{t(`home.heritage.emblem_${key}_body`)}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="home-heritage__closing reveal reveal--d4">{t('home.heritage.emblem_closing')}</p>

        <Link to="/heritage" className="home-heritage__link reveal reveal--d4">
          <span>{t('home.heritage.link')}</span>
          <span aria-hidden="true">{"\u2192"}</span>
        </Link>

        <div className="home-heritage__dates reveal reveal--d4">
          <div className="home-heritage__date-item">
            <span className="home-heritage__date-val">{t('home.heritage.date1_val')}</span>
            <span className="home-heritage__date-label">{t('home.heritage.date1_label')}</span>
          </div>
          <div className="home-heritage__date-item">
            <span className="home-heritage__date-val">{t('home.heritage.date2_val')}</span>
            <span className="home-heritage__date-label">{t('home.heritage.date2_label')}</span>
          </div>
          <div className="home-heritage__date-item">
            <span className="home-heritage__date-val">{t('home.heritage.date3_val')}</span>
            <span className="home-heritage__date-label">{t('home.heritage.date3_label')}</span>
          </div>
        </div>
      </div>

    </section>
  )
}
