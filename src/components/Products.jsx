import { Link } from 'react-router-dom'
import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

const P1_DETAILS = ['origin', 'type', 'harvest', 'extraction', 'quality', 'use', 'packaging', 'supply']
const P3_DETAILS = ['origin', 'type', 'harvest', 'extraction', 'quality', 'sizes', 'use', 'supply']
const P2_DETAILS = ['origin', 'type', 'use', 'supply']
const CERTS = [1, 2, 3]

function ProductCard({ prefix, details, image, t, delay }) {
  return (
    <article className={`prod-card reveal reveal--d${delay}`}>
      <div className="prod-card__img-wrap">
        <img
          src={image}
          alt={t(`products.${prefix}_name`)}
          className="prod-card__img"
        />
      </div>
      <div className="prod-card__info">
        <span className="prod-card__tag">{t(`products.${prefix}_tag`)}</span>
        <h2 className="prod-card__name">{t(`products.${prefix}_name`)}</h2>
        <p className="prod-card__grade">{t(`products.${prefix}_grade`)}</p>
        <p className="prod-card__desc">{t(`products.${prefix}_desc`)}</p>

        <div className="prod-card__details">
          {details.map(key => {
            const val = t(`products.${prefix}_detail_${key}`)
            if (!val) return null
            return (
              <div className="prod-card__detail" key={key}>
                <span className="prod-card__detail-label">{t(`products.detail_${key}`)}</span>
                <span className="prod-card__detail-val">{val}</span>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="prod-card__certs">
          <h3 className="prod-card__certs-title">{t('products.cert_title')}</h3>
          <ul className="prod-card__certs-list">
            {CERTS.map(n => (
              <li key={n}>{t(`products.cert${n}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function Products() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="products" id="products" ref={ref}>

      {/* Product 1: Extra Virgin */}
      <ProductCard
        prefix="p1"
        details={P1_DETAILS}
        image="/Gemini_Generated_Image_40lapo40lapo40la (1).png"
        t={t}
        delay={1}
      />

      {/* Product 3: Bottled */}
      <ProductCard
        prefix="p3"
        details={P3_DETAILS}
        image="/WhatsApp Image 2026-04-05 at 15.17.14.jpeg"
        t={t}
        delay={2}
      />

      {/* Product 2: Organic */}
      <ProductCard
        prefix="p2"
        details={P2_DETAILS}
        image="/Gemini_Generated_Image_pfb22vpfb22vpfb2 (1).png"
        t={t}
        delay={3}
      />

      {/* Expanding the Collection */}
      <div className="prod-expanding reveal reveal--d4">
        <h3 className="prod-expanding__title">{t('products.expanding_title')}</h3>
        <p className="prod-expanding__body">{t('products.expanding_body')}</p>
        <p className="prod-expanding__note">{t('products.expanding_note')}</p>
      </div>

      {/* For Professional Buyers */}
      <div className="prod-buyers reveal reveal--d4">
        <span className="eyebrow">{t('products.buyers_eyebrow')}</span>
        <h3 className="prod-buyers__title">{t('products.buyers_title')}</h3>
        <ul className="prod-buyers__list">
          <li>{t('products.buyers_item1')}</li>
          <li>{t('products.buyers_item2')}</li>
        </ul>
        <p className="prod-buyers__note">{t('products.buyers_note')}</p>
        <div className="prod-buyers__actions">
          <Link to="/contact" className="prod-buyers__btn">
            <span>{t('products.buyers_cta1')}</span>
            <span aria-hidden="true">{"\u2192"}</span>
          </Link>
          <Link to="/contact" className="prod-buyers__btn prod-buyers__btn--outline">
            <span>{t('products.buyers_cta2')}</span>
            <span aria-hidden="true">{"\u2192"}</span>
          </Link>
        </div>
      </div>

    </section>
  )
}
