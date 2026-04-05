import { useState } from 'react'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function Footer() {
  const ref = useRevealGroup()
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '', market: '', interest: '', partnership: '', message: '',
  })

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Partnership inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name & Company: ${form.name}\nMarket / Country: ${form.market}\nProduct Interest: ${form.interest}\nPartnership Type: ${form.partnership}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@thynara.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="footer-contact" id="contact" ref={ref}>
      <div className="footer-contact__inner">

        {/* Left: Info */}
        <div className="footer-contact__left">
          <p className="footer-contact__intro reveal">{t('footer.intro')}</p>

          <div className="footer-contact__details reveal reveal--d1">
            <div className="footer-contact__item">
              <span className="footer-contact__item-label">{t('footer.emailLabel')}</span>
              <a href="mailto:info@thynara.com" className="footer-contact__item-val">
                {t('footer.email')}
              </a>
            </div>
            <div className="footer-contact__item">
              <span className="footer-contact__item-label">{t('footer.locationLabel')}</span>
              <span className="footer-contact__item-val">{t('footer.location')}</span>
            </div>
            <div className="footer-contact__item">
              <span className="footer-contact__item-label">{t('footer.linkedinLabel')}</span>
              <span className="footer-contact__item-val">{t('footer.linkedin')}</span>
            </div>
          </div>

          <p className="footer-contact__response reveal reveal--d2">{t('footer.response')}</p>
        </div>

        {/* Right: Form */}
        <div className="footer-contact__right reveal reveal--d1">
          <h3 className="footer-contact__form-title">{t('footer.form_title')}</h3>
          <form className="footer-contact__form" onSubmit={handleSubmit}>
            <div className="footer-contact__field">
              <label className="footer-contact__label">{t('footer.form_name')}</label>
              <input
                type="text"
                className="footer-contact__input"
                placeholder={t('footer.form_name_ph')}
                value={form.name}
                onChange={update('name')}
                required
              />
            </div>
            <div className="footer-contact__field">
              <label className="footer-contact__label">{t('footer.form_market')}</label>
              <input
                type="text"
                className="footer-contact__input"
                placeholder={t('footer.form_market_ph')}
                value={form.market}
                onChange={update('market')}
              />
            </div>
            <div className="footer-contact__field">
              <label className="footer-contact__label">{t('footer.form_interest')}</label>
              <input
                type="text"
                className="footer-contact__input"
                placeholder={t('footer.form_interest_ph')}
                value={form.interest}
                onChange={update('interest')}
              />
            </div>
            <div className="footer-contact__field">
              <label className="footer-contact__label">{t('footer.form_partnership')}</label>
              <input
                type="text"
                className="footer-contact__input"
                placeholder={t('footer.form_partnership_ph')}
                value={form.partnership}
                onChange={update('partnership')}
              />
            </div>
            <div className="footer-contact__field">
              <label className="footer-contact__label">{t('footer.form_message')}</label>
              <textarea
                className="footer-contact__input footer-contact__textarea"
                placeholder={t('footer.form_message_ph')}
                value={form.message}
                onChange={update('message')}
                rows={4}
              />
            </div>
            <div className="footer-contact__actions">
              <button type="submit" className="footer__cta">
                <span>{t('footer.cta1')}</span>
                <span className="footer__cta-arrow" aria-hidden="true">{"\u2192"}</span>
              </button>
              <button type="submit" className="footer__cta footer__cta--outline">
                <span>{t('footer.cta2')}</span>
                <span className="footer__cta-arrow" aria-hidden="true">{"\u2192"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
