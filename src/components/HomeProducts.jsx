import { Link } from 'react-router-dom'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function HomeProducts() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  const ITEMS = [
    { name: t('home.products.p1_name'), grade: t('home.products.p1_grade') },
  ]

  return (
    <section className="home-products" ref={ref}>
      <div className="home-products__header">
        <div>
          <span className="home-products__eyebrow eyebrow--dark reveal">
            {t('home.products.eyebrow')}
          </span>
          <h2 className="home-products__title shimmer-text reveal reveal--d1">
            {t('home.products.title')}
          </h2>
        </div>
        <Link to="/products" className="home-products__all reveal reveal--d1">
          <span>{t('home.products.viewAll')}</span> <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      </div>

      <div className="home-products__grid">
        {ITEMS.map((p, i) => (
          <div
            className={`home-prod-card reveal reveal--d${(i % 4) + 1}`}
            key={p.name}
          >
            <div className="home-prod-card__img">
              <img
                src="/Gemini_Generated_Image_40lapo40lapo40la (1).png"
                alt={p.name}
                className="home-prod-card__img-photo"
              />
            </div>
            <div className="home-prod-card__content">
              <p className="home-prod-card__grade">{p.grade}</p>
              <h3 className="home-prod-card__name">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
