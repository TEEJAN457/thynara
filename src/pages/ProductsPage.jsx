import { useTranslation } from '../i18n/LanguageContext'
import PageBanner from '../components/PageBanner'
import Products   from '../components/Products'

export default function ProductsPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner
        num="03"
        subtitle={t('pages.products.subtitle')}
        title={t('pages.products.title')}
        desc={t('pages.products.desc')}
      />
      <Products />
    </>
  )
}
