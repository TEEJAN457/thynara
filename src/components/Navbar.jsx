import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageContext'
import LanguageSelector from './LanguageSelector'

const LINK_KEYS = [
  { key: 'home',       to: '/',           end: true },
  { key: 'operations', to: '/operations', end: false },
  { key: 'products',   to: '/products',   end: false },
  { key: 'heritage',   to: '/heritage',   end: false },
  { key: 'contact',    to: '/contact',    end: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close on route change */
  const { pathname } = useLocation()
  useEffect(() => { setMenuOpen(false) }, [pathname])

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* close menu on route change */
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' nav--open' : ''}`}>
      <NavLink to="/" className="nav__logo" onClick={closeMenu}>
        <img src="/Capture_d_écran_2026-03-08_181529-removebg-preview.png" alt="THYNARA" className="nav__logo-img" />
      </NavLink>

      <div className={`nav__right${menuOpen ? ' nav__right--open' : ''}`}>
        <ul className="nav__links">
          {LINK_KEYS.map(({ key, to, end }) => (
            <li key={key}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nav__link${isActive ? ' active' : ''}`
                }
                onClick={closeMenu}
              >
                {t(`nav.${key}`)}
              </NavLink>
            </li>
          ))}
        </ul>
        <LanguageSelector />
      </div>

      <button
        className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
