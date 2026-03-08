import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'عربي' },
]

export default function LanguageSelector() {
  const { lang, setLang } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  /* Close on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const current = LANGS.find(l => l.code === lang)

  return (
    <div className="lang-sel" ref={ref}>
      <button
        className="lang-sel__btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Select language"
        style={{ cursor: 'none' }}
      >
        {current.label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.2" className={`lang-sel__chevron${open ? ' lang-sel__chevron--open' : ''}`}>
          <polyline points="1,1 5,5 9,1" />
        </svg>
      </button>
      {open && (
        <ul className="lang-sel__menu">
          {LANGS.map(l => (
            <li key={l.code}>
              <button
                className={`lang-sel__option${l.code === lang ? ' lang-sel__option--active' : ''}`}
                onClick={() => { setLang(l.code); setOpen(false) }}
                style={{ cursor: 'none' }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
