import { useTranslation } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__top-line" aria-hidden="true" />
        <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
        <h1 className="hero__title">THYNARA</h1>
        <div className="hero__mid-line" aria-hidden="true" />
        <p className="hero__subtitle">{t('hero.subtitle')}</p>
        <p className="hero__tagline">{t('hero.tagline')}</p>
      </div>

    </section>
  )
}
