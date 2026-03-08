import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function Statement() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="statement" id="about" ref={ref}>
      <div className="statement__left">
        <span className="statement__number reveal">{t('statement.number')}</span>
        <div className="statement__vert-line reveal reveal--d1" aria-hidden="true" />
        <span className="statement__tag reveal reveal--d2">{t('statement.tag')}</span>
      </div>

      <div className="statement__right">
        <blockquote className="statement__blockquote reveal">
          <span>{"\u201C"}{t('statement.quote_l1')}</span>
          <br />
          <span>{t('statement.quote_l2')}</span>
          <br />
          <em>{t('statement.quote_l3')}</em>
          <span>.{"\u201D"}</span>
        </blockquote>
        <p className="statement__attr reveal reveal--d1">{t('statement.attr')}</p>

        <div className="statement__body reveal reveal--d2">
          <p>{t('statement.body1')}</p>
          <p>{t('statement.body2')}</p>
        </div>
      </div>
    </section>
  )
}
