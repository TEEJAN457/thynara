import { createContext, useContext, useState, useCallback, useEffect } from 'react'

import en from './en.json'
import fr from './fr.json'
import ar from './ar.json'

const translations = { en, fr, ar }

const LanguageContext = createContext()

function get(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('olive-lang') || 'en' }
    catch { return 'en' }
  })

  const setLang = useCallback((l) => {
    setLangState(l)
    try { localStorage.setItem('olive-lang', l) } catch {}
  }, [])

  /* Set dir attribute on <html> for RTL */
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((key) => {
    const val = get(translations[lang], key)
    if (val !== undefined) return val
    /* Fallback to English */
    const fallback = get(translations.en, key)
    if (fallback !== undefined) return fallback
    return key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
