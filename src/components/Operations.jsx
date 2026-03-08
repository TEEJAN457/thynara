import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function Operations() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  const OPS = [
    { num: '01', title: t('operations.card1_title'), body: t('operations.card1_body') },
    { num: '02', title: t('operations.card2_title'), body: t('operations.card2_body') },
    { num: '03', title: t('operations.card3_title'), body: t('operations.card3_body') },
    { num: '04', title: t('operations.card4_title'), body: t('operations.card4_body') },
  ]

  return (
    <section className="operations" id="operations" ref={ref}>
      <div className="operations__header">
        <div className="operations__header-left">
          <span className="eyebrow reveal">{t('operations.eyebrow')}</span>
          <h2 className="operations__title shimmer-text reveal reveal--d1">{t('operations.title')}</h2>
        </div>
        <div className="operations__rule reveal reveal--d2" aria-hidden="true" />
      </div>

      <div className="operations__grid">
        {OPS.map((op, i) => (
          <article
            className={`op-card reveal reveal--d${i + 1}`}
            key={op.num}
          >
            <span className="op-card__num">{op.num}</span>
            <h3 className="op-card__title">{op.title}</h3>
            <p className="op-card__body">{op.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
