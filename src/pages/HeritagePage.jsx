import { useTranslation } from '../i18n/LanguageContext'
import PageBanner from '../components/PageBanner'
import Heritage   from '../components/Heritage'
import Founder    from '../components/Founder'

export default function HeritagePage() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner
        num="04"
        subtitle={t('pages.heritage.subtitle')}
        title={t('pages.heritage.title')}
        desc={t('pages.heritage.desc')}
      />
      <Heritage />
      <Founder />
    </>
  )
}
