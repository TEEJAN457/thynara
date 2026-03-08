import { useTranslation } from '../i18n/LanguageContext'

export default function FooterBar() {
  const { t } = useTranslation()
  const copy = t('footerBar.copy').replace('{year}', new Date().getFullYear())

  return (
    <footer className="footer-bar">
      <img src="/Capture_d_écran_2026-03-08_181529-removebg-preview.png" alt="THYNARA" className="footer-bar__logo-img" />
      <p className="footer-bar__copy">{copy}</p>
      <ul className="footer-bar__links">
        {[t('footerBar.privacy'), t('footerBar.legal'), t('footerBar.sitemap')].map(link => (
          <li key={link}>
            <a href="#" className="footer-bar__link">{link}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
