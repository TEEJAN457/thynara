import { useTranslation } from '../i18n/LanguageContext'
import PageBanner from '../components/PageBanner'
import Footer     from '../components/Footer'

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner
        num="06"
        subtitle={t('pages.contact.subtitle')}
        title={t('pages.contact.title')}
        desc={t('pages.contact.desc')}
      />
      <Footer />
    </>
  )
}
