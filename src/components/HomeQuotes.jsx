import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function HomeQuotes() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="home-quotes" ref={ref}>
      <div className="home-quotes__grid">
        <blockquote className="home-quotes__card reveal">
          <p className="home-quotes__text">
            {"\u201C"}{t('home.quotes.q1_text')}{"\u201D"}
          </p>
          <footer className="home-quotes__footer">
            <span className="home-quotes__attr">{t('home.quotes.q1_attr')}</span>
            <span className="home-quotes__role">{t('home.quotes.q1_role')}</span>
          </footer>
        </blockquote>

        <blockquote className="home-quotes__card reveal reveal--d2">
          <p className="home-quotes__text">
            {"\u201C"}{t('home.quotes.q2_text')}{"\u201D"}
          </p>
          <footer className="home-quotes__footer">
            <span className="home-quotes__attr">{t('home.quotes.q2_attr')}</span>
            <span className="home-quotes__role">{t('home.quotes.q2_role')}</span>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
