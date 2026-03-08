import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [curtain, setCurtain] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const prevPath = useRef(location.pathname)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname

      // 1) fade curtain IN (keep showing OLD content)
      setCurtain(true)

      // 2) after curtain fully covers screen, swap content + scroll
      const swapTimer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
        setDisplayChildren(children)
      }, 420)

      // 3) then fade curtain OUT to reveal new page
      const revealTimer = setTimeout(() => {
        setCurtain(false)
      }, 500)

      return () => {
        clearTimeout(swapTimer)
        clearTimeout(revealTimer)
      }
    } else {
      // same path — just update children (e.g. language change)
      setDisplayChildren(children)
    }
  }, [location.pathname, children])

  return (
    <>
      <div className={`page-curtain${curtain ? ' page-curtain--active' : ''}`} />
      <div className="page-transition">
        {displayChildren}
      </div>
    </>
  )
}
