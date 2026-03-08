import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

export default function Footer() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="footer-contact" id="contact" ref={ref}>
      <div className="footer-contact__inner">
        <div className="footer-contact__left">
          <div className="footer-contact__details reveal">
            <div className="footer-contact__item">
              <span className="footer-contact__item-label">{t('footer.emailLabel')}</span>
              <a href="mailto:contact@thynara.tn" className="footer-contact__item-val">
                contact@thynara.tn
              </a>
            </div>
            <div className="footer-contact__item">
              <span className="footer-contact__item-label">{t('footer.phoneLabel')}</span>
              <a href="tel:+21671234567" className="footer-contact__item-val">
                +216 71 234 567
              </a>
            </div>
            <div className="footer-contact__item">
              <span className="footer-contact__item-label">{t('footer.addressLabel')}</span>
              <address className="footer-contact__item-val footer-contact__addr">
                <span>{t('footer.addr1')}</span>
                <br />
                <span>{t('footer.addr2')}</span>
                <br />
                <span>{t('footer.addr3')}</span>
              </address>
            </div>
          </div>
        </div>

        <div className="footer-contact__right reveal reveal--d1">
          <p className="footer-contact__note">{t('footer.note')}</p>
          <a
            href="mailto:contact@thynara.tn"
            className="footer__cta"
          >
            <span>{t('footer.cta')}</span>
            <span className="footer__cta-arrow" aria-hidden="true">{"\u2192"}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
