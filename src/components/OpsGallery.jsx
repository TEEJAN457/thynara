import { useRevealGroup } from '../hooks/useRevealGroup'
import { useTranslation } from '../i18n/LanguageContext'

const IMAGES = [
  { slot: 1, src: '/Crafters Q&A - Oliviers & Co_ - FoodCrafters.jpg' },
  { slot: 2, src: '/Gemini_Generated_Image_vxl2gavxl2gavxl2.png' },
  { slot: 3, src: '/Gemini_Generated_Image_pfb22vpfb22vpfb2 (1).png' },
  { slot: 4, src: '/Gemini_Generated_Image_4z0t9m4z0t9m4z0t.png' },
]

export default function OpsGallery() {
  const ref = useRevealGroup()
  const { t } = useTranslation()

  return (
    <section className="ops-gallery" ref={ref}>
      <div className="ops-gallery__header">
        <span className="eyebrow reveal">{t('operations.gallery_eyebrow')}</span>
        <h2 className="ops-gallery__title reveal reveal--d1">{t('operations.gallery_title')}</h2>
        <p className="ops-gallery__subtitle reveal reveal--d2">{t('operations.gallery_subtitle')}</p>
      </div>

      <div className="ops-gallery__grid">
        {IMAGES.map((img, i) => (
          <figure
            className={`ops-gallery__item reveal reveal--d${i + 1}`}
            key={img.slot}
          >
            <div className="ops-gallery__img-wrap">
              <img
                src={img.src}
                alt={t(`operations.gallery${img.slot}_caption`)}
                className="ops-gallery__img"
              />
            </div>
            <figcaption className="ops-gallery__caption">
              <span className="ops-gallery__caption-num">0{img.slot}</span>
              <p className="ops-gallery__caption-text">
                {t(`operations.gallery${img.slot}_caption`)}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
