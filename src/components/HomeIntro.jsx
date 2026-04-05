import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function HomeIntro() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="home-intro" ref={ref}>
      <div className="home-intro__left">
        <span className="home-intro__number reveal">{t('home.intro.number')}</span>
        <div className="home-intro__vline reveal reveal--d1" aria-hidden="true" />
        <span className="home-intro__tag reveal reveal--d2">{t('home.intro.tag')}</span>
      </div>

      <div className="home-intro__right">
        <blockquote className="home-intro__quote reveal">
          <span>{"\u201C"}{t('home.intro.quote_l1')}</span>
          <br />
          <span>{t('home.intro.quote_l2')} <em>{t('home.intro.quote_em')}</em>.{"\u201D"}</span>
        </blockquote>
        {t('home.intro.attr') && (
          <p className="home-intro__attr reveal reveal--d1">{t('home.intro.attr')}</p>
        )}

        <div className="home-intro__bar reveal reveal--d2" aria-hidden="true" />

        <div className="home-intro__body reveal reveal--d2">
          <p>{t('home.intro.body1')}</p>
          <p>{t('home.intro.body2')}</p>
        </div>

        <div className="home-intro__foot reveal reveal--d3">
          <div className="home-intro__foot-item">
            <span className="home-intro__foot-val">{t('home.intro.foot1_val')}</span>
            <span className="home-intro__foot-label">{t('home.intro.foot1_label')}</span>
          </div>
          <div className="home-intro__foot-sep" aria-hidden="true" />
          <div className="home-intro__foot-item">
            <span className="home-intro__foot-val">{t('home.intro.foot2_val')}</span>
            <span className="home-intro__foot-label">{t('home.intro.foot2_label')}</span>
          </div>
          <div className="home-intro__foot-sep" aria-hidden="true" />
          <div className="home-intro__foot-item">
            <span className="home-intro__foot-val">{t('home.intro.foot3_val')}</span>
            <span className="home-intro__foot-label">{t('home.intro.foot3_label')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
