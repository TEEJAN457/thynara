import { useEffect, useState } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    /* Fake loading — accelerates toward the end */
    let raf
    let start = null

    function tick(ts) {
      if (!start) start = ts
      const elapsed = ts - start
      const duration = 2200
      const raw = Math.min(elapsed / duration, 1)
      /* ease-out curve — fast start, slow finish, then snap */
      const eased = 1 - Math.pow(1 - raw, 3)
      setProgress(Math.round(eased * 100))

      if (raw < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        /* Hold at 100% briefly, then fade out */
        setTimeout(() => setDone(true), 300)
        setTimeout(() => setHidden(true), 1000)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (hidden) return null

  return (
    <div className={`preloader ${done ? 'preloader--done' : ''}`}>
      <div className="preloader__content">
        <img src="/Capture_d_écran_2026-03-08_181529-removebg-preview.png" alt="THYNARA" className="preloader__logo-img" />
        <div className="preloader__bar-track">
          <div className="preloader__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="preloader__pct">{progress}%</span>
      </div>
    </div>
  )
}
