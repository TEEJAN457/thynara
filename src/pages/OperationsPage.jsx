import { useTranslation } from '../i18n/LanguageContext'
import PageBanner  from '../components/PageBanner'
import Operations  from '../components/Operations'
import OpsGallery     from '../components/OpsGallery'
import ExportNetwork  from '../components/ExportNetwork'
import Numbers        from '../components/Numbers'

export default function OperationsPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner
        num="02"
        subtitle={t('pages.operations.subtitle')}
        title={t('pages.operations.title')}
        desc={t('pages.operations.desc')}
      />
      <Operations />
      <OpsGallery />
      <ExportNetwork />
      <Numbers />
    </>
  )
}
