import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

const CERTS = [1, 2, 3]

export default function HomeCertifications() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="home-certs" ref={ref}>
      <div className="home-certs__header">
        <span className="home-certs__eyebrow eyebrow--dark reveal">
          {t('home.certifications.eyebrow')}
        </span>
        <h2 className="home-certs__title reveal reveal--d1">
          {t('home.certifications.title')}
        </h2>
        <p className="home-certs__subtitle reveal reveal--d2">
          {t('home.certifications.subtitle')}
        </p>
      </div>

      <div className="home-certs__grid">
        {CERTS.map((n, i) => (
          <div
            className={`cert-card reveal reveal--d${(i % 3) + 1}`}
            key={n}
          >
            <div className="cert-card__logo-wrap">
              <img
                src={t(`home.certifications.cert${n}_logo`)}
                alt={t(`home.certifications.cert${n}_name`)}
                className="cert-card__logo"
              />
            </div>
            <div className="cert-card__info">
              <h3 className="cert-card__name">{t(`home.certifications.cert${n}_name`)}</h3>
              <p className="cert-card__desc">{t(`home.certifications.cert${n}_desc`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
