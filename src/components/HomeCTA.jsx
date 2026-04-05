import { Link } from 'react-router-dom'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function HomeCTA() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="home-cta" ref={ref}>
      <span className="eyebrow home-cta__eyebrow reveal">{t('home.cta.eyebrow')}</span>
      <h2 className="home-cta__title shimmer-text reveal reveal--d1">
        <span>{t('home.cta.title_l1')}</span>
        <br />
        <span>{t('home.cta.title_l2')}</span>
      </h2>
      <p className="home-cta__sub reveal reveal--d2">{t('home.cta.sub')}</p>
      <div className="home-cta__actions reveal reveal--d3">
        <Link to="/contact" className="home-cta__btn">
          <span>{t('home.cta.btn')}</span>
          <span aria-hidden="true">{"\u2192"}</span>
        </Link>
        <Link to="/contact" className="home-cta__btn home-cta__btn--outline">
          <span>{t('home.cta.btn2')}</span>
          <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      </div>
    </section>
  )
}
