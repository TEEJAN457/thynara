import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import { LanguageProvider } from './i18n/LanguageContext'
import Navbar     from './components/Navbar'
import FooterBar  from './components/FooterBar'
import ChatBot       from './components/ChatBot'
import Preloader     from './components/Preloader'
import OilTicker     from './components/OilTicker'
import Notifications from './components/Notifications'
import PageTransition from './components/PageTransition'

import HomePage       from './pages/HomePage'
import OperationsPage from './pages/OperationsPage'
import ProductsPage   from './pages/ProductsPage'
import HeritagePage   from './pages/HeritagePage'
import ContactPage    from './pages/ContactPage'

import './App.css'

export default function App() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = ({ clientX: x, clientY: y }) => {
      dot.style.left  = x + 'px'
      dot.style.top   = y + 'px'
      ring.style.left = x + 'px'
      ring.style.top  = y + 'px'
    }
    const onOver = (e) => { if (e.target.closest('a, button')) setHovering(true) }
    const onOut  = (e) => { if (e.target.closest('a, button')) setHovering(false) }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [])

  return (
    <LanguageProvider>
    <BrowserRouter>
      <Preloader />
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring${hovering ? ' hovering' : ''}`} aria-hidden="true" />

      <OilTicker />
      <Navbar />

      <main>
        <PageTransition>
          <Routes>
            <Route path="/"           element={<HomePage />} />
            <Route path="/operations" element={<OperationsPage />} />
            <Route path="/products"   element={<ProductsPage />} />
            <Route path="/heritage"   element={<HeritagePage />} />
            <Route path="/contact"    element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </main>

      <FooterBar />
      <ChatBot />
      <Notifications />
    </BrowserRouter>
    </LanguageProvider>
  )
}
