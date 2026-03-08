import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function Founder() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="founder" id="founder" ref={ref}>

      {/* Left: Portrait placeholder */}
      <div className="founder__portrait-col reveal">
        <div className="founder__portrait-frame">
          <img
            src="/Gemini_Generated_Image_mm40dxmm40dxmm40 (1).png"
            alt={t('founder.portraitHint')}
            className="founder__portrait-img"
          />

          <span className="founder__corner founder__corner--tl" aria-hidden="true" />
          <span className="founder__corner founder__corner--br" aria-hidden="true" />
        </div>

        <div className="founder__portrait-caption">
          <span className="founder__portrait-name">{t('founder.name')}</span>
          <span className="founder__portrait-role">{t('founder.role')}</span>
        </div>

        {/* Cofounder */}
        <div className="founder__portrait-frame founder__portrait-frame--co">
          <img
            src="/Gemini_Generated_Image_hj5bmwhj5bmwhj5b (1).png"
            alt={t('founder.cofounder_name')}
            className="founder__portrait-img"
          />

          <span className="founder__corner founder__corner--tl" aria-hidden="true" />
          <span className="founder__corner founder__corner--br" aria-hidden="true" />
        </div>

        <div className="founder__portrait-caption">
          <span className="founder__portrait-name">{t('founder.cofounder_name')}</span>
          <span className="founder__portrait-role">{t('founder.cofounder_role')}</span>
        </div>

        <span className="founder__portrait-est">{t('founder.est')}</span>
      </div>

      {/* Right: Story */}
      <div className="founder__content">
        <span className="eyebrow founder__eyebrow reveal">{t('founder.eyebrow')}</span>

        <h2 className="founder__title reveal reveal--d1">
          <span>{t('founder.title_l1')}</span>
          <br />
          <span>{t('founder.title_l2')}</span>
        </h2>

        <div className="founder__bar reveal reveal--d2" aria-hidden="true" />

        <div className="founder__body reveal reveal--d2">
          <p>{t('founder.body1')}</p>
          <p>{t('founder.body2')}</p>
        </div>

        <blockquote className="founder__pullquote reveal reveal--d3">
          <span>{"\u201C"}{t('founder.pullquote_start')}</span>
          <em>{t('founder.pullquote_em')}</em>
          <span>{t('founder.pullquote_end')}{"\u201D"}</span>
        </blockquote>

        <div className="founder__body reveal reveal--d3">
          <p>{t('founder.body3')}</p>
        </div>

        <div className="founder__credentials reveal reveal--d4">
          <div className="founder__credential">
            <span className="founder__credential-val">{t('founder.cred1_val')}</span>
            <span className="founder__credential-label">
              <span>{t('founder.cred1_label_l1')}</span>
              <br />
              <span>{t('founder.cred1_label_l2')}</span>
            </span>
          </div>
          <div className="founder__credential">
            <span className="founder__credential-val">{t('founder.cred2_val')}</span>
            <span className="founder__credential-label">
              <span>{t('founder.cred2_label_l1')}</span>
              <br />
              <span>{t('founder.cred2_label_l2')}</span>
            </span>
          </div>
          <div className="founder__credential">
            <span className="founder__credential-val">{t('founder.cred3_val')}</span>
            <span className="founder__credential-label">
              <span>{t('founder.cred3_label_l1')}</span>
              <br />
              <span>{t('founder.cred3_label_l2')}</span>
            </span>
          </div>
        </div>
      </div>

    </section>
  )
}
