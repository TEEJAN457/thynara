import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

const SPECS = [
  'acidity', 'peroxide', 'polyphenols', 'k232', 'k270',
  'extraction', 'varietal', 'origin',
]

const CERTS = [1, 2, 3, 4, 5, 6]
const STORAGE = [1, 2, 3, 4, 5]
const PKGS = [1, 2, 3, 4, 5, 6]

export default function Products() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="products" id="products" ref={ref}>

      {/* Hero product showcase */}
      <div className="prod-showcase reveal">
        <div className="prod-showcase__img-wrap">
          <img
            src="/Gemini_Generated_Image_40lapo40lapo40la (1).png"
            alt={t('products.p1_name')}
            className="prod-showcase__img"
          />
        </div>
        <div className="prod-showcase__info">
          <span className="prod-showcase__tag">{t('products.p1_tag')}</span>
          <h2 className="prod-showcase__name">{t('products.p1_name')}</h2>
          <p className="prod-showcase__grade">{t('products.p1_grade')}</p>
          <p className="prod-showcase__desc">{t('products.p1_desc')}</p>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="prod-specs reveal reveal--d1">
        <h3 className="prod-section-title">{t('products.specs_title')}</h3>
        <div className="prod-specs__grid">
          {SPECS.map(key => (
            <div className="prod-specs__row" key={key}>
              <span className="prod-specs__label">{t(`products.spec_${key}`)}</span>
              <span className="prod-specs__val">{t(`products.spec_${key}_val`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tasting Notes */}
      <div className="prod-tasting reveal reveal--d2">
        <h3 className="prod-section-title">{t('products.tasting_title')}</h3>
        <div className="prod-tasting__grid">
          <div className="prod-tasting__item">
            <span className="prod-tasting__label">{t('products.tasting_nose')}</span>
            <p className="prod-tasting__val">{t('products.tasting_nose_val')}</p>
          </div>
          <div className="prod-tasting__item">
            <span className="prod-tasting__label">{t('products.tasting_palate')}</span>
            <p className="prod-tasting__val">{t('products.tasting_palate_val')}</p>
          </div>
          <div className="prod-tasting__item">
            <span className="prod-tasting__label">{t('products.tasting_finish')}</span>
            <p className="prod-tasting__val">{t('products.tasting_finish_val')}</p>
          </div>
          <div className="prod-tasting__item prod-tasting__item--full">
            <span className="prod-tasting__label">{t('products.tasting_pairing')}</span>
            <p className="prod-tasting__val">{t('products.tasting_pairing_val')}</p>
          </div>
        </div>
      </div>

      {/* Certifications & Storage side by side */}
      <div className="prod-details reveal reveal--d3">
        <div className="prod-certs">
          <h3 className="prod-section-title">{t('products.cert_title')}</h3>
          <ul className="prod-certs__list">
            {CERTS.map(n => (
              <li className="prod-certs__item" key={n}>{t(`products.cert${n}`)}</li>
            ))}
          </ul>
        </div>
        <div className="prod-storage">
          <h3 className="prod-section-title">{t('products.storage_title')}</h3>
          <ul className="prod-storage__list">
            {STORAGE.map(n => (
              <li className="prod-storage__item" key={n}>{t(`products.storage${n}`)}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Available Formats */}
      <div className="prod-packaging reveal reveal--d4">
        <h3 className="prod-section-title">{t('products.packaging_title')}</h3>
        <div className="prod-packaging__grid">
          {PKGS.map(n => (
            <div className="prod-packaging__item" key={n}>
              <span className="prod-packaging__size">{t(`products.pkg${n}_size`)}</span>
              <span className="prod-packaging__type">{t(`products.pkg${n}_type`)}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
