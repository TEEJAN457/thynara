import { Link } from 'react-router-dom'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function HomeServices() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  const SERVICES = [
    {
      num: '01',
      title: t('home.services.s1_title'),
      desc: t('home.services.s1_desc'),
      link: '/operations',
      cta: t('home.services.s1_cta'),
    },
    {
      num: '02',
      title: t('home.services.s2_title'),
      desc: t('home.services.s2_desc'),
      link: '/products',
      cta: t('home.services.s2_cta'),
    },
    {
      num: '03',
      title: t('home.services.s3_title'),
      desc: t('home.services.s3_desc'),
      link: '/heritage',
      cta: t('home.services.s3_cta'),
    },
  ]

  return (
    <section className="home-services" ref={ref}>
      <div className="home-services__header">
        <span className="eyebrow reveal">{t('home.services.eyebrow')}</span>
        <h2 className="home-services__title shimmer-text reveal reveal--d1">
          <span>{t('home.services.title_l1')}</span>
          <br />
          <span>{t('home.services.title_l2')}</span>
        </h2>
      </div>

      <div className="home-services__grid">
        {SERVICES.map((s, i) => (
          <article
            className={`svc-card reveal reveal--d${i + 1}`}
            key={s.num}
          >
            <span className="svc-card__num">{s.num}</span>
            <h3 className="svc-card__title">{s.title}</h3>
            <p className="svc-card__desc">{s.desc}</p>
            <Link to={s.link} className="svc-card__link">
              {s.cta}
              <span className="svc-card__link-arrow" aria-hidden="true">{"\u2192"}</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
